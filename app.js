document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#vueApp',
        data: {
            title: 'E-business Master',
            // images: [{
            //     title: 'Image 1',
            //     url: 'assets/images/p1.jpg',
            //     isAnimated: true,
            // }, {
            //     title: 'Image 2',
            //     url: 'assets/images/p2.jpg',
            //     isAnimated: false,
            // }, {
            //     title: 'Image 3',
            //     url: 'assets/images/p3.jpg',
            //     isAnimated: false,
            // }, {
            //     title: 'Image 4',
            //     url: 'assets/images/p4.jpg',
            //     isAnimated: true,
            // }, {
            //     title: 'Image 5',
            //     url: 'assets/images/p5.jpg',
            //     isAnimated: true,
            // },{
            //     title: 'Image 6',
            //     url: 'assets/images/p6.jpg',
            //     isAnimated: false,
            // }]
            images: [],
        },
        created: function() {
            this.$http.get('https://my-json-server.typicode.com/andrei-antal/tic_db/images')
                .then(function(response) {
                    this.images = response.body;
                })
                .catch(function(error) {
                    console.log(error)
                })
            
        }
    });
})