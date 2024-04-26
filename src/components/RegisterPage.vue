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

        <button @click.prevent="register">Daftar</button>

        <p style="text-align: center;">Sudah punya akun? <router-link to="/login">Masuk</router-link></p>
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
      // Logika untuk proses registrasi
      console.log('Proses registrasi...');
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1e4f89
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
  margin-bottom: 20px;
  outline: none;
}

button {
  background-color: #2468e6;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1e4f89;
}

a {
  color: #2468e6;
  text-decoration: none;
}
</style>
