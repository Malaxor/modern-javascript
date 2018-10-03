
function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();
  // OPEN
  xhr.open('GET', 'data.txt', true);

  xhr.onerror = function() {

    console.log('Request error...', );
  }
  // used for spinners/loaders
  xhr.onprogress = function() {
    console.log('READY STATE', xhr.readyState);
  }
  xhr.onload = function() {

    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }   
  xhr.send();
}

document.getElementById('button').addEventListener('click', loadData);