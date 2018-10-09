// init github
const gitHub = new GitHub();

// Search input
const searchUser = document.getElementById('search-user');
searchUser.addEventListener('keyup', e => {
    // get input text
    const userText = e.target.value;
    if(userText) {

        gitHub
        .getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                // show alert
            }
            else {
                // show profile
            }
        });
    }
    else {
        // clear profile
    }
});