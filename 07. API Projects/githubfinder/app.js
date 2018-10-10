
const gitHub = new GitHub();
const ui = new UI();

const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', e => {

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
                ui.showProfile(data.profile);
            }
        });
    }
    else {
        // clear profile
    }
});