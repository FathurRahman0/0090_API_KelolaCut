# KelolaCut API

Backend REST API untuk aplikasi **KelolaCut – Aplikasi Manajemen Keuangan dan Operasional Barbershop Berbasis Android**.

## 📅 Riwayat Progres Pengembangan

📅 **Minggu 9 (24 November 2026)**

- **Inisialisasi Proyek Backend**: Pembuatan repository `0090_API_KelolaCut` menggunakan Node.js dan Express.js.
- **Konfigurasi Dependencies**: Instalasi Express.js, Sequelize ORM, PostgreSQL driver (`pg`), dotenv, CORS, bcrypt, dan jsonwebtoken.
- **Struktur Folder Backend**: Pembuatan struktur folder `src` yang terdiri dari `config`, `controllers`, `middlewares`, `models`, `routes`, `services`, `validators`, dan `utils`, serta folder `database/migrations` dan `database/seeds`.
- **Konfigurasi Environment**: Pembuatan file `.env` untuk konfigurasi lokal dan `.env.example` sebagai template variabel lingkungan.
- **Konfigurasi Database**: Pembuatan `database.js` menggunakan Sequelize untuk mengatur koneksi ke database PostgreSQL.
- **Inisialisasi Express Server**: Pembuatan `app.js` untuk konfigurasi Express, middleware CORS, JSON parser, dan endpoint utama `/`.
- **Menjalankan API**: Pembuatan `server.js` untuk menjalankan server dan melakukan autentikasi koneksi database. Pengujian endpoint utama berhasil menampilkan respons JSON `KelolaCut API is running!`.

📅 **Minggu 10 (25 November 2026)**

- **Konfigurasi Sequelize CLI**: Pembuatan file `.sequelizerc` untuk menentukan lokasi file konfigurasi database, model, migration, dan seed.
- **Pengujian Sequelize CLI**: Menjalankan perintah `npx sequelize-cli --help` untuk memastikan Sequelize CLI berhasil dikenali dan menyediakan perintah pengelolaan database, migration, model, dan seeder.


📅 **Minggu 11 (28–29 November 2026)**

- **Penyesuaian Konfigurasi Sequelize CLI**: Pembuatan `src/config/config.cjs` (format CommonJS agar kompatibel dengan Sequelize CLI) dan penyesuaian `.sequelizerc` agar menggunakan file tersebut.
- **Migration Tabel Users**: Pembuatan migration `create-users` dan pembuatan tabel `users` di database PostgreSQL `kelolacut` menggunakan `npx sequelize-cli db:migrate`.
- **Model User**: Pembuatan `src/models/User.js` menggunakan Sequelize dan pengujian koneksi model melalui `User.count()` pada `server.js`.
- **Utilitas JWT**: Pembuatan `src/utils/jwt.js` untuk membuat Access Token (15 menit) dan Refresh Token (7 hari), serta penambahan variabel masa berlaku token pada `.env.example`.
- **Registrasi Owner**: Implementasi endpoint `POST /api/auth/register` dengan validasi input, pengecekan email, aturan satu akun Owner, dan hashing password menggunakan bcrypt.
- **Login Owner**: Implementasi endpoint `POST /api/auth/login` dengan verifikasi password menggunakan bcrypt serta pengembalian Access Token dan Refresh Token. Login gagal menghasilkan status 401.
- **Pengujian Postman**: Registrasi berhasil, registrasi kedua ditolak, validasi input, login berhasil, login dengan password salah, login dengan email tidak terdaftar, dan login dengan body kosong.
