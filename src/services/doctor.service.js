
class DoctorService {

    getDoctor(pageNumber, pageSize) {
      var axios = require("axios");
      var data = JSON.stringify({
        filters: [],
        pageNumber: pageNumber,
        pageSize: pageSize
  
      });
  
  
      var config = {
        method: "post",
        url: "https://healtie.herokuapp.com/doctor/get-all-by-filter",
        headers: {
          "Accept-Language": "TR",
          "Content-Type": "application/json"
        },
        data: data
      };
  
  
      return axios(config);
    };
  
    getArticleByUUID(uuid) {
  
      var axios = require('axios');
      var data = JSON.stringify({
        uuid:uuid
  
      });
  
      var config = {
        method: 'get',
        url: 'https://healtie.herokuapp.com/doctor/:uuid',
       
        
        headers: {
          'Accept-Language': 'TR'
        },
        data: data
      };
    
      return axios(config);
  
    }
  
  
  
  }
  
  export default DoctorService