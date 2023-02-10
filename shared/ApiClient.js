import axios from "axios";
const ApiClient = {

     getCatergories () {

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

    getUser (user) {
        const headers = {
            "Content-Type": "application/json; charset=utf-8",
            "Accept" : 'application/json; charset=utf-8',
            
            //Authorization: apiKey,
        };
          return axios.post('http://192.168.1.18:3000/users/login', user, {headers})
    },
    
};

export default ApiClient;
