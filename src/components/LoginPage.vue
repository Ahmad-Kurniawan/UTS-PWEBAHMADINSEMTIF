<template>
  <div class="container">
    <div class="login">
      <form>
        <h1>INSEMTIF</h1>
        <hr>
        <p>Login Form</p>
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Masukkan Email">
        <label for="password">Password</label>
        <div class="password-container">
          <input type="password" id="password" placeholder="Masukkan Password">
        </div>
        <button><router-link to="/dashboard" style="color: white;">Masuk</router-link></button>
        <p>
          <span>Belum mempunyai akun? </span><router-link to="/registration" style="color: #007bff;">Daftar</router-link>
        </p>
      </form>
    </div>
    <div class="kanan">
      <img src="../assets/Gambar2.png" alt="">
      <p style="text-align: left;">Website ini dirancang untuk mempermudah proses input nilai seminar 
         Kerja Praktek (KP) dan Tugas Akhir (TA) bagi mahasiswa Teknik Informatika Universitas Islam Negeri Sultan Syarif Kasim Riau</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1d1f8d;
}

.container {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center; /* Menengahkan secara horizontal */
    align-items: center; /* Menengahkan secara vertikal */
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.login {
    width: 500px;
}

form {
    width: 250px;
    margin: 60px auto;
}

h1 {
    margin: 10px;
    text-align: center;
    font-weight: bolder;
    text-transform: uppercase;
}

hr {
    border-top: 2px solid #1d1f8d;
}

p {
    text-align: center;
    margin: 10px;
}

.kanan {
    display: flex; 
    flex-direction: column; 
    align-items: center;
    margin-bottom: 5%;
}

.kanan img {
    width: 450px; 
    height: auto; 
    margin-bottom: 30px; 
    margin-top: 50px;
}

.kanan p {
    width: 80%; 
    margin: 0 auto;
    font-size: 14px; 
    line-height: 1.5; 
    color: #333; 
}

form label {
    display: block;
    font-size: 16px;
    font-weight: 600;
    padding: 5px;
}

input {
    width: 90%;
    margin: 2px;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid gray;
}

button {
    border: none;
    outline: none;
    padding: 8px;
    width: 250px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
    background: #1d1f8d;
}

button:hover {
    background: rgba(214, 86, 64, 1);
}
</style>
