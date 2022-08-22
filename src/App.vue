<template>
  <v-app>
    <v-main>
     <nav>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      mini-variant
      mini-variant-width="100"
      class="green lighten-1"
    >
      <v-list>
        <v-list-item class="mb-12">
          <v-list-item-action> </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-list flat>
        <v-list-item router to="/">
          <v-list-item-content>
            <v-icon class="mb-2">dashboard</v-icon>
            <v-list-item-subtitle align="center"
              >Gösterge Paneli</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list flat>
        <v-list-item router to="/doctor">
          <v-list-item-content>
            <v-icon class="mb-2">fas fa-notes-medical</v-icon>
            <v-list-item-subtitle align="center">Doctor</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list flat>
        <v-list-item router to="/">
          <v-list-item-content>
            <v-icon class="mb-2">fas fa-user-md</v-icon>
            <v-list-item-subtitle align="center">İletişim</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list flat>
        <v-list-item router to="/">
          <v-list-item-content>
            <v-icon class="mb-2">fas fa-signature</v-icon>
            <v-list-item-subtitle align="center"
              >Takipçiler</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list style="position: absolute; bottom: 0" class="ml-3" flat>
        <v-list-item router to="/">
          <v-list-item-action>
            <v-icon right>fas fa-sign-out-alt</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
      <router-view  />
    </v-main>
  </v-app>
</template>

<script>



export default {
  name: 'App',

  /*
  props:['user'],
  methods:{
   
  },

computed:{
  ...mapGetters(['user'])
},

*/


  data: () => ({
     drawer: true,
    
  }),
};
</script>
