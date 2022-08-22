<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-layout row >
      <v-flex md3>
        <v-app :style="{ background: $vuetify.theme.themes.light.background }" >
          <v-container >
            
            <v-flex >

              <v-card class="ma-5 text-center mt-12" shaped elevation="10" > 
                <v-avatar class="mt-n7" size="60" elevation="10">
                  <img
                    src="https://img.freepik.com/free-vector/doctor-background-design_1270-62.jpg?w=826&t=st=1660889639~exp=1660890239~hmac=ac8e24fca9599708b375969969687dbb6a0c0552b64e44bd7871b21e72fb930f"
                  />
                </v-avatar>

              
                
                <v-card-title class="layout justify-center" >
               
                </v-card-title>
                <v-card-subtitle class="layout justify-center">
                  doctor.branch + doctor.address
                </v-card-subtitle>
                <v-list>
                  <v-list-item>
                    <v-list-item-title class="cyan--text text--darken-1"
                      >Beğenilme</v-list-item-title
                    >
                    <v-list-item-title class="cyan--text text--darken-1"
                      >Email</v-list-item-title
                    >
                    <v-list-item-title class="cyan--text text--darken-1"
                      >Makale Sayısı</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item class="mt-n5">
                    <v-list-item-subtitle>
                   {{ doctor ? doctor.articleLikeCount : null}}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle> {{ doctor ? doctor.email: null}} </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      doctor.articleLikeCount
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
                 
              
              </v-card>

              
            </v-flex>




            <v-flex>
              <v-list color="transparent" class="text-center">
                <v-list-item>
                  <v-list-item-title class="cyan--text text--darken-1"
                    >Bildirimler</v-list-item-title
                  >
                  <v-list-item-subtitle>19 Aug 2022</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex>
              <v-card class="ma-5" shaped elevation="10">
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar
                      size="10"
                      color="cyan darken-1"
                    ></v-list-item-avatar>
                    <v-list-item-title class="ml-n2">Kognum</v-list-item-title>
                    <v-list-item-subtitle>10 mg</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="cyan--text text--darken-1"
                      >MON</v-list-item-title
                    >
                    <v-list-item-title class="cyan--text text--darken-1"
                      >WED</v-list-item-title
                    >
                    <v-list-item-title class="cyan--text text--darken-1"
                      >FRI</v-list-item-title
                    >
                    <v-list-item-title class="cyan--text text--darken-1"
                      >SUN</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item class="mt-n5">
                    <v-list-item-subtitle
                      >2 times in a day before food</v-list-item-subtitle
                    >
                  </v-list-item>
                  <v-divider></v-divider>
                </v-list>
                <v-list two-line subheader>
                  <v-list-item>
                    <v-list-item-avatar size="35">
                      <img
                        src="https://img.freepik.com/free-vector/doctor-background-design_1270-62.jpg?w=826&t=st=1660889639~exp=1660890239~hmac=ac8e24fca9599708b375969969687dbb6a0c0552b64e44bd7871b21e72fb930f"
                      />
                    </v-list-item-avatar>
                    <v-list-item-content class="ml-n5">
                      <v-list-item-title>Dr.Isabella Bowers</v-list-item-title>
                      <v-list-item-subtitle
                        >California Hospital Medical</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-list two-line subheader class="mt-n5">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Surgeon</v-list-item-title>
                      <v-list-item-subtitle>spinal pain</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-list two-line subheader class="mt-n8">
                  <v-list-item>
                    <v-list-item-title class="cyan--text text--darken-1"
                      >Date</v-list-item-title
                    >
                    <v-list-item-title class="cyan--text text--darken-1"
                      >Time</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item class="mt-n10">
                    <v-list-item-title>26 Aug 2019</v-list-item-title>
                    <v-list-item-title>12:45 AM</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>

            <v-flex>
              <v-card class="ma-5 text-center mt-12" shaped elevation="10">
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                      <v-icon>fab fa-cc-visa</v-icon>
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >2345 4645 7865 5432</v-list-item-subtitle
                    >
                  </v-list-item-content>

                  <v-list-item-avatar size="60" color="cyan darken-1">
                    <v-icon color="white">fas fa-plus</v-icon>
                  </v-list-item-avatar>
                </v-list-item>
              </v-card>
            </v-flex>
          </v-container>
        </v-app>
      </v-flex>
      <v-flex md9>
        <v-app
          :style="{ background: $vuetify.theme.themes.dark.background }"
          class="rounded"
        >
          <v-container>
            <v-flex>
              <v-list class="mt-5">
                <v-list-item>
                  <v-list-item-title class="cyan--text text--darken-1"
                    >Yayımlanan Makaleler</v-list-item-title
                  >

                  <v-list-item-action>
                    <v-btn class="ma-2" tile outlined color="cyan darken-1">
                      <v-icon left>fas fa-eye</v-icon>Hepsini Gör
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex>
              <v-row no-gutters v-for="article in articles" :key="article.uuid">
                <v-col cols="12" md="4">
                  <v-row>
                    <v-col cols="12" md="2">
                      <v-card height="80px" width="10px" color="green"></v-card>
                    </v-col>
                    <v-col cols="12" md="10">
                      <v-list two-line subheader class="ml-n8">
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-subtitle>{{
                              article.publishedDate
                            }}</v-list-item-subtitle>
                            <v-list-item-title>{{
                              article.title
                            }}</v-list-item-title>
                            <v-list-item-subtitle>{{
                              article.author
                            }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-flex>

            <v-flex>
              <v-list class="ml-5">
                <v-list-item>
                  <v-list-item-title class="cyan--text text--darken-1"
                    >Hatırlatmalar</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-flex>
          </v-container>
        </v-app>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    doctors: [],
    articles: [],
  }),
  props: ["doctor"],
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30);
      const d = new Date();
      d.setDate(day);
      return d.toISOString().substr(0, 10);
    });
  },

  async created() {
    var axios = require("axios");
    var data = JSON.stringify({
      filters: [],
      pageNumber: 0,
      pageSize: 5,
    });

    var config = {
      method: "get",
      url: "https://healtie.herokuapp.com/article/?pageNumber=1&pageSize=5",
      headers: {
        "Accept-Language": "TR",
      },
      data: data,
    };
    let response = await axios(config);

    this.articles = response.data.data;
    function2
  },

  methods: {
    showDoctor() {
 this.$router.push({
      name:"Doctor",
      params:{
        uuid:"e708d9e0-8620-484e-bb3a-26e6238bc770"
      }
    })
    },

    showArticle() {
      $("#myModal").modal("show");
    },

    async function2 () {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://healtie.herokuapp.com/doctor/e708d9e0-8620-484e-bb3a-26e6238bc770",
      headers: {
        "Accept-Language": "TR",
      },
      data:data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

      let response=await axios(config);
      this.articles=response.data.data;
  },
  },
};
</script>
<style scoped>
</style>