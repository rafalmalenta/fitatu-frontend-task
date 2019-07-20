<template>
    <div v-if="employee">
        <input type="text" name="name"  :value='employee.name' />
        <input type="text" name="street"  :value='employee.address.street'/>
        <input type="text" name="suite"  :value='employee.address.suite' />
        <input type="text" name="city"  :value='employee.address.city' />
        <input type="text" name="phone" :value='employee.phone' />
        <input type="text" name="email"  :value='employee.email'  />
        <button v-on:click="saveData(employee.id)">Save</button>
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

</style>
