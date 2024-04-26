<template>
  <div>
    <nav>
      <div class="nav__content">
        <div class="logo"><i><router-link to="/">INSEMTIF</router-link></i></div> 
        <label for="check" class="checkbox">
          <i class="ri-menu-line"></i>
        </label>
        <input type="checkbox" name="check" id="check" />
        <ul>
          <li><router-link to="/dashboard">Dashbord</router-link></li>
          <li><router-link to="/InputNilai">Input Nilai KP/TA</router-link></li>
          <li><router-link to="/akunpage">Akun</router-link></li>
          <li><router-link to="/Logout">Keluar</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="wrapper">
      <div class="sidebar">
        <div class="profile">
          <img src="../assets/Profil.jpg" alt="">
          <h3>Abdul Wahid</h3>
          <p>12345678</p>
          <p>Dosen Pembimbing</p>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Jadwal Seminar</h2>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th class="text-center">Waktu</th>
              <th class="text-center">Tempat</th>
              <th class="text-center">Keterangan</th>
            </tr>
          </thead>
          <tbody id="table-body">
            <tr>
              <td>Jum'at, 09 April 2024,08.00</td>
              <td>FST 301</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Kamis, 15 April 2024,08.00</td>
              <td>FST 301</td>
              <td>-</td>
            </tr>
            <tr>
              <td>jum'at, 15 April 2024,08.00</td>
              <td>FST 303</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Jum'at, 23 April 2024, 08.00</td>
              <td>FST 302</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Kamis, 29 April 2024, 08.00</td>
              <td>FST 302</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Tambahkan script di sini jika Anda memerlukan logika Vue.js
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

.container {
  width: 80%;
  max-width: 800px;
  margin: auto;
}

h2 {
  margin-bottom: 50px;
  margin-top: 120px;
  margin-left: 400px;
  font-size: 1.6rem;
}

.table-container {
  border: 1px solid #32308a;
  padding: 10px;
  margin-left: 150px;
  border-radius: 5px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #3f3996;
  padding: 8px;
}

th {
  background-color: #f0f0f0;
  font-weight: bold;
}

.text-center {
  text-align: center;
}

</style>
