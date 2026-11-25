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
