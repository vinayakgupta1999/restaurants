<template>
    <Header />
    <h1>Hello {{this.user}},welcome on Add Restaurant page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Restaurant Name" v-model="restaurant.name" name="name" />
        <input type="text" placeholder="Enter address" v-model="restaurant.address" name="address" />
        <input type="text" placeholder="Enter contact" v-model="restaurant.contact" name="contact" />
        <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
    </form>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
    name: 'Add',
    components: {
        Header
    },
    data() {
        return {
            user:'',
            restaurant: {
                name: "",
                address: '',
                contact: ''
            }
        }
    },
    methods: {
       async addRestaurant()
        {
            let result=await axios.post("http://localhost:3000/restaurant",
            this.restaurant
            )
            console.log(result)
            if(result.status==201){
                this.$router.push({name:'Home'})
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({ name: 'Signup' })
        }
    }
}
</script>