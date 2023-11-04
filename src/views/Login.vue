<script>
import { newsData } from "../mocks/newsData";
import { validarRut } from "../services/validar_rut"

export default {
  name: 'Login',
  data () {
    return {
      rut: "",
      password: "",
      newsData,
      rutValido: true,
    };
  },

  computed: {
    rutRules() {
      return [
        (v) => !!v ||"El RUT es requerido",
        (v) => this.rutValido ||"RUT inválido",
      ];
    },
    passwordRules() {
      return [(v) => !!v || "La contraseña es requerida"];
    },
  },
  methods: {
    login() {
      const rutLimpio = this.rut.replace(/[.-]/g, '');
      this.rutValido = validarRut(rutLimpio);
      if (this.rutValido) {
        console.log(rutLimpio);

        const sesion = {
          rut: rutLimpio,
          password: this.password,
        };

      }else {
        console.log("Rut no válido");
        return "Rut invalido";
      }
    },
  },
};
</script>
<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="6">
          <!-- Contenido de inicio de sesión -->
          <v-sheet class="pa-2 ma-2">
            <h1>Intranet Institucional</h1>
            <h5>Inicia Sesión</h5>

            <v-card width="500" class="mx-auto card">
              <v-form fast-fail @submit.prevent="login">
                <v-text-field v-model="rut" label="Rut" :rules="rutRules"></v-text-field>

                <v-text-field
                  v-model="password"
                  label="Contraseña"
                  :rules="passwordRules"
                ></v-text-field>

                <v-btn type="submit" block class="mt-2" >Iniciar Sesión</v-btn>
              </v-form>
            </v-card>
          </v-sheet>
        </v-col>
        <v-col cols="6">
          <!-- Contenido de noticias -->
          <div class="slider">
            <v-carousel
              cycle
              height="400"
              hide-delimiter-background
              show-arrows="hover"
            >
              <v-carousel-item v-for="n in newsData" :key="n.id">
                <v-sheet height="100%">
                  <div class="d-flex fill-height justify-center align-center">
                    <div>
                      <img :src="n.imageUrl" alt="Noticia" />
                      <h3>{{ n.title }}</h3>
                    </div>
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scope>
.card {
  padding: 3%;
}
h1 {
  padding: 3%;
}
h5 {
  padding: 3%;
}

.slider {
  padding: 5%;
}
</style>