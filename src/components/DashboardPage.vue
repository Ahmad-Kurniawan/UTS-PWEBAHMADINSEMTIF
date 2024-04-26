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
          <li><router-link to="/akunpage">Akun</router-link></li>
          <li><router-link to="Logout">Keluar</router-link></li>
        </ul>
      </div>
    </nav>
    <section class="section">
      <div class="section__container">
        <div class="content">
          <p class="subtitle">Selamat Datang Di,</p>
          <h1 class="title">
            <span style="color: black;">INSEMTIF<br/></span>
          </h1>
          <p class="description">
            Website ini Dirancang Khusus Untuk Mempermudahkan Bapak/ibu Dalam Mengimputkan Nilai
            Seminar Kerja Praktik (KP) Dan Nilai Seminar Tugas Akhir(TA)
          </p>
        </div>
        <div class="image">
          <img src="../assets/Gambar2.png" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {

  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
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

.section {
  background-color: #edf0f3;
  padding-top: 4rem; /* Menambahkan padding atas agar konten tidak bertumpuk dengan navbar */
}

.section__container {
  min-height: 100vh;
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.subtitle {
  letter-spacing: 2px;
  color: #6b7280;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 3rem;
  color: #ffffff;
  margin-bottom: 30px;
}

.title span {
  font-weight: 800;
}

.description {
  line-height: 1.5rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.image {
  display: grid;
  place-items: center;
}

.image img {
  width: 430px;
  height: 430px;
  margin-right: 20px;
}

@media (max-width: 750px) {
  nav .checkbox {
    display: block;
  }

  ul {
    position: absolute;
    width: 100%;
    height: calc(100vh - 85px);
    left: -100%;
    top: 85px;
    background-color: #edf0f3;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    padding-left: 0; 
  }

  nav #check:checked ~ ul {
    left: 0;
  }

  ul li a {
    font-size: 1.25rem;
  }

  .section__container {
    padding: 10rem 1rem 5rem 1rem;
    text-align: center;
    grid-template-columns: repeat(1, 1fr);
  }

  .image {
    grid-area: 1/1/2/2;
  }

  .action__btns {
    margin: auto;
  }
}
</style>
