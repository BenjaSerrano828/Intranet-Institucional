<script setup>
import NavbarVuetify from "../components/NavbarVuetify.vue";
import Noticias from "../components/Noticias.vue";
import { newsData } from "../mocks/newsData";
</script>

<template>
  <NavbarVuetify></NavbarVuetify>
  <v-container class="container">
    <router-link to="/crear-noticias"><v-btn active>Crear noticia</v-btn></router-link>
    <h1>Lista de Noticias</h1>
    <v-row>
      <Noticias
        class="noticia"
        v-for="n in newsData"
        :key="n.id"
        :title="n.title"
        :imageUrl="n.imageUrl"
        :body="n.body"
      ></Noticias>
    </v-row>
  </v-container>
</template>

<style scoped>
.container h1 {
  text-align: center;
}
</style>
