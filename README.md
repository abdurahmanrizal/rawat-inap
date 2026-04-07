# Sistem Informasi Rawat Inap Pasien

Aplikasi web untuk manajemen data pasien rawat inap yang masuk. Aplikasi ini memudahkan pencatatan pasien baru dan pemantauan daftar pasien yang sedang dirawat.

## Tech Stack

### Frontend Framework
- **React 18.3** - Library UI untuk membangun antarmuka pengguna
- **TypeScript 5.7** - Bahasa pemrograman dengan tipedata statis
- **Vite 6.1** - Build tool dan development server yang cepat

### Routing
- **React Router DOM 6.30** - Manajemen routing dan navigasi antar halaman

### Styling
- **Tailwind CSS 3.4** - Framework CSS utility-first untuk styling
- **PostCSS** - Tool untuk pemrosesan CSS
- **Autoprefixer** - Plugin untuk menambahkan vendor prefixes

### Form Management
- **React Hook Form 7.54** - Library manajemen form yang performant
- **Zod 3.24** - Library validasi schema dengan TypeScript
- **@hookform/resolvers** - Integrasi React Hook Form dengan Zod

### Icons
- **Lucide React 1.7** - Koleksi icon React yang konsisten dan customizable

### Development Tools
- **Bun 1.2.8** - Package manager yang cepat
- **ESLint** - Tool linting untuk menjaga kualitas kode
- **TypeScript ESLint** - Plugin ESLint untuk TypeScript

## Cara Menjalankan Proyek

### Prasyarat
Pastikan **Bun** sudah terinstal di sistem Anda. Jika belum, install melalui:
```bash
curl -fsSL https://bun.sh/install | bash
```

### Instalasi Dependensi
```bash
bun install
```

### Mode Pengembangan
Jalankan development server:
```bash
bun dev
```
Aplikasi akan dapat diakses di `http://localhost:5173`

### Build Produksi
Build aplikasi untuk produksi:
```bash
bun run build
```
File build akan dihasilkan di folder `dist`

### Preview Build Produksi
Preview hasil build produksi:
```bash
bun run preview
```

### Linting
Cek kualitas kode:
```bash
bun run lint
```

## Fitur Utama

### 1. Formulir Pasien Masuk
Halaman untuk mencatat data pasien baru yang akan dirawat inap. Formulir mencakup:
- **Nama Lengkap** - Nama pasien
- **NIK** - Nomor Induk Kependudukan
- **Diagnosis** - Hasil diagnosis medis
- **Tanggal Masuk** - Tanggal pasien dirawat inap
- **Dokter Penanggung Jawab** - Nama dokter yang menangani
- **Nomor Kamar** - Kamar rawat inap

Validasi form menggunakan Zod untuk memastikan data yang masuk valid dan lengkap.

### 2. Daftar Pasien Aktif
Halaman untuk melihat dan mengelola semua pasien yang sedang dirawat inap. Fitur yang tersedia:

#### Pencarian
Cari pasien berdasarkan nama atau NIK secara real-time.

#### Pengurutan (Sorting)
Urutkan data berdasarkan:
- Nama (A-Z atau Z-A)
- Tanggal Masuk (terbaru atau terlama)

#### Pagination
Tampilan data dengan pagination 5 data per halaman untuk navigasi yang mudah.

#### Tabel Data Pasien
Menampilkan informasi pasien dalam format tabel yang rapi dengan:
- Nomor urut
- Nama pasien
- NIK
- Diagnosis
- Tanggal masuk
- Dokter penanggung jawab
- Nomor kamar

### 3. Struktur Halaman
- **`/pasien-masuk`** - Halaman formulir pendaftaran pasien baru (halaman default)
- **`/pasien-aktif`** - Halaman daftar pasien yang sedang dirawat

### 4. Komponen UI Reusable
Aplikasi menggunakan komponen UI yang reusable dan konsisten:
- `Button` - Komponen tombol dengan berbagai variant
- `Input` - Komponen input form dengan label dan error message
- `PageSection` - Layout untuk halaman dengan title dan action button
- `EmptyState` - Tampilan ketika data tidak ditemukan
- `LoadingState` - Tampilan loading state
- `SortButton` - Tombol untuk mengubah urutan data
- `Pagination` - Komponen navigasi halaman

## Struktur Proyek

```
src/
├── app/                 # Asset dan style global
├── components/common/   # Komponen UI reusable
├── features/
│   └── patients/        # Fitur manajemen pasien
│       ├── api/         # API calls
│       ├── components/  # Komponen fitur pasien
│       ├── hooks/       # Custom hooks
│       ├── schemas/     # Validasi schema
│       └── types/       # TypeScript types
├── layouts/             # Layout aplikasi
├── mocks/               # Mock data untuk development
├── pages/               # Halaman aplikasi
└── router/              # Konfigurasi routing
```

## Lisensi

Private project - Hak cipta dilindungi undang-undang.
