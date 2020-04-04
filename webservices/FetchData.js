// FetchData.js

const URI = 'http://5e86fb0d781e48001676b54a.mockapi.io/dashop/Product';

export default {
    async fetchUsers() {
        try {
                let response = await fetch(URI);
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}