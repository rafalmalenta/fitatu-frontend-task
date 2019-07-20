<template>
    <div v-if="rowOrForm == 'form'||rowOrForm=='row'" class="page employees-list" >
        <h1 class="employees-list__header">Employees</h1>
        <div v-if="employeeStore.loading" class="employees-list__loading">Loading...</div>        
        <table v-else class="employees-list__list">
            <tr class="employees-list__list-header">
                <th>id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Edycja</th>
            </tr>
            <tr v-bind:key="employee.id" v-for="employee in employeeStore.employees" class="employees-list__list-row">
                <td>{{employee.id}}</td>
                <td>
                    <input type="text" name="name" v-if="employeeStore.employeeToEdit==employee.id" :placeholder='employee.name' />
                    <div v-else> {{employee.name}}</div>
                </td>
                <td>
                    <input type="text" name="street" v-if="employeeStore.employeeToEdit==employee.id" :placeholder='employee.address.street'/>
                    <input type="text" name="suite" v-if="employeeStore.employeeToEdit==employee.id" :placeholder='employee.address.suite' />
                    <input type="text" name="city" v-if="employeeStore.employeeToEdit==employee.id" :placeholder='employee.address.city' />
                    <div v-else>{{employee.address.street}} {{employee.address.suite}} {{employee.address.city}}</div>
                </td>
                <td>
                    <input type="text" name="phone" v-if="employeeStore.employeeToEdit==employee.id" :placeholder='employee.phone' />
                    <div v-else>{{employee.phone}}</div>
                </td>
                <td>
                    <input type="text" name="email" v-if="employeeStore.employeeToEdit==employee.id" :placeholder='employee.email'  />
                    <div v-else><a :href="`mailto:${ employee.email }`">{{employee.email}}</a></div>
                <td>
                    <div v-if="rowOrForm=='row'">
                        <EditButton v-if="employeeStore.employeeToEdit!=employee.id" v-bind="employee" v-on:editEmployee="editEmployee"/>
                        <div v-else class="buttonWrapper">
                            <button class="save" v-on:click=saveData(employee.id)>Save</button>
                            <button class="cancel" v-on:click='employeeStore.employeeToEdit=null'>Cancel</button>
                        </div>
                    </div>
                    <button v-on:click="formularz(employee)" v-else-if="rowOrForm=='form'">Edycja</button>    
                </td>
            </tr>
        </table>        
    </div>
    <Component404 v-else/>
</template>
<script>
    import axios from 'axios';
    import EditButton from "../components/EditButton.vue";
    import Component404 from "../components/Component404" 
    import EmployeeStore from "../EmployeeStore.js"    

    export default {
        data() {
            return {      
                employeeStore : EmployeeStore.data,               
            }
        },
        components:{
            EditButton,
            Component404
        },
       
        props: ['rowOrForm'],
        
        watch: {            
            '$route': 'clear'
        },
        methods: {
            clear(){
               EmployeeStore.methods.clear();
            },
            formularz(employee){
                this.$router.push({ name: 'formularz', params: { employee } })
            },  
            editEmployee(id){
                EmployeeStore.methods.editEmployee(id);                
            },
            saveData(id){
                EmployeeStore.methods.saveData(id)
            },
        }
    };

</script>
<style lang="scss" scoped>
    button.cancel{
        background-color: red;
        border-radius: 12px
    }
    button.save{
        background-color: green;
        border-radius: 12px
    }
    .buttonWrapper
    {
        width: 100%;
    }
    button{
        width: 100%;
    }

    .employees-list {
        &__header {
            font-size: 20px;
            padding: 0 0 10px;
        }

        &__loading {
            color: #999d9d;
            text-align: center;
        }

        &__list {
            font-size: 14px;
            width: 100%;
            border-collapse: collapse;
        }

        &__list-header {
            background: #f7f8f9;
            border-bottom: 1px solid #999d9d;

            th {
                padding: 8px;
            }
        }

        &__list-row {
            background: #fff;

            td {
                padding: 8px;
            }
        }
    }
</style>