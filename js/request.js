
export function requestToServer(requestType,  url) {

var request = new XMLHttpRequest();

request.open(requestType, 'http://localhost:8080/'+url, true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(partner => {
      console.log(partner.company);
    });
    return data ;
  } else {
    console.log('error');
  }
}

request.send();
}