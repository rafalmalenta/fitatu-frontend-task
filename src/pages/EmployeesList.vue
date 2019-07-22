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
            <tr  v-bind:key="employee.id" v-for="employee in employeeStore.employees" class="employees-list__list-row">
                <td data-label="id:">
                    {{employee.id}}
                </td>
                <td data-label="name:">
                    <input type="text" name="name" v-if="employeeStore.employeeToEdit==employee.id" :placeholder='employee.name' />
                    <div v-else> {{employee.name}}</div>
                </td>
                <td data-label="address:">
                    <input type="text" name="street" v-if="employeeStore.employeeToEdit==employee.id" :placeholder='employee.address.street'/>
                    <input type="text" name="suite" v-if="employeeStore.employeeToEdit==employee.id" :placeholder='employee.address.suite' />
                    <input type="text" name="city" v-if="employeeStore.employeeToEdit==employee.id" :placeholder='employee.address.city' />
                    <div v-else>{{employee.address.street}} {{employee.address.suite}} {{employee.address.city}}</div>
                </td>
                <td data-label="phone:">
                    <input type="text" name="phone" v-if="employeeStore.employeeToEdit==employee.id" :placeholder='employee.phone' />
                    <div v-else>{{employee.phone}}</div>
                </td>
                <td data-label="email:">
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
                    <button v-on:click="formularz(employee)" v-else-if="rowOrForm=='form'">Edit</button>    
                </td>
            </tr>
        </table>        
    </div>
    <Component404 v-else/>
</template>
<script>
    import axios from 'axios';
    import EditButton from "@components/EditButton.vue";
    import Component404 from "@components/Component404" 
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
            z-index: 3;
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
        @media screen and (max-width: 768px) {
            .employees-list {
                &__header {
                    text-align: center;
                    font-size: 1.5rem;
                    padding: 0;
                }

                &__list {
                    border: 0;
                }

                &__list-header {
                    border: none;
                    clip: rect(0 0 0 0);
                    height: 1px;
                    margin: -1px;
                    overflow: hidden;
                    padding: 0;
                    position: absolute;
                    width: 1px;
                }

                &__list-row {
                    border-bottom: 3px solid #ddd;
                    display: block;
                    margin-bottom: .625em;
                    box-shadow: 0.125rem 0.125rem 0.625rem #aaaaaa;

                    td {
                        border-bottom: 1px solid #ddd;
                        display: block;
                        font-size: .81rem;
                        text-align: right;

                        input {
                            font-size: 1.2rem;
                            margin-top:0.250rem;
                        }

                        &:before {
                            content: attr(data-label);
                            float: left;
                            text-transform: uppercase;
                            margin-left: 2px;
                        }

                        &:last-child {
                            border-bottom: 0;
                        }
                    }
                }
            }
        }
    }
</style>