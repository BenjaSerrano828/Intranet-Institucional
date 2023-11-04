<script>
import NavbarVuetify from "../components/NavbarVuetify.vue";

export default {
    name: "addStudent",
    data: () => ({
        valid: false,
        titulo: "",
        body: "",
        nameRules: [
            (value) => {
                if (value)
                    return true;
                return "Name is required.";
            },
            (value) => {
                if (value?.length <= 10)
                    return true;
                return "Name must be less than 10 characters.";
            },
        ]
    }),
    methods: {
        submitForm() {
            if (this.valid) {
                const formData = {
                    titulo: this.titulo,
                    body: this.body,
                    // Agrega aquí otros campos que quieras enviar en la solicitud POST
                };
            }
            else {
                console.log("El formulario no es válido. Por favor, corrige los errores.");
            }
        },
    },
    components: { NavbarVuetify }
};
</script>

<template>
  <NavbarVuetify></NavbarVuetify>
  <v-container
    style="background-color: rgb(0, 0, 59); color: white; border-radius: 10px"
  >
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="titulo"
              :rules="nameRules"
              :counter="10"
              label="Título de la noticia"
              required
              hide-details
            ></v-text-field>
          </v-col>

          <div class="file-input">
            <v-file-input
              v-model="selectedFile"
              class="a"
              label="Agregar la imagen de la noticia"
              variant="filled"
              prepend-icon="mdi-camera"
            ></v-file-input>
          </div>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="body"
              :rules="nameRules"
              label="Cuerpo de la noticia"
              hide-details
              required
            ></v-text-field>
          </v-col>
          <v-btn type="submit" @click="submitForm" class="boton">Crear noticia</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<style scoped>
.file-input{
  position: absolute;
  left: 61%;
  top: 18%;
  width: 27%;
}
.boton{
  width: 50%;
  position: relative;
  left: 25%;
  margin-top: 5%;
}
</style>