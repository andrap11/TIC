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
                    <form v-on:submit="submit">
                        <label>
                            Image title
                            <input type="text" v-model="formData.imageTitle">
                        </label>
                        <label>
                            Image src
                            <input type="text" v-model="formData.imageSrc">
                        </label>
                        <label>
                            Is animated?
                            <input type="checkbox" v-model="formData.isAnimated">
                        </label>
                        <button type="submit">Save</button>
                    </form>
                    <router-link to="/">Back</router-link>
                </div>
            </div>
        `,
        data: function() {
            return {
                formData: {
                    imageTitle: '',
                    imageSrc: '',
                    isAnimated: false,
                }
            };
        },
        methods: {
            submit: function() {
                // should post data
                console.log(JSON.parse(JSON.stringify(this.formData)));
                this.$router.push('/')
            }
        }
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
});