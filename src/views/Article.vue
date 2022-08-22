<template>
  <v-container fluid>
    <v-form @submit.prevent="addArticle">
      <v-textarea
        v-model="description"
        name="input-7-1"
        filled
        label="İçerik"
        auto-grow
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      ></v-textarea>

      <v-row>
        <v-col cols="12" sm="6">
          <v-textarea
            label="Başlık"
            v-model="title"
            auto-grow
            outlined
            rows="1"
            row-height="15"
          ></v-textarea>
        </v-col>
        <v-col cols="12" sm="6">
          <v-textarea
            filled
            auto-grow
            label="Dil"
            v-model="language"
            rows="2"
            row-height="20"
          ></v-textarea>
        </v-col>
      </v-row>

      <v-row align="center" justify="space-around">
        <v-btn @click="addArticle()" tile color="green lighten-1">
          <v-icon left> mdi-pencil </v-icon>
          Kaydet
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  data: () => ({
    language: "TR",
    description: "",
    title: "",
    publishedDate: "2022-08-18",
    tags: [],
    categoryList: [],
  }),

  methods: {
    async addArticle() {

        


      const response = await axios.post(
        "article/user-api",

        {
          language: this.language,
          description: this.description,
          title: this.title,
          publishedDate: this.publishedDate,
          tags: this.tags,
          categoryList: this.categoryList,
        },
        {
         
              headers: {
            "Accept-Language": "TR",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }

      );

      localStorage.setItem("token", response["data"]["jwt-token"]);
      console.log(response);
    },

    ...mapMutations(["setUser", "setToken"]),
  },
  computed: {
    ...mapGetters(["token"]),
  },
};
</script>
