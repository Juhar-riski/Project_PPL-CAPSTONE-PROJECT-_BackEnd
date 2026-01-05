# 🚀 Project PPL - Capstone Project (Backend)

![Status](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![Node.js](https://img.shields.io/badge/Node.js-v16+-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

> **Tugas Akhir Mata Kuliah PPL (Praktikum Pengembangan Perangkat Lunak)**  
> Sistem Backend untuk Capstone Project

---

## 📋 Daftar Isi

- [Tentang Project](#-tentang-project)
- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Prasyarat](#-prasyarat)
- [Instalasi](#-instalasi)
- [Konfigurasi Environment](#-konfigurasi-environment)
- [Menjalankan Aplikasi](#-menjalankan-aplikasi)
- [Struktur Project](#-struktur-project)
- [API Endpoints](#-api-endpoints)
- [Contoh Penggunaan API](#-contoh-penggunaan-api)
- [Kontribusi](#-kontribusi)
- [Tim Pengembang](#-tim-pengembang)
- [Lisensi](#-lisensi)

---

## 📖 Tentang Project

Project ini merupakan sistem **Backend** yang dikembangkan sebagai bagian dari Capstone Project untuk Mata Kuliah Praktikum Proyek Perangkat Lunak (PPL). Backend ini menyediakan RESTful API yang robust dan scalable untuk mendukung aplikasi client (Web/Mobile).

### Tujuan Pengembangan

- Mengimplementasikan konsep-konsep pengembangan perangkat lunak yang telah dipelajari
- Membangun sistem backend yang dapat diandalkan dengan best practices
- Menerapkan arsitektur yang scalable dan mudah dimaintain
- Mengintegrasikan berbagai teknologi modern dalam pengembangan aplikasi

---

## ✨ Fitur Utama

Backend ini dilengkapi dengan fitur-fitur berikut:

### 👥 Manajemen User
- Registrasi pengguna baru
- Login & logout

### 📦 CRUD Operations
- Create, Read, Update, Delete untuk resource utama
- Validasi data input yang ketat
- Error handling yang komprehensif
- Response format yang konsisten

### 📁 File Management
- Upload file/gambar
- Penyimpanan file di folder `public/uploads`
- Validasi tipe dan ukuran file
- URL generator untuk akses file

### 🛡️ Security Features
- CORS configuration
- Request rate limiting
- SQL injection prevention (via Prisma ORM)
- XSS protection
- Input sanitization

---

## 🛠 Teknologi yang Digunakan

### Core Technologies

| Teknologi | Deskripsi |
|-----------|-----------|
| **Node.js** | Runtime environment untuk JavaScript |
| **Express.js** | Web framework untuk Node.js |
| **Prisma ORM** | Modern database toolkit untuk Node.js |
| **MySQL/PostgreSQL** | Relational database management system |

### Dependencies Utama

```json
{
  "express": "^4.x",
  "@prisma/client": "^5.x",
  "bcrypt": "^5.x",
  "dotenv": "^16.x",
  "cors": "^2.x",
  "multer": "^1.x",
  "express-validator": "^7.x"
}
```

### Development Tools

- **Prisma Studio** - GUI untuk database management
- **Nodemon** - Auto-restart server saat development
- **Postman/Thunder Client** - API testing

---

## 📋 Prasyarat

Pastikan sistem Anda telah menginstall:

- **Node.js** (versi 16 atau lebih tinggi) - [Download](https://nodejs.org/)
- **npm** (versi 8 atau lebih tinggi) - Terinstall otomatis dengan Node.js
- **MySQL** atau **PostgreSQL** - Database server
- **Git** - Version control - [Download](https://git-scm.com/)

Cek versi yang terinstall:

```bash
node --version
npm --version
```

---

## 🚀 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/Juhar-riski/Project_PPL-CAPSTONE-PROJECT-_BackEnd.git
cd Project_PPL-CAPSTONE-PROJECT-_BackEnd
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Database

**Untuk MySQL:**

```bash
# Login ke MySQL
mysql -u root -p

# Buat database baru
CREATE DATABASE capstone_db;
```

**Untuk PostgreSQL:**

```bash
# Login ke PostgreSQL
psql -U postgres

# Buat database baru
CREATE DATABASE capstone_db;
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Run Database Migration

```bash
npx prisma migrate dev
```

### 6. (Opsional) Seed Database

```bash
npx prisma db seed
```

---

## ⚙️ Konfigurasi Environment

### 1. Buat File `.env`

Salin file `.env sample` menjadi `.env`:

```bash
cp ".env sample" .env
```

### 2. Isi Environment Variables

Edit file `.env` dengan konfigurasi Anda

### 3. Database URL Format

**MySQL:**
```
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
```

**PostgreSQL:**
```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

---

## 🏃 Menjalankan Aplikasi

### Development Mode

```bash
npm run dev
```

Server akan berjalan di: `http://localhost:4000`

### Production Mode

```bash
npm start
```

## 🤝 Kontribusi

Kami sangat terbuka untuk kontribusi dari siapa saja! Jika Anda ingin berkontribusi pada project ini, silakan ikuti langkah-langkah berikut:

### Cara Berkontribusi

1. **Fork** repository ini
2. **Clone** fork Anda ke lokal
   ```bash
   git clone https://github.com/username-anda/Project_PPL-CAPSTONE-PROJECT-_BackEnd.git
   ```
3. **Buat branch** baru untuk fitur/fix Anda
   ```bash
   git checkout -b feature/nama-fitur
   ```
4. **Commit** perubahan Anda dengan pesan yang jelas
   ```bash
   git commit -m "Add: fitur baru untuk upload multiple images"
   ```
5. **Push** ke branch Anda
   ```bash
   git push origin feature/nama-fitur
   ```
6. Buat **Pull Request** ke branch `main`

### Coding Standards

- Gunakan **camelCase** untuk nama variabel dan fungsi
- Gunakan **PascalCase** untuk nama class
- Tambahkan **komentar** untuk logic yang kompleks
- Ikuti **ESLint** configuration yang ada
- Tulis **code yang clean** dan mudah dibaca
- Buat **commit message** yang deskriptif

### Pelaporan Bug

Jika Anda menemukan bug, silakan buat **Issue** dengan:
- Judul yang jelas dan deskriptif
- Langkah-langkah untuk mereproduksi bug
- Hasil yang diharapkan vs hasil aktual
- Screenshot (jika memungkinkan)
- Environment details (OS, Node version, dll)

### Request Fitur Baru

Untuk request fitur baru:
1. Cek dulu apakah fitur sudah ada atau sedang dikembangkan
2. Buat **Issue** dengan label `enhancement`
3. Jelaskan use case dan manfaat fitur tersebut
4. Diskusikan implementasi dengan maintainer

---

## 👨‍💻 Tim Pengembang

Project ini dikembangkan oleh:

### Project Lead
- **Juhar Riski** - [GitHub](https://github.com/Juhar-riski)

### Contributors
Terima kasih kepada semua kontributor yang telah membantu pengembangan project ini!

Lihat daftar lengkap kontributor di [Contributors Page](https://github.com/Juhar-riski/Project_PPL-CAPSTONE-PROJECT-_BackEnd/graphs/contributors).

---

## 📄 Lisensi

Project ini dilisensikan di bawah [MIT License](LICENSE).

```
MIT License

Copyright (c) 2024 Juhar Riski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Kontak & Support

Jika Anda memiliki pertanyaan atau butuh bantuan:

- **Email**: [email-anda@example.com](mailto:juharkades123@gmail.com)
- **GitHub Issues**: [Create an Issue](https://github.com/Juhar-riski/Project_PPL-CAPSTONE-PROJECT-_BackEnd/issues)

---

## 🙏 Acknowledgments

Terima kasih kepada:
- Dosen Pembimbing Mata Kuliah PPL
- Semua pihak yang telah mendukung pengembangan project ini
- Open source community untuk tools dan libraries yang digunakan

---

## 📚 Referensi & Resources

- [Node.js Documentation](https://nodejs.org/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Prisma Documentation](https://www.prisma.io/docs)
- [RESTful API Design](https://restfulapi.net/)

---

<div align="center">
  <p>Made with ❤️ by Juhar Riski & Team</p>
  <p>© 2024 PPL Capstone Project. All rights reserved.</p>
</div>
