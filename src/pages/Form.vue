<template>
    <div v-if="employee">
        <label>name
            <input type="text" name="name"  :value='employee.name' />
        </label>
        <label>street
        <input type="text" name="street"  :value='employee.address.street'/>
        </label>
        <label>suite
        <input type="text" name="suite"  :value='employee.address.suite' />
        </label>
        <label>city
        <input type="text" name="city"  :value='employee.address.city' />
        </label>
        <label>phone
        <input type="text" name="phone" :value='employee.phone' />
        </label>
        <label>email       
        <input type="text" name="email"  :value='employee.email'  />
        </label>
        <button v-on:click="saveData(employee.id)">Send</button>
        <router-link to="/list/form">
            <button>Cancel</button>
        </router-link>
    </div>
    <Component404 v-else />
</template>
<script>
    import Component404 from "../components/Component404" 
    import EmployeeStore from "../EmployeeStore.js"
    

    export default {
        name: "Form",
        props: ["employee"],
        components:{            
            Component404,
        },
        methods:{
            saveData(id){
                this.$router.push({ name: 'list', params: {rowOrForm:"form"} })                
                EmployeeStore.methods.saveData(id);                
            },
        }    
    }
</script>

<style lang="scss" scoped>
div{
    width: 30%;
    margin: 0px auto;
    button{
        font-size: 20px;
        height: 2em;
        width: 100%;
    }
}
label{
    width: 100%;
    display: block;
    padding: 5px 5px 5px 5px;
    font-size: 20px;
    input {
        font-size: 20px;
        height: 2em;
        display: block;
        width: 100%;       
    }
}
</style>
