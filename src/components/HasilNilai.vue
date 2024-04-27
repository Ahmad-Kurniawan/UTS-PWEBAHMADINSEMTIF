<template>
  <div>
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
          <li><router-link to="/AkunPage">Akun</router-link></li>
          <li><router-link to="/Logout">Keluar</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="wrapper">
      <div class="sidebar">
        <div class="profile">
         <img src="../assets/Profil.jpg" alt="">
          <h3>Ahmad Kurniawan</h3>
          <p>12250111514</p>
          <p>Mahasiswa</p>
          <div class="info-box">
            <a href="hasilnilai.html" style="color: black;">INFO</a>
          </div>
        </div>
      </div>
      <h1 class="title">Hasil Nilai KP&TA</h1>
      <div class="quotes-box">
        <table>
          <tbody>
            <tr>
              <td>Nilai Seminar Kerja Praktek</td>
              <td><input type="number" min="0" max="100" v-model="nilai1" class="nilai-input"></td>
            </tr>
            <tr>
              <td>Nilai Seminar Tugas Akhire</td>
              <td><input type="number" min="0" max="100" v-model="nilai2" class="nilai-input"></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="2">Total</th>
              <td>{{ totalPercentage.toFixed(2) }}</td>
            </tr>
          </tfoot>
        </table>
        <button id="simpan-button" @click="simpanNilai">Simpan</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nilai1: 0,
      nilai2: 0,
      nilai3: 0,
      nilai4: 0,
      nilai5: 0
    };
  },
  computed: {
    totalPercentage() {
      const sum = parseInt(this.nilai1) + parseInt(this.nilai2) + parseInt(this.nilai3) + parseInt(this.nilai4) + parseInt(this.nilai5);
      return (sum / 500) * 100;
    }
  },
  methods: {
    simpanNilai() {
      alert('Nilai berhasil disimpan!');
    }
  }
};
</script>

<style scoped>

  
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
  max-width: var(--max-width);
  margin: auto;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  }
  
  nav .logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    transition: 0.3s;
  }
  nav .logo a:hover {
    color: white;
  }
  
  nav .checkbox {
    display: none;
  }
  
  nav input {
    display: none;
  }
  nav .checkbox i {
    font-size: 2rem;
    color: var(--primary-color);
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
    color: white;
    transition: 0.5s;
  }
  
  ul li a:hover {
    border-top-color: white;
    border-bottom-color: white;
    color: white;
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
  
  
  .wrapper .sidebar .profile .info-box {
    background-color: #fbfcfb; 
    color: rgb(17, 17, 17);
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
    margin: 10px auto; 
    width: fit-content;
    cursor: pointer; 
  } 
  
  .title {
    text-align: center;  
    margin-top: 100px;
    padding: 50px; 
    margin-left: 300px; 
  }
  
  .quotes-box {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    padding: 50px;
    width: fit-content;
    margin: 0 auto;
    border-radius: 5px;
    margin-right: 300px;
  }
  
  .quotes-box table {
    width: 100%; 
    border-collapse: collapse; 
  }
  
  .quotes-box th,
  .quotes-box td {
    padding: 10px; 
    border: 1px solid #eee; 
    text-align: left; 
  }
  
  .quotes-box th {
    font-weight: bold; 
  }
  
  .quotes-box input[type="number"] {
    width: 50px; 
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    text-align: center;
  }
  
  
  .quotes-box tfoot {
    font-weight: bold;
  }
  
  #total-value {
    text-align: center; 
  }
  
  
  #calculate-button {
    margin-top: 10px; 
    padding: 8px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer; 
  }
  
  #calculate-button:hover {
    background-color: #3e8e41;
  }
  
  .quotes-box {
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
    padding-bottom: 10px; 
  }
  
  #simpan-button {
    margin: 0 auto; 
    padding: 8px 20px;
    background-color: #4CAF50; 
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer; 
  }
  
  #simpan-button:hover {
    background-color: #3e8e41; 
  }
</style>
