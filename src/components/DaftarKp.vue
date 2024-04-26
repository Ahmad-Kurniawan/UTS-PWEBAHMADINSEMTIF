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
          <li><router-link to="/dashbord">Dashbord</router-link></li>
          <li><router-link to="/InputNilai">Input Nilai KP/TA</router-link></li>
          <li><router-link to="/AkunPage">Akun</router-link></li>
          <li><router-link to="/Logout">Keluar</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <h2>Daftar Mahasiswa Kerja Praktek</h2>
      <div class="search-bar">
        <input type="text" id="search-input" placeholder="Cari Nama" />
      </div>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th class="text-center">Nama</th>
              <th class="text-center">Nim</th>
              <th class="text-center">Status</th>
            </tr>
          </thead>
          <tbody id="table-body">
            <tr v-for="(mahasiswa, index) in mahasiswas" :key="index">
              <td>{{ mahasiswa.nama }}</td>
              <td>{{ mahasiswa.nim }}</td>
              <td>
                <select class="status-select">
                  <option value="selesai">Selesai</option>
                  <option value="belum">Belum</option>
                </select>
                <button><router-link to="/inputnilaikp" class="btn btn-kelola">kelola</router-link></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mahasiswas: [
        { nama: "Ahmad Kurniawan", nim: "12250111514" },
        { nama: "Muhammad Faruq", nim: "12250111515" },
        { nama: "Muhammad Aditya R.", nim: "12250111516" },
        { nama: "Hafidz Alhadid R.", nim: "12250111517" },
        { nama: "Aufa Hajati", nim: "12250111518" }
      ]
    };
  },
  mounted() {
    const searchInput = document.getElementById('search-input');
    const tableBody = document.getElementById('table-body');

    searchInput.addEventListener('keyup', (event) => {
      const searchTerm = event.target.value.toLowerCase();
      const tableRows = tableBody.querySelectorAll('tr');

      for (const row of tableRows) {
        const nameCell = row.querySelector('td:nth-child(1)');
        const nameText = nameCell.textContent.toLowerCase();
        const shouldShowRow = nameText.includes(searchTerm);
        row.style.display = shouldShowRow ? '' : 'none';
      }
    });
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
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

.logo a {
  font-size: 1.5rem;
  font-weight: 600;
  color: #f9fafc;
  transition: 0.3s;
}

.logo a:hover {
  color: #fdfdff;
}

.checkbox {
  display: none;
}

input {
  display: none;
}

.checkbox i {
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

.container {
  width: 100%;
  max-width: 800px;
  margin: auto;
  margin-bottom: 90px;
}

h2 {
  margin-bottom: 100px;
  font-size: 1.6rem;
}

.table-container {
  border: 1px solid #32308a;
  padding: 10px;
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

.status-select {
  padding: 5px 10px;
}

.btn-kelola {
  padding: 9px;
  border: none;
  background-color: #a6a7a8;
  color: #0e0d0d;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-kelola:hover {
  background-color: #a6a7a8;
}
</style>
