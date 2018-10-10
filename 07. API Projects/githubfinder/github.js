
class GitHub {

    constructor() {

        this.client_id = "456211eb1bc95daae817";
        this.clinet_secret = "bfde3874f6091e309a8877b668adab32adbbdc06";
    }
    async getUser(user) {

        const response = await fetch(`https://api.github.com/users/${user}?clinet_id=${this.client_id}&client_secret=${this.clinet_secret}`);
        const profile = await response.json();

        return {
            profile
        }
    }
}