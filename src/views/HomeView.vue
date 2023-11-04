<script >
import { newsData } from "../mocks/newsData";
import NavbarVuetify from "../components/NavbarVuetify.vue";

export default {
  name: 'Landing',
  components: {
    NavbarVuetify,
},
  data () {
    return {
      newsData,
    };
  },
};

</script>

<template>
  <NavbarVuetify></NavbarVuetify>
  <h1>Bienvenido a intranet</h1>
  <v-container>
    <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="n in newsData"
      :key="n.id"
      :src="n.imageUrl"
      cover
    ></v-carousel-item>
  </v-carousel>
  </v-container>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
