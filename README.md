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

Project ini merupakan sistem **Backend** yang dikembangkan sebagai bagian dari Capstone Project untuk Mata Kuliah Praktikum Pengembangan Perangkat Lunak (PPL). Backend ini menyediakan RESTful API yang robust dan scalable untuk mendukung aplikasi client (Web/Mobile).

### Tujuan Pengembangan

- Mengimplementasikan konsep-konsep pengembangan perangkat lunak yang telah dipelajari
- Membangun sistem backend yang dapat diandalkan dengan best practices
- Menerapkan arsitektur yang scalable dan mudah dimaintain
- Mengintegrasikan berbagai teknologi modern dalam pengembangan aplikasi

---

## ✨ Fitur Utama

Backend ini dilengkapi dengan fitur-fitur berikut:

### 🔐 Autentikasi & Keamanan
- **JWT Authentication** - Sistem autentikasi berbasis token yang aman
- **Role-Based Access Control (RBAC)** - Manajemen hak akses berdasarkan role pengguna
- **Password Encryption** - Enkripsi password menggunakan bcrypt
- **Token Refresh Mechanism** - Sistem refresh token otomatis

### 👥 Manajemen User
- Registrasi pengguna baru
- Login & logout
- Update profil pengguna
- Manajemen role dan permissions
- Reset password

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
| **JWT** | JSON Web Token untuk autentikasi |

### Dependencies Utama

```json
{
  "express": "^4.x",
  "@prisma/client": "^5.x",
  "bcrypt": "^5.x",
  "jsonwebtoken": "^9.x",
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
- **ESLint** - Code linting (optional)

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

Edit file `.env` dengan konfigurasi Anda:

```env
# Server Configuration
NODE_ENV=development
PORT=5000
HOST=localhost

# Database Configuration
DATABASE_URL="mysql://username:password@localhost:3306/capstone_db"
# Atau untuk PostgreSQL:
# DATABASE_URL="postgresql://username:password@localhost:5432/capstone_db"

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_min_32_characters
JWT_EXPIRES_IN=24h
JWT_REFRESH_SECRET=your_refresh_token_secret_key
JWT_REFRESH_EXPIRES_IN=7d

# Upload Configuration
MAX_FILE_SIZE=5242880
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/jpg,application/pdf

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# Other
API_VERSION=v1
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100
```

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

Server akan berjalan di: `http://localhost:5000`

### Production Mode

```bash
npm start
```

### Prisma Studio (Database GUI)

```bash
npx prisma studio
```

Akan membuka interface di: `http://localhost:5555`

### Available Scripts

| Command | Deskripsi |
|---------|-----------|
| `npm start` | Menjalankan server dalam production mode |
| `npm run dev` | Menjalankan server dengan nodemon (auto-reload) |
| `npx prisma studio` | Membuka Prisma Studio GUI |
| `npx prisma migrate dev` | Membuat dan menjalankan migration |
| `npx prisma generate` | Generate Prisma Client |
| `npx prisma db push` | Push schema changes tanpa migration |
| `npx prisma db seed` | Menjalankan database seeder |

---

## 📁 Struktur Project

```
Project_PPL-CAPSTONE-PROJECT-_BackEnd/
│
├── prisma/
│   ├── schema.prisma          # Schema database Prisma
│   └── migrations/            # Database migrations history
│
├── public/
│   └── uploads/               # Folder untuk menyimpan file upload
│       ├── images/
│       ├── documents/
│       └── temp/
│
├── src/
│   ├── config/
│   │   ├── database.js        # Konfigurasi database
│   │   ├── jwt.js             # Konfigurasi JWT
│   │   └── upload.js          # Konfigurasi file upload
│   │
│   ├── controllers/
│   │   ├── authController.js  # Logic autentikasi
│   │   ├── userController.js  # Logic manajemen user
│   │   └── ...                # Controllers lainnya
│   │
│   ├── middlewares/
│   │   ├── auth.js            # Middleware autentikasi JWT
│   │   ├── validation.js      # Middleware validasi input
│   │   ├── errorHandler.js    # Error handling middleware
│   │   ├── upload.js          # Middleware upload file
│   │   └── rateLimiter.js     # Rate limiting middleware
│   │
│   ├── routes/
│   │   ├── index.js           # Main router
│   │   ├── authRoutes.js      # Routes autentikasi
│   │   ├── userRoutes.js      # Routes user
│   │   └── ...                # Routes lainnya
│   │
│   ├── services/
│   │   ├── authService.js     # Business logic autentikasi
│   │   ├── userService.js     # Business logic user
│   │   └── ...                # Services lainnya
│   │
│   ├── utils/
│   │   ├── response.js        # Response formatter
│   │   ├── validator.js       # Custom validators
│   │   ├── logger.js          # Logging utility
│   │   └── helper.js          # Helper functions
│   │
│   └── app.js                 # Express app configuration
│
├── .env sample                # Template environment variables
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies dan scripts
├── package-lock.json          # Lock file dependencies
├── README.md                  # Dokumentasi project
└── server.js                  # Entry point aplikasi
```

---

## 🔌 API Endpoints

### Base URL

```
http://localhost:5000/api/v1
```

### Authentication Endpoints

| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| POST | `/auth/register` | Registrasi user baru | ❌ |
| POST | `/auth/login` | Login user | ❌ |
| POST | `/auth/logout` | Logout user | ✅ |
| POST | `/auth/refresh-token` | Refresh access token | ✅ |
| POST | `/auth/forgot-password` | Request reset password | ❌ |
| POST | `/auth/reset-password` | Reset password dengan token | ❌ |
| GET | `/auth/me` | Get current user info | ✅ |

### User Management Endpoints

| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| GET | `/users` | Get semua users | ✅ Admin |
| GET | `/users/:id` | Get user by ID | ✅ |
| PUT | `/users/:id` | Update user | ✅ |
| DELETE | `/users/:id` | Delete user | ✅ Admin |
| PUT | `/users/:id/change-password` | Change password | ✅ |
| PUT | `/users/:id/avatar` | Upload avatar | ✅ |

### File Upload Endpoints

| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| POST | `/upload/image` | Upload single image | ✅ |
| POST | `/upload/images` | Upload multiple images | ✅ |
| POST | `/upload/document` | Upload document (PDF, etc) | ✅ |
| DELETE | `/upload/:filename` | Delete uploaded file | ✅ |

### Response Format

#### Success Response

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data
  }
}
```

#### Error Response

```json
{
  "success": false,
  "message": "Error message",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ]
}
```

### HTTP Status Codes

- `200` OK - Request berhasil
- `201` Created - Resource berhasil dibuat
- `400` Bad Request - Request tidak valid
- `401` Unauthorized - Autentikasi diperlukan
- `403` Forbidden - Akses ditolak
- `404` Not Found - Resource tidak ditemukan
- `422` Unprocessable Entity - Validasi gagal
- `500` Internal Server Error - Server error

---

## 💡 Contoh Penggunaan API

### 1. Registrasi User Baru

**Request:**

```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "confirmPassword": "SecurePass123!"
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user",
      "createdAt": "2024-01-05T10:30:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 2. Login User

**Request:**

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user"
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 3. Get Current User Profile

**Request:**

```http
GET /api/v1/auth/me
Authorization: Bearer <your_access_token>
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "User profile retrieved successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "avatar": null,
    "createdAt": "2024-01-05T10:30:00.000Z",
    "updatedAt": "2024-01-05T10:30:00.000Z"
  }
}
```

### 4. Update User Profile

**Request:**

```http
PUT /api/v1/users/1
Authorization: Bearer <your_access_token>
Content-Type: application/json

{
  "name": "John Doe Updated",
  "email": "john.updated@example.com"
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": 1,
    "name": "John Doe Updated",
    "email": "john.updated@example.com",
    "role": "user",
    "updatedAt": "2024-01-05T11:00:00.000Z"
  }
}
```

### 5. Upload File/Image

**Request:**

```http
POST /api/v1/upload/image
Authorization: Bearer <your_access_token>
Content-Type: multipart/form-data

[Binary file data]
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "File uploaded successfully",
  "data": {
    "filename": "1704451200000-image.jpg",
    "originalName": "image.jpg",
    "mimetype": "image/jpeg",
    "size": 245760,
    "url": "http://localhost:5000/uploads/images/1704451200000-image.jpg"
  }
}
```

### 6. Get All Users (Admin Only)

**Request:**

```http
GET /api/v1/users?page=1&limit=10&search=john
Authorization: Bearer <admin_access_token>
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Users retrieved successfully",
  "data": {
    "users": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "role": "user",
        "createdAt": "2024-01-05T10:30:00.000Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalUsers": 50,
      "limit": 10
    }
  }
}
```

### Contoh Error Response

**Validation Error (422):**

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    },
    {
      "field": "password",
      "message": "Password must be at least 8 characters"
    }
  ]
}
```

**Authentication Error (401):**

```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

**Authorization Error (403):**

```json
{
  "success": false,
  "message": "Access denied. Admin role required"
}
```

---

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

- **Email**: [email-anda@example.com](mailto:email-anda@example.com)
- **GitHub Issues**: [Create an Issue](https://github.com/Juhar-riski/Project_PPL-CAPSTONE-PROJECT-_BackEnd/issues)
- **LinkedIn**: [Profil LinkedIn Anda](https://linkedin.com/in/username)

---

## 🙏 Acknowledgments

Terima kasih kepada:
- Dosen Pembimbing Mata Kuliah PPL
- Asisten Praktikum yang telah membantu
- Semua pihak yang telah mendukung pengembangan project ini
- Open source community untuk tools dan libraries yang digunakan

---

## 📚 Referensi & Resources

- [Node.js Documentation](https://nodejs.org/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Prisma Documentation](https://www.prisma.io/docs)
- [JWT Introduction](https://jwt.io/introduction)
- [RESTful API Design](https://restfulapi.net/)

---

<div align="center">
  <p>Made with ❤️ by Juhar Riski & Team</p>
  <p>© 2024 PPL Capstone Project. All rights reserved.</p>
</div>