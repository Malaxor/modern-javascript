
// local text file
function getText() {

  fetch('test.txt')
  .then(res => {
    return res.text();
  })
  .then(data => {
    document.getElementById('output').innerHTML = data;
  })
  .catch(err => {
    console.log(err);
  });
}
// local json data
function getJSON() {

  fetch('posts.json')
  .then(res => {
    return res.json();
  })
  .then(data => {

    const posts = data.reduce((output, post) => {

      return  output + `<li>${post.title}</li>`;
    }, '');
    document.getElementById('output').innerHTML = posts;
  })
  .catch(err => {
    console.log(err);
  });
}
// local json data
function getExternal() {

  fetch('https://api.github.com/users')
  .then(res => {
    return res.json();
  })
  .then(data => {
    const users = data.reduce((output, user) => {

      return  output + `<li>${user.login}</li>`;
    }, '');
    document.getElementById('output').innerHTML = users;
  })
  .catch(err => {
    console.log(err);
  });
}


document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);