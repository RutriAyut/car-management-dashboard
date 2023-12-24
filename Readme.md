# BCR - Car Management Dashboard

Aplikasi web CRUD menggunakan express.js dan typescript untuk management data mobil. Aplikasi dibuat sebagai bagian dari challenge chapter 8, fullstack web development course di Binar Academy.

## Database

nama : db_car_rental

## How to use ?

### Backend :
```
cd API
npm i
```
create database `db_car_rental` in postgres
```
npx knex migrate:latest
npx knex seed:run
npm start
```

### Frontend : 
```
cd frontendts
npm i
npm run dev
```

## Port

Server app berjalan di port 8000 `http://localhost:8000/`

Frontend app berjalan di port 5173 `http://localhost:5173/`

Ada 2 versi frontend yang dibuat

- folder frontend menggunakan javascript
- folder frontendts menggunakan Typescript

## Frontend Routing

### Tanpa Login

| Page           | Route     | Default Route                | Ket                                                    |
| -------------- | --------- | ---------------------------- | ------------------------------------------------------ |
| Login Page     | `/login`  | http://localhost:5173/login  | Login Page digunakan untuk login admin dan super admin |
| Dashboard Page | `/`       | http://localhost:5173/       | Dashboard Page yang dapat diakses semua orang          |
| Search Page    | `/search` | http://localhost:5173/search | Search Page untuk mencari Mobil yang bisa disewa       |

### Harus Login

| Page         | Route                 | Default Route                           | Ket                                                     |
| ------------ | --------------------- | --------------------------------------- | ------------------------------------------------------- |
| Get All Cars | `/admin/cars/`        | http://localhost:5173/admin/cars        | halaman dimana admin dapat melihat data semua mobil     |
| Add Car      | `/admin/cars/create`  | http://localhost:5173/admin/cars/create | menambahkan data mobil                                  |
| Edit Car     | `admin/cars/edit/:id` | http://localhost:5173/admin/cars/edit/1 | mengedit data mobil                                     |
| Delete Car   | `/admin/cars/`        | http://localhost:5173/admin/cars        | menghapus data mobil diakses lewat halaman Get All Cars |
| Logout       | `/admin/cars/`        | http://localhost:5173/admin/cars        | Logout dapat diakses dihalaman admin                    |

### NB :

- database still not working
- untuk upload image car masih belum berjalan.
- untuk login menggunakan

  email : super_admin@gmail.com

  password : superadmin

