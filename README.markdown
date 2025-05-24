# DDAINetwork-Bot 🤖

Script ini digunakan untuk mengotomatiskan klaim misi pada platform DDAI Network, membantu pengguna menyelesaikan tugas dengan cepat dan efisien! 🚀

![DDAINetwork](https://imagedelivery.net/BvtfqsKIStCipnKIQ2dzlw/151856e2-162e-46f9-9c80-2e94283fc500/public)

---

## 📌 Fitur
- ✅ Auto klaim semua misi yang berstatus `PENDING` menggunakan token dari `tokens.txt`
- 🔌 Dukungan proxy (`proxy.txt`) untuk koneksi aman (http, socks4, socks5)
- 🎨 Tampilan console yang keren dengan banner `cfonts` dan log berwarna menggunakan `chalk`
- 🎁 Menampilkan hasil reward (requests) setelah klaim misi
- ⏱️ Delay 2 detik antar klaim untuk menghindari rate limiting
- 😎 Prompt interaktif untuk memilih penggunaan proxy

---

## 🚀 Cara Penggunaan

1. **Clone repository ini**
```sh
git clone https://github.com/your-username/DDAINetwork-Bot.git
cd DDAINetwork-Bot
```

---

2. **Install Dependencies**
```sh
npm install axios chalk@4 cfonts http-proxy-agent socks-proxy-agent readline-sync
```

---

3. **Siapkan file tokens**

- Buat file `tokens.txt` dan isi dengan token JWT, satu token per baris. Contoh:
```sh
eyJhbGciOiJIUzI1NiJ9...
eyJhbGciOiJIUzI1NiJ9...
```

- (Opsional) Buat `proxy.txt` jika ingin menggunakan proxy. Contoh:
```sh
http://username:password@host:port
socks5://username:password@host:port
socks4://username:password@host:port
```

---

4. **Jalankan Script**
```sh
node task.js
```
Atau, buat file `Run.bat` dengan isi:
```bat
@echo off
node task.js
pause
```
Lalu double-click `Run.bat`.

---

5. **Ikuti Instruksi**

- Pilih apakah ingin menggunakan proxy (y/n).
- Script akan otomatis mengambil daftar misi dan mencoba klaim misi yang belum selesai.
- Hasil klaim akan ditampilkan dengan log berwarna dan emoji untuk memudahkan tracking! 🌟

---

## ⚠️ Disclaimer
Gunakan script ini dengan bijak dan sesuai aturan platform DDAI Network.  
Developer tidak bertanggung jawab atas penyalahgunaan atau banned akun.

---

## 🤝 Kontribusi
Jika ingin berkontribusi, silakan fork repo ini dan ajukan pull request! Kami terbuka untuk ide baru dan perbaikan.

---

## 📞 Kontak
Jika ada pertanyaan, hubungi: [@balveerxyz](https://t.me/balveerxyz)  
Join channel Telegram gratis: [t.me/airdroplocked](https://t.me/airdroplocked)