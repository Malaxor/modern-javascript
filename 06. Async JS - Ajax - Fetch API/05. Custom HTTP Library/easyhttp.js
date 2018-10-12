
function EasyHTTP() {

  this.http = new XMLHttpRequest();
}
// Get
EasyHTTP.prototype.get = function(url, callback) {

  this.http.open('GET', url, true);
  this.http.onload = () => {

    if(this.http.status === 200) {
      callback(null, this.http.responseText);
    }
    else {
      callback(`Error: ${this.http.status}`);
    }
  }
  this.http.send();
}
// Post
EasyHTTP.prototype.post = function(url, data, callback) {

  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type','application/json');

  this.http.onload = () => {

    callback(null, this.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}
// Put
EasyHTTP.prototype.put = function(url, data, callback) {

  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type','application/json');

  this.http.onload = () => {

    callback(null, this.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}
// Delete
EasyHTTP.prototype.delete = function(url, callback) {

  this.http.open('DELETE', url, true);
  this.http.onload = () => {

    if(this.http.status === 200) {
      callback(null, 'Post was deleted');
    }
    else {
      callback(`Error: ${this.http.status}`);
    }
  }
  this.http.send();
}