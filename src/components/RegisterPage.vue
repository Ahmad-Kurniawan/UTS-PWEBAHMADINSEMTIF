<template>
  <div class="container">
    <form>
      <div class="form-box">
        <h1>Daftar</h1>

        <label for="nama">Nama Lengkap</label>
        <input type="text" id="nama" placeholder="Masukkan Nama Lengkap">

        <label for="nip_nisn">NIP/NISN</label>
        <input type="text" id="nip_nisn" placeholder="Masukkan NIP/NISN">

        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Masukkan Email">

        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Masukkan Password">

        <label for="profesi">Profesi</label>
        <select v-model="selectedProfesi" id="profesi">
          <option value="">Pilih Profesi</option>
          <option value="dosen_pembimbing">Dosen Pembimbing</option>
          <option value="dosen_penguji">Dosen Penguji</option>
        </select>
        <button @click.prevent="register"><router-link to="/">Daftar</router-link></button>
        <p style="text-align: center;">Sudah punya akun? <router-link to="/">Masuk</router-link></p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProfesi: ''
    };
  },
  methods: {
    register() {

      console.log('Proses registrasi...');
    }
  }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1d1f8d
}

.form-box {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}


form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input, select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  outline: none;
}

button {
  background-color: #2468e6;
  color: #fff;
  padding: 14px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 auto;
  display: flex;
}

button:hover {
  background-color: #1e4f89;
}

a {
  color: #ffffff;
  text-decoration: none;
}

p a {
  color: #2468e6; /* Warna teks biru */
}

</style>
