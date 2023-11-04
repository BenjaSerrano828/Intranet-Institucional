<script setup>
import { ref } from "vue";
const image = ref("");
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  }
});
image.value = props.imageUrl;

function editNew() {
  router.push({ name: "editar-noticias", params: { id: id.value } });
}

</script>

<template>
  <v-col>
    <v-card class="mx-auto" width="70%">
      <v-card-body>
        <v-container-card>
          <v-img :src="image" cover></v-img>
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text>{{ body }}</v-card-text>
          <router-link to="/editar-noticias"><v-btn active>Editar noticia</v-btn></router-link>
        </v-container-card>
      </v-card-body>
    </v-card>
  </v-col>
</template>
