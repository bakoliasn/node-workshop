var request = require('request');
request("http://api.open-notify.org/iss-now.json", function(err, response, body){
    var obj = JSON.parse(body);

   console.log("latitude: " + obj.iss_position.latitude + "\nlongitude: " + obj.iss_position.longitude);
});
