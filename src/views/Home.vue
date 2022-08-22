
<template>
  <nav>
 
    <v-row align="center" justify="space-around" v-model="description">
      <v-btn @click="addArticle()" tile color="success" router to="/article">
        <v-icon left> mdi-pencil </v-icon>
        Makale Ekle
      </v-btn>
    </v-row>
    
        <div class="col-md-6">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Branş</th>
                <th scope="col">İsim</th>
                <th scope="col">Makale Sayısı</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="doctor in doctor" :key="doctor.uuid">
                <th scope="row">{{ doctor.branch }}</th>
                <td>{{ doctor.firstName }} {{ doctor.lastName }}</td>
                <td>{{ doctor.articleLikeCount }}</td>
  <v-btn  tile color="success" router to="/doctor">
        <v-icon left> mdi-domain </v-icon>
        Profiline Git
      </v-btn>

              </tr>
            </tbody>
          </table>

          <nav aria-label="Page navigation example">
            <ul class="pagination" >
              
              <li class="page-item" v-for="index in paginationCount" :key="index" ><a class="page-link" @click="currentPageNumber(index)" >{{index}}</a></li>
             
            
            </ul>
          </nav>
        </div>

    
  </nav>
</template>


<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  data: () => ({
    drawer: true,
    language: "TR",
    description: "",
    title: "",
    publishedDate: "",
    tags: [],
    categoryList: [],
    
   
  doctor: [],
      pageNumber:0,
      pageSize:5,
      dataSize:0,
      paginationCount:0,
      uuid:""
  }),

created: async function () {
   this.getDoctor(this.pageNumber,this.pageSize)
  },

    async function () {
   this.showDoctor()
  },


  computed: {
    ...mapGetters(["user"]),
    
  },

  created: async function () {
    var axios = require("axios");
    var data = JSON.stringify({
      filters: [],
      pageNumber: 0,
      pageSize: 5,
    });

    var config = {
      method: "get",
      url: "https://healtie.herokuapp.com/doctor/?pageNumber=0&pageSize=5",
      headers: {
        "Accept-Language": "TR",
      },
      data: data,
    };
    let response = await axios(config);

    this.doctor = response.data.data;
  },
  methods: {
    async addArticle() {
      const response = await axios.post("article/user-api", {
        language: this.language,
        description: this.description,
        title: this.title,
        publishedDate: this.publishedDate,
        tags: this.tags,
        categoryList: this.categoryList,
      });

      console.log(response);

      var config = {
        method: "post",
        url: "https://healtie.herokuapp.com/article/user-api",
        headers: {
          "Accept-Language": this.language,
          Authorization: localStorage.setItem(
            "token",
            response["data"]["jwt-token"]
          ),

          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },

 async currentPageNumber(number) {
        this.pageNumber = number-1
      
        let a = await this.getDoctor(this.pageNumber,this.pageSize)
         console.log(a);
        this.doctor = a.data.data;

    },
    async  showDoctor() {
    
      $("#myModal").modal("show")

      let a = await new DoctorService().getDoctorByUUID(this.uuid);
      console.log(a);
  
      this.doctor = a.data.data;

    },
     async getDoctor(pageNumber,pageSize) {
      let a = await new DoctorService().getDoctor(pageNumber, pageSize);
      console.log(a);


    this.paginationCount = a.data.totalPage
      this.doctor = a.data.data;

    },

    calculatePageNumbers(){
        let x = Math.ceil(this.dataSize/pageSize);
        return x;
    },

        showDoctorProfile(uuid){
      this.$router.push({
        name:"Doctor",
        params:{uuid}
      })
    }




  },
};
</script>






<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
/*.v-list-item--link::before { background-color: green; }*/
</style>