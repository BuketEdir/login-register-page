

<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-form @submit.prevent="handleSubmit2">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <h4 class="text-center">Hesabınıza Giriş Yapın</h4>
                      <h6 class="text-center grey--text">
                        Devam edebilmek için oturumuzu açın
                      </h6>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-text-field
                            label="Email"
                            outlined
                            dense
                            v-model="email"
                            color="green lighten-1"
                            autocomplete="false"
                            class="mt-16"
                          />
                          <v-text-field
                            label="Şifre"
                            outlined
                            dense
                            color="green lighten-1"
                            v-model="password"
                            autocomplete="false"
                            type="password"
                          />
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox
                                label="Beni hatırla"
                                class="mt-n1"
                                color="green lighten-1"
                              >
                              </v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption green lighten-1--text"
                                >Şifremi Unuttum</span
                              >
                            </v-col>
                          </v-row>
                          <v-btn
                            type="submit"
                            color="green lighten-1"
                            dark
                            block
                            tile
                            >Giriş yap</v-btn
                          >

                          <h5 class="text-center grey--text mt-4 mb-3">
                            ... kullanarak giriş yap
                          </h5>
                          <div
                            class="
                              d-flex
                              justify-space-between
                              align-center
                              mx-10
                              mb-16
                            "
                          >
                            <v-btn depressed outlined color="grey">
                              <v-icon color="red">fab fa-google</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="blue">fab fa-facebook-f</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="light-blue lighten-3"
                                >fab fa-twitter</v-icon
                              >
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md="6" class="green lighten-1 rounded-bl-xl">
                    <div style="text-align: center; padding: 180px 0">
                      <v-card-text class="white--text">
                        <h3 class="text-center">Henüz hesabınız yok mu?</h3>
                        <h6 class="text-center">
                          Let's get you all set up so you can start creating
                          your your first<br />
                          onboarding experience
                        </h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step++"
                          >KAYIT OL</v-btn
                        >
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-form>
            </v-window-item>

            <v-window-item :value="2">
              <v-form @submit.prevent="handleSubmit">
                <v-row>
                  <v-col cols="12" md="6" class="green lighten-1 rounded-br-xl">
                    <div style="text-align: center; padding: 180px 0">
                      <v-card-text class="white--text">
                        <h3 class="text-center">Kayıt oldunuz mu?</h3>
                        <h6 class="text-center">
                          Hebınızı açın ve hesabınızı düzenleyin <br />
                        </h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step--"
                          >Giriş yap</v-btn
                        >
                      </div>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <h4 class="text-center">Hesap için kayıt olun</h4>
                      <h6 class="text-center grey--text">
                        Profilinizi oluşturmaya başlayın <br />
                      </h6>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-row>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                v-model="firstName"
                                label="İsim"
                                outlined
                                dense
                                color="green lighten-1"
                                autocomplete="false"
                                class="mt-4"
                              />
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                v-model="lastName"
                                label="Soyisim"
                                outlined
                                dense
                                color="green lighten-1"
                                autocomplete="false"
                                class="mt-4"
                              />
                            </v-col>
                          </v-row>
                          <v-text-field
                            v-model="email"
                            label="Email"
                            outlined
                            dense
                            color="green lighten-1"
                            autocomplete="false"
                          />
                          <v-text-field
                            label="Şifre"
                            v-model="password"
                            outlined
                            dense
                            color="green lighten-1"
                            autocomplete="false"
                            type="password"
                          />
                          <v-text-field
                            label="Şifre Tekrarı"
                            v-model="passwordConfirm"
                            outlined
                            dense
                            color="green lighten-1"
                            autocomplete="false"
                            type="password"
                          />
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox
                                label="Kabul Ediyorum"
                                class="mt-n1"
                                color="green lighten-1"
                              >
                              </v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption green lighten-1 --text ml-n4"
                                >Şartlar & Koşullar</span
                              >
                            </v-col>
                          </v-row>
                          <v-btn
                            type="submit"
                            color="green lighten-1"
                            dark
                            block
                            tile
                            >Kayıt ol</v-btn
                          >

                          <h5 class="text-center grey--text mt-4 mb-3">
                            ... ile kayıt ol
                          </h5>
                          <div
                            class="
                              d-flex
                              justify-space-between
                              align-center
                              mx-10
                              mb-11
                            "
                          >
                            <v-btn depressed outlined color="grey">
                              <v-icon color="red">fab fa-google</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="blue">fab fa-facebook-f</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="light-blue lighten-3"
                                >fab fa-twitter</v-icon
                              >
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-form>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    ageRangeEnum: "_UNSPECIFIED",
    genderEnum: "FEMALE",
    contractDTOList: [],

    step: 1,
  }),
  props: {
    source: String,
  },
  methods: {
    async handleSubmit() {
       //e.preventDefault();
      const response = await axios.post("auth/register", {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
        ageRangeEnum: this.ageRangeEnum,
        genderEnum: this.genderEnum,
        contractDTOList: this.contractDTOList,
      });

      console.log(response);
    },

   
   ...mapMutations(["setUser", "setToken"]),

    async handleSubmit2() {
      const response = await axios.post("auth/login", {
        email: this.email,
        password: this.password,
      });
 

     localStorage.setItem('token', response["data"]["jwt-token"]);

    
    
      this.$router.push("/home");
    },
    

  },
};
</script>









<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 400px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 400px !important;
}
</style>
