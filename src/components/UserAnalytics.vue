<template>
    <div class="userAnalytics">
        <h1>user analytics</h1>
        <p>The total count of users is {{count}} </p>
    </div>
</template>

<script>
import axios from "axios"; 

export default {
    name: 'userAnalytics', 
    data () {
        return {
            count: "",
            response: ""
        }
    } ,
    mounted() { 
        axios({method: "GET", "url": "http://localhost:8082/api/v1/userAnalytics/numberOfUserAdded"}).then(result => {
                this.count = result.data.origin; 
        }, error => {
            console.log(error); 
        });
    }, 
    methods: { 
        sendData() {
            axios({method: "GET", "url": "http://localhost:8082/api/v1/userAnalytics/"}).then(result => {
                this.response = result.data; 
            }, error => {
                console.log(error); 
            });
        }
    }
}

</script>