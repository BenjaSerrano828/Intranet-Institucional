<template>
    <NavbarVuetify></NavbarVuetify>
    <router-link to="/"><v-btn>Volver al Inicio</v-btn></router-link>
    <div class="titleContainer">
      <span class="titleText">Enrolled Students</span>
    </div>
  
    <div class="StudentsNumberContainer">
      <span class="StudentsNumberText">
        Number of students : {{ Students.length }}</span
      >
    </div>
    <router-link to="/crear-alumnos"><v-btn style="margin-left: 5%; margin-top: 2%; background-color: #100d87; color: white;">Agregar alumno</v-btn></router-link>
    <div class="SearchDivContainer">
      <form class="SearchForm" action="#" method="post">
        <v-card
          class="searchContainer"
          flat
          height="100px"
          img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
          width="30%"
          border-radius="10px"
        >
          <v-toolbar dense floating border-radius="10px" class="cardSearch">
            <v-text-field
              class="SearchText"
              v-model="searchText"
              @input="searchStudents"
              hide-details
              prepend-icon="mdi-magnify"
              single-line
              border-radius="10px"
            ></v-text-field>
          </v-toolbar>
        </v-card>
      </form>
    </div>
  
    <div class="TableContainer">
      <v-table class="tableDisplay" height="600px">
        <thead class="aver">
          <tr>
            <th class="text-left">Profile Photo</th>
            <th class="text-left">Student Name</th>
            <th class="text-left">Role</th>
            <th class="text-left">Registration Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in Students" :key="item.name">
            <td>
              <v-img :src="item.photo"></v-img>
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.role }}</td>
            <td>{{ item.registrationDate }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </template>
  
  <script>
  import NavbarVuetify from '../components/NavbarVuetify.vue';
  export default {
    name: "principalPage",
    component: {
            NavbarVuetify,
        },
    //esto simula la base de datos
    data() {
      return {
        filteredStudents: "",
        searchText: "",
        Students: [
          {
            photo:
              "https://upload.wikimedia.org/wikipedia/commons/b/bf/Foto_Perfil_.jpg",
            name: "Benjamin Serrano",
            role: "Ayudante",
            registrationDate: "1/10/2023",
          },
          {
            photo:
              "data:image/jpeg;base64,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",
            name: "Carlos Iturra",
            role: "Estudiante",
            registrationDate: "1/10/2023",
          },
          {
            photo:
              "https://crehana-blog.imgix.net/media/filer_public/4c/90/4c9068d2-9081-4f7b-b14c-d5a88b67a262/plano_del_retrato.jpg?auto=format&q=50",
            name: "Sebastian Torres",
            role: "Estudiante",
            registrationDate: "1/10/2023",
          },
        ],
        methods: {
          searchStudents() {
            if (this.searchText === "") {
              this.filteredStudents = this.Students;
            }
            const search = this.searchText.toLowerCase();
            this.filteredStudents = this.Students.filter((student) => {
              return student.name.toLowerCase().includes(search);
            });
          },
        },
      };
    },
  };
  </script>
  
  <style>
  .text-left {
    color: white !important;
  }
  .tableDisplay {
    position: relative;
    left: 8%;
    width: 85%;
    background-color: #100d87;
    color: white;
    border-radius: 10px;
  }
  .titleContainer {
    position: relative;
    left: 36%;
    text-align: center;
    background-color: #100d87;
    width: clamp(5px, 40%, 300px);
    border-radius: 10px;
    position: relative;
    padding: 1% 0% 1% 0%;
    color: white;
  }
  .titleText {
  }
  .StudentsNumberContainer {
    position: relative;
    top: 1%;
    left: 2%;
    text-align: center;
    background-color: #100d87;
    width: clamp(5px, 40%, 300px);
    border-radius: 10px;
    position: relative;
    padding: 1% 0% 1% 0%;
    color: white;
  }
  .SearchDivContainer {
    position: relative;
    left: 69%;
    bottom: 6%;
  }
  .cardSearch {
    position: relative;
    bottom: 0%;
    background-color: #100d87;
    color: white;
    border-radius: 10px;
  }
  </style>