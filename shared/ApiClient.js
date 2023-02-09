import axios from "axios";
const ApiClient = {

     getCatergories () {

        //require('axios-debug-log');
      
        /* fetch('https://localhost:3443/categories').then((response) => response.json()).then((json) => {
            console.log(json);
            return data;
        }).catch((error) => {
            console.error(error);
        }) */
        const headers = {
            "Content-Type": "application/json; charset=utf-8",
            "Accept" : 'application/json; charset=utf-8',
            //Authorization: apiKey,
          };
          return axios.get('http://192.168.1.18:3000/categories', {headers});

    },

    getRecipes () {
        const headers = {
            "Content-Type": "application/json; charset=utf-8",
            "Accept" : 'application/json; charset=utf-8',
            //Authorization: apiKey,
          };
          return axios.get('http://192.168.1.18:3000/recipes', {headers});

    },
    
};

export default ApiClient;
