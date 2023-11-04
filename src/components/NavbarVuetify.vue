<template>
  <v-toolbar style="background-color: #0e0c78; color: white">
    <v-toolbar-title style="display: flex; justify-content: center">
      <router-link to="/" style="text-decoration: none; color: white;"><h1>Intranet</h1></router-link>
    </v-toolbar-title>
  </v-toolbar>
  <v-container>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        style="background-color: #010022; color: white"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Carlos Iturra"
            subtitle="c.iturra09@ufromail.cl"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link to="/listar-alumnos"
            ><v-list-item
              prepend-icon="mdi-folder"
              title="Administrar Alumnos"
            ></v-list-item
          ></router-link>

          <router-link to="/listar-noticias"
            ><v-list-item
              prepend-icon="mdi-account-multiple"
              title="Administrar Noticias"
            ></v-list-item
          ></router-link>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    handleMenuItemClick(action) {
      if (action === "profile") {
        // Acción para ir al perfil del usuario
      } else if (action === "logout") {
        // Acción para cerrar sesión
      }
    },
  },
};
</script>
