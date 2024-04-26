<template>
  <nav>
      <div class="nav__content">
        <div class="logo"><i><a href="#">INSEMTIF</a></i></div>
        <label for="check" class="checkbox">
          <i class="ri-menu-line"></i>
        </label>
        <input type="checkbox" name="check" id="check" />
        <ul>
          <li><router-link to="/dashboard">Dashbord</router-link></li>
          <li><router-link to="/InputNilai">Input Nilai KP/TA</router-link></li>
          <li><router-link to="/akunpage">Akun</router-link></li>
          <li><router-link to="Logout">Keluar</router-link></li>
        </ul>
      </div>
    </nav>
  <div>
    <div class="wrapper">
      <div class="sidebar">
        <div class="profile">
          <img src="../assets/Profil.jpg" alt="">
          <h3>Abdul Wahid</h3>
          <p>122312456</p>
          <p>Dosen Pembimbing</p>
        </div>
      </div>
    </div>
    <div class="Bagian3">
      <h2>Input Nilai KP/TA</h2>
      <div class="box-container">
        <div class="box">
          <p>Daftar Mahasiswa Kerja Praktik (KP)</p>
          <router-link to="/DaftarKp" class="btn btn-lihat">Lihat</router-link>
        </div>
        <div class="box">
          <p>Daftar Mahasiswa Tugas Akhir (TA)</p>
          <router-link to="DaftarTa" class="btn btn-lihat">Lihat</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputNilai'
}
</script>

<style scoped>


:root {
  --primary-color: #f9fafc;
  --primary-color-dark: #fdfdff;
  --secondary-color: #fafafd;
  --text-dark: #ffffff;
  --extra-light: #edf0f3;
  --max-width: 1200px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Open Sans', sans-serif;
}

a {
  text-decoration: none;
}

nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1d1f8d;
  z-index: 99;
}

.nav__content {
  max-width: 1200px;
  margin: auto;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav .logo a {
  font-size: 1.5rem;
  font-weight: 600;
  color: #f9fafc;
  transition: 0.3s;
}

nav .logo a:hover {
  color: #fdfdff;
}

nav .checkbox {
  display: none;
}

nav input {
  display: none;
}

nav .checkbox i {
  font-size: 2rem;
  color: #f9fafc;
  cursor: pointer;
}

ul {
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
  transition: left 0.3s;
  margin-right: 1rem; /* Menambahkan margin kanan agar ada ruang antara menu dengan ikon menu */
}

ul li {
  margin-right: 1rem; /* Menambahkan margin kanan antara item menu */
}

ul li a {
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  text-decoration: none;
  font-weight: 600;
  color: #ffffff;
  transition: 0.5s;
}

ul li a:hover {
  border-top-color: #fafafd;
  border-bottom-color: #fafafd;
  color: #fafafd;
}


.wrapper .sidebar {
  background: #363636;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  padding: 100px 0;
}

.wrapper .sidebar .profile {
  margin-bottom: 30px;
  text-align: center;
}

.wrapper .sidebar .profile img {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: auto;
}

.wrapper .sidebar .profile h3 {
  color: #fdfcfc;
  margin: 30px 0 5px;
}

.wrapper .sidebar .profile p {
  color: rgb(250, 248, 248);
  font-size: 14px;
  margin: 10px;
}

.Bagian3 {
  width: 100%;
  max-width: 700px;
  margin: auto;
}

h2 {
  text-align: center;
  margin-left: 200px;
  margin-top: 120px;
  margin-bottom: 100px;
  font-size: 1.6rem;
}

.box-container {
  display: flex;
  justify-content: space-between;
  margin-left: 200px;
  text-align: center;
 
}

.box {
  background-color: #f0f0f0;
  padding: 40px;
  border-radius: 5px;
  text-align: center;
  margin-left: 10px;
  width: 45%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.box p {
  margin-bottom: 30px;
  font-size: 1.2rem;
}

.btn-lihat {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}

.btn-lihat:hover {
  background-color: #2980b9;
}
</style>
