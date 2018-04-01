var axios = require("axios");

// Make a request for a user with a given ID

axios.get("http://www.saascoalition.org/wp-json/wp/v2/posts")
  .then(function (response) {
    for (i = 0; i < response.data.length; i++){
        // console.log(response.data[i].id);
        console.log(Date(response.data[i].date));
        console.log(response.data[i].title.rendered);
        console.log(response.data[i].excerpt.rendered);
        console.log(response.data[i].link);
        console.log("\n \n");
    }
  })
  .catch(function (error) {
    console.log(error);
  });