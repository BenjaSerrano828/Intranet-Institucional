import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ListarNoticias from '../views/ListarNoticias.vue';
import EditarNoticias from '../views/EditarNoticias.vue';
import CrearNoticias from '../views/CrearNoticias.vue';
import Login from '../views/Login.vue';
import addStudent from "../views/addStudent.vue";
import ListarAlumnos from "../views/ListarAlumnos.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/listar-noticias',
      name: 'listar-noticias',
      component: ListarNoticias
    },
    {
      path: '/crear-noticias',
      name: 'crear-noticias',
      component: CrearNoticias
    },
    {
      path: '/editar-noticias',
      name: 'editar-noticias',
      component: EditarNoticias
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/crear-alumnos',
      name: 'crear-alumnos',
      component: addStudent
    },
    {
      path: '/listar-alumnos',
      name: 'listar-alumnos',
      component: ListarAlumnos
    }
  ]
})

export default router
