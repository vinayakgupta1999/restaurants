<template>
    <Header/>
    <h1>Hello user,welcome on update Restaurant page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Restaurant Name" v-model="restaurant.name" name="name" />
        <input type="text" placeholder="Enter address" v-model="restaurant.address" name="address" />
        <input type="text" placeholder="Enter contact" v-model="restaurant.contact" name="contact" />
        <button type="button" v-on:click="updateRestaurant">Update New Restaurant</button>
    </form>
</template>
<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: 'Update',
    components:{
        Header
    },
    data() {
        return {
            restaurant: {
                name: "",
                address: '',
                contact: ''
            }
        }
    },
    methods: {
       async updateRestaurant()
        {
            const result=await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
            contact:this.restaurant.contact
            })
            console.warn(result)
            if(result.status==200){
                this.$router.push({name:"Home"})
            }
        }
    },
   async mounted(){
        let user =localStorage.getItem('user-info')
        if(!user){
            this.$router.push({name:'Signup'})
        }
        const result=await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id)
        this.restaurant=result.data

    }
}
</script>