<template>
  <v-app>
    <v-navigation-drawer left app permanent color="primary">
      <v-list>
        <v-list-item justify-center class="justify-center">
          <v-list-item-avatar width="100px" height="100px">
            <v-img
              class="mx-auto"
              src="https://randomuser.me/api/portraits/men/3.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item>
          <v-list-item-content class="text-center">
            <v-list-item-title class="text-h6">
              Daniel Campos
            </v-list-item-title>
            <v-list-item-subtitle>Conta 00000-0</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item nuxt to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item nuxt to="/myCards">
          <v-list-item-icon>
            <v-icon>mdi-credit-card</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Transactions</v-list-item-title>
        </v-list-item>
      </v-list>
      <template #append>
        <div class="pa-5">
          <v-btn left block depressed color="transparent">
            <v-icon left>mdi-logout</v-icon>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main color="background">
      <v-container class="fill-height ma-0 pa-0 fluid">
        <v-layout class="split">

        <Nuxt />
        </v-layout>

      </v-container>
    </v-main>
  </v-app>
</template>



<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style>
a{
  text-decoration: none !important;
}

.v-main, .split{
  background-color: #f1f1f1 !important;
}

.row {
  margin: 0;
}

.split{
    position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.container, .v-subheader, .v-list, .v-list-content, .theme--dark{
    color: #5c509b;
}

.v-subheader{
  color: #5c509b !important; 
}
</style>