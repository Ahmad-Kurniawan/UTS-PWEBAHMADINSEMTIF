import { createRouter, createWebHistory } from 'vue-router';
import LayoutPage from '@/components/LayoutPage.vue'
import AkunPage from '@/components/AkunPage.vue';
import DaftarKp from '@/components/DaftarKp.vue';
import DaftarTa from '@/components/DaftarTa.vue';
import InputNilaikp from '@/components/InputNilaikp.vue';
import LoginPage from '@/components/LoginPage.vue';
import LogoutPage from '@/components/LogoutPage.vue';
import InputNilaita from '@/components/InputNilaita.vue';
import RegisterPage from '@/components/RegisterPage.vue';
import DashboardPage from '@/components/DashboardPage.vue';
import HasilNilai from '@/components/HasilNilai.vue';
import InputNilai from '@/components/InputNilai.vue';



const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
 
  {
    path: '/logout',
    name: 'LogoutPage',
    component: LogoutPage
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegisterPage
  },
  {
    path: '/layout',
    name: 'Layout',
    component: LayoutPage,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardPage
      },
      {
        path: '/akunpage',
        name: 'AkunPage',
        component: AkunPage 
      },
      {
        path: '/DaftarKp',
        name: 'DaftarKp',
        component: DaftarKp
      },
      {
        path: '/DaftarTa',
        name: 'DaftarTa',
        component: DaftarTa
      },
      {
        path: '/HasilNilai',
        name: 'HasilNilai',
        component: HasilNilai
      },
      {
        path: '/InputNilai',
        name: 'InputNilai',
        component: InputNilai
      },
      {
        path: '/inputnilaikp',
        name: 'InputNilaikp',
        component: InputNilaikp
      },
      {
        path: '/inputnilaita',
        name: 'InputNilaiTa',
        component: InputNilaita
      },
      
    ]
  },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
