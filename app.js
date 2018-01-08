document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#vueApp',
        http: {
            root: 'https://my-json-server.typicode.com/andrei-antal/tic_db'
        },
        data: {
            title: 'E-business Master',
            images: [],
        },
        created: function() {
            this.$http.get('images')
                .then(function(response) {
                    this.images = response.body;
                })
                .catch(function(error) {
                    console.log(error)
                })
            
        }
    });
})