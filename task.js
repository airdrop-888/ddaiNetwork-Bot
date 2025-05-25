const axios = require('axios');
const chalk = require('chalk');
const cfonts = require('cfonts');
const {HttpProxyAgent} = require('http-proxy-agent');
const {HttpsProxyAgent} = require('https-proxy-agent');
const {SocksProxyAgent} = require('socks-proxy-agent');
const readlineSync = require('readline-sync');
const fs = require('fs'); // Ensure fs is required

// Display banner
cfonts.say('Airdrop 888', {
  font: 'block',
  align: 'center',
  colors: ['cyan', 'yellow'],
  background: 'transparent',
  letterSpacing: 1,
  lineHeight: 1,
  space: true,
  maxLength: '0',
});

console.log(chalk.green('Script coded by - @balveerxyz | Channel Tele: t.me/airdroplocked | Auto Task DDAI Network'));

// Prompt for proxy usage
const useProxy = readlineSync.question(chalk.yellow('Mau menggunakan proxy? (y/n): ')).toLowerCase();

let agent = null;
if (useProxy === 'y') {
  try {
    const proxies = fs.readFileSync('proxy.txt', 'utf-8').split('\n').filter(Boolean);
    const randomProxy = proxies[Math.floor(Math.random() * proxies.length)];
    agent = randomProxy.startsWith('socks') ? new SocksProxyAgent(randomProxy) : new HttpProxyAgent(randomProxy);
    console.log(chalk.blue(`🔧 Using proxy: ${randomProxy}`));
  } catch (error) {
    console.log(chalk.red(`🚨 Error reading proxy.txt: ${error.message} 😞`));
    process.exit(1);
  }
}

// Read tokens
let tokens;
try {
  tokens = fs.readFileSync('tokens.txt', 'utf-8').split('\n').filter(Boolean);
} catch (error) {
  console.log(chalk.red(`🚨 Error reading tokens.txt: ${error.message} 😞`));
  process.exit(1);
}

async function claimMission(missionId, token) {
  try {
    const config = {
      method: 'post',
      url: `https://auth.ddai.network/missions/claim/${missionId}`,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      httpsAgent: agent,
    };

    const response = await axios(config);
    if (response.data.status === 'success') {
      console.log(chalk.green(`🎉 Claimed mission ${missionId} successfully! Rewards: ${response.data.data.rewards.requests} requests ✨`));
    } else {
      console.log(chalk.red(`❌ Failed to claim mission ${missionId}: ${JSON.stringify(response.data.error)} 😞`));
    }
  } catch (error) {
    console.log(chalk.red(`🚨 Error claiming mission ${missionId}: ${error.message} 😞`));
  }
}

async function getMissions(token) {
  try {
    const config = {
      method: 'get',
      url: 'https://auth.ddai.network/missions',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      httpsAgent: agent,
    };

    const response = await axios(config);
    if (response.data.status === 'success') {
      return response.data.data.missions;
    } else {
      console.log(chalk.red(`❌ Failed to fetch missions: ${JSON.stringify(response.data.error)} 😞`));
      return [];
    }
  } catch (error) {
    console.log(chalk.red(`🚨 Error fetching missions: ${error.message} 😞`));
    return [];
  }
}

async function main() {
  for (const token of tokens) {
    console.log(chalk.cyan(`🔑 Processing token: ${token.slice(0, 10)}...`));
    const missions = await getMissions(token);
    if (missions.length === 0) {
      console.log(chalk.yellow(`⚠️ No missions available for this token.`));
      continue;
    }
    for (const mission of missions) {
      if (mission.status === 'PENDING' && mission.progress < mission.conditions.target) {
        console.log(chalk.yellow(`🚀 Attempting to claim: ${mission.title} (ID: ${mission._id})`));
        await claimMission(mission._id, token);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Delay 2 seconds between claims
      } else {
        console.log(chalk.gray(`⏩ Skipping ${mission.title} (ID: ${mission._id}) - Already claimed or in progress`));
      }
    }
  }
  console.log(chalk.green('✅ All tasks completed! 🌟'));
}

main().catch(err => console.log(chalk.red(`🚨 Main process error: ${err.message} 😞`)));