<script>
import axios from "axios";
import NavbarVuetify from "../components/NavbarVuetify.vue";
export default {
    name: "addStudent",
    data: () => ({
        valid: false,
        selectedFile: null,
        cpassword: "",
        password: "",
        user: "",
        name: "",
        lastname: "",
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
        ],
        email: "",
        emailRules: [
            (value) => {
                if (value)
                    return true;
                return "E-mail is requred.";
            },
            (value) => {
                if (/.+@.+\..+/.test(value))
                    return true;
                return "E-mail must be valid.";
            },
        ],
    }),
    methods: {
        submitForm() {
            if (this.valid) {
                const formData = {
                    user: this.user,
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    cpassword: this.cpassword,
                    // Agrega aquí otros campos que quieras enviar en la solicitud POST
                };
                axios
                    .post("/acerca", formData)
                    .then((response) => {
                    console.log("Solicitud POST exitosa", response);
                })
                    .catch((error) => {
                    console.error("Error al enviar la solicitud POST", error);
                });
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
  <div class="allContainer">
    <div class="addStudentContainer">
      <span class="addStudentText">Add New Student</span>
    </div>
    <div class="totalContainer">
      <div class="inputContainer">
        <v-form v-model="valid" class="formContainer">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  class="inputs"
                  v-model="user"
                  :rules="nameRules"
                  :counter="10"
                  label="User"
                  required
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  class="inputs"
                  v-model="email"
                  :rules="emailRules"
                  :counter="10"
                  label="Email"
                  required
                  hide-details
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  class="inputs"
                  v-model="name"
                  :rules="nameRules"
                  :counter="10"
                  label="Name"
                  required
                  hide-details
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  class="inputs"
                  v-model="password"
                  :rules="nameRules"
                  :counter="10"
                  label="Password"
                  hide-details
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  class="inputs"
                  v-model="cpassword"
                  :rules="nameRules"
                  label="Confirm Password"
                  hide-details
                  required
                ></v-text-field>
              </v-col>

              <div class="uploadPhotoContainer">
                <v-file-input
                  v-model="selectedFile"
                  class="photoUpload"
                  label="File input"
                  variant="filled"
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </div>
              <div class="submitButtonContainer">
                <v-btn type="submit" @click="submitForm" class="boton"
                  >Enroll</v-btn
                >
              </div>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </div>
  </div>
</template>

<style>
.allContainer {
  display: flex;
  justify-content: center;
}
.checkbox {
  background-color: white;
  color: black;
  border-radius: 10px;
  height: 55px;
}
.inputs {
  color: black;
  background-color: white;
  border-radius: 10px;
}
.boton {
  height: 800px;
  width: 100%;
  background-color: blue;
}
.formContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 8%;
}
.addStudentContainer {
  position: relative;
  text-align: center;
  background-color: #100d87;
  width: clamp(5px, 40%, 300px);
  border-radius: 10px;
  position: relative;
  bottom: 50%;
  padding: 1% 0% 1% 0%;
  color: white;
}
.uploadPhotoContainer {
  position: absolute;
  margin: 20px 0px 0px 20px;
  top: 18%;
  width: 25%;
  left: 66%;
  padding: 0% 0% 0% 0%;
}
.submitButtonContainer {
  position: absolute;
  top: 70%;
  width: 90%;
  left: 5%;
}
.checkboxContainer {
  position: absolute;
  margin: 30px 0 0 0;
  top: 34%;
  left: 1.7%;
}
.photoUpload {
  width: 122%;
  color: black;
  background-color: white;
  border-radius: 10px;
  height: 55px;
}
.inputContainer {
  border-radius: 10px;
  position: absolute;
  background-color: #191fa9;
  height: 80%;
  width: 85%;
  left: 8%;
  top: 12%;
}
.totalContainer {
  position: absolute;
  width: 90%;
  height: 80%;
  background-color: #100d87;
  border-radius: 10px;
  left: 5%;
  top: 25%;
}
</style>
