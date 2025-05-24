# DDAINetwork-Bot 🤖

Script ini digunakan untuk mengotomatiskan klaim misi pada platform DDAI Network, membantu pengguna menyelesaikan tugas dengan cepat dan efisien! 🚀

![photo_2025-05-24_22-34-26](https://github.com/user-attachments/assets/2f3006c7-3fb5-4f8a-a342-c68c2eebf77b)


---

## 📌 Fitur
- ✅ Auto klaim semua misi yang berstatus `PENDING` menggunakan token dari `tokens.txt`
- 🔌 Dukungan proxy (`proxy.txt`) untuk koneksi aman (http, socks4, socks5)
- 🎨 Tampilan console yang keren dengan banner `cfonts` dan log berwarna menggunakan `chalk`
- 🎁 Menampilkan hasil reward (requests) setelah klaim misi
- ⏱️ Delay 2 detik antar klaim untuk menghindari rate limiting
- 😎 Prompt interaktif untuk memilih penggunaan proxy

---

![asdasd](https://github.com/user-attachments/assets/aaf51ed6-58ff-46c8-8d5e-ad40063d5776)

## Take the accessToken and input to file tokens.txt

## 🚀 Cara Penggunaan

1. **Clone repository ini**
```sh
git clone https://github.com/airdrop-888/ddaiNetwork-Bot.git
cd ddaiNetwork-Bot
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
