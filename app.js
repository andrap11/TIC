document.addEventListener('DOMContentLoaded', function () {

    var ListComponent = {
        template: `
        <div class="container">
        <div v-for="image in images" class="col image" v-bind:class="{animated: image.isAnimated}">
        <div class="title">
        {{image.title}}
                    </div>
                    <img class="col-image" v-bind:src="image.url" >
                </div>
                <div class="col">
                    <router-link to="/add">Add new image</router-link>
                </div>
			</div>
        `,
        data: function() {
            return { 
                images: [],
            };
        },
        created: function() {
            this.$http.get('https://my-json-server.typicode.com/andrei-antal/tic_db/images')
                .then(function(response) {
                    console.log(response);
                    
                    this.images = response.body;
                })
                .catch(function(error) {
                    console.log(error);
                })
        }
    }

    var AddComponent = {
        template: `
            <div class="container">
                <div class="col">
                    <router-link to="/">Back</router-link>
                </div>
            </div>
        `
    }

    var routes = [
        { path: '/', component: ListComponent },
        { path: '/add', component: AddComponent }
    ];

    var router = new VueRouter({
        routes
    });
    
    new Vue({
        el: '#vueApp',
        http: {
            root: 'https://my-json-server.typicode.com/andrei-antal/tic_db'
        },
        router: router,
        data: {
            title: 'E-business Master',
        },
        components: {
            'list-component': ListComponent,
            'add-component': AddComponent,
        }
    });

    

})