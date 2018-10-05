
const http = new EasyHTTP();
// GET Posts
http.get("https://jsonplaceholder.typicode.com/posts", (err, posts) => {

    if(err) console.log(err);
    console.log(posts);
});
// GET Post
http.get("https://jsonplaceholder.typicode.com/posts/1", (err, post) => {

    if(err) {
        console.log(err);
    }
    console.log(post);
});

const data = {

    title: 'Custom Post',
    body: 'This is a custom post'
};
// POST 
http.post("https://jsonplaceholder.typicode.com/posts", data, (err, newPost) => {

    if(err) console.log(err);
    console.log(newPost);
});
// PUT
http.put("https://jsonplaceholder.typicode.com/posts/1", data, (err, updatedPost) => {

    if(err) console.log(err);
    console.log(updatedPost);
});
// DELETE
http.delete("https://jsonplaceholder.typicode.com/posts/1", (err, response) => {

    if(err) {
        console.log(err);
    }
    console.log(response);
});