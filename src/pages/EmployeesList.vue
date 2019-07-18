<template>
    <div class="page employees-list" >
        <h1 class="employees-list__header">Employees</h1>
        <div v-if="loading" class="employees-list__loading">Loading...</div>
        <table v-else class="employees-list__list">
            <tr class="employees-list__list-header">
                <th>id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Edycja</th>
            </tr>
            <tr v-bind:key="employee.id" v-for="employee in employees" class="employees-list__list-row">
                <td>{{employee.id}}</td>
                <td>
                    <input type="text" name="name" v-if="employeeToEdit==employee.id" :placeholder='employee.name' />
                    <div v-else> {{employee.name}}</div>
                </td>
                <td>
                    <input type="text" name="street" v-if="employeeToEdit==employee.id" :placeholder='employee.address.street'/>
                    <input type="text" name="suite" v-if="employeeToEdit==employee.id" :placeholder='employee.address.suite' />
                    <input type="text" name="city" v-if="employeeToEdit==employee.id" :placeholder='employee.address.city' />
                    <div v-else>{{employee.address.street}} {{employee.address.suite}} {{employee.address.city}}</div>
                </td>
                <td>
                    <input type="text" name="phone" v-if="employeeToEdit==employee.id" :placeholder='employee.phone' />
                    <div v-else>{{employee.phone}}</div>
                </td>
                <td>
                    <input type="text" name="email" v-if="employeeToEdit==employee.id" :placeholder='employee.email'  />
                    <div v-else><a :href="`mailto:${ employee.email }`">{{employee.email}}</a></div>
                <td>
                    <EditButton v-if="employeeToEdit!=employee.id" v-bind="employee" v-on:editEmployee="editEmployee"/>
                    <div v-else class="buttonWrapper">
                        <button v-on:click=saveData(employee.id)>Save</button>
                        <button v-on:click='employeeToEdit=null'>Cancel</button>
                    </div>
                </td>
            </tr>
        </table>        
    </div>
</template>
<script>
    import axios from 'axios';
    import EditButton from "../components/EditButton.vue" 

    export default {
        data() {
            return {               
                loading: false,
                employeeToEdit: null,
                employees: [],
            }
        },
        components:{
            EditButton,
        },
        created () {
            this.fetchData()            
            
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData () {
                this.loading = true;

                axios.get('https://jsonplaceholder.typicode.com/users')
                    .then(({data}) => {
                        this.employees = data;
                    })
                    .finally(() => {
                        this.loading = false;
                        
                    })
            },    
            editEmployee(id){
                this.employeeToEdit = id;                
            },
            saveData(id){
                this.loading = true;

                axios({
                    method: 'put',
                    url: 'https://jsonplaceholder.typicode.com/users/'+id,
                    data: {
                        name : document.getElementsByName("name")[0].value,
                        street : document.getElementsByName("street")[0].value,
                        suite : document.getElementsByName("suite")[0].value,
                        city : document.getElementsByName("city")[0].value,
                        phone : document.getElementsByName("phone")[0].value,
                        email : document.getElementsByName("email")[0].value,
                    }
                }).then((response)=>{  
                    var index = this.employees.findIndex((employee)=>{
                        return employee.id == id;
                    });                           
                    this.employees[index].name = response.data.name;
                    this.employees[index].address.street = response.data.street;
                    this.employees[index].address.suite=response.data.suite;
                    this.employees[index].address.city=response.data.city;
                    this.employees[index].phone=response.data.phone;
                    this.employees[index].email=response.data.email;

                }).finally(()=>{
                    this.loading = false;
                    this.employeeToEdit = null;
                        
                });

            },
        }
    };

</script>
<style lang="scss" scoped>
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