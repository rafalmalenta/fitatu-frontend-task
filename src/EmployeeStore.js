import axios from 'axios';
var EmployeeStore={
    data:{
        employees: [],
        employeeToEdit: null,
        loading: false,
        
    },
    methods:{
        fetchData(){
            this.loading = true;

            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(({data}) => {
                    EmployeeStore.data.employees = data;
                    console.log(EmployeeStore.data.employees)
                })
                .finally(() => {
                    EmployeeStore.data.loading = false;                   
                })
        },
        editEmployee(id){
            EmployeeStore.data.employeeToEdit = id;                
        },
        saveData(id){
            EmployeeStore.data.loading = true;
            console.log(EmployeeStore.data.loading)
                axios({
                    method: 'patch',
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
                    var index = EmployeeStore.data.employees.findIndex((employee)=>{
                        return employee.id == id;
                    });                           
                    EmployeeStore.data.employees[index].name = response.data.name;
                    EmployeeStore.data.employees[index].address.street = response.data.street;
                    EmployeeStore.data.employees[index].address.suite=response.data.suite;
                    EmployeeStore.data.employees[index].address.city=response.data.city;
                    EmployeeStore.data.employees[index].phone=response.data.phone;
                    EmployeeStore.data.employees[index].email=response.data.email;

                }).finally(()=>{                   
                    EmployeeStore.data.loading = false;
                    EmployeeStore.data.employeeToEdit = null;                        
                });

            },
            clear(){
                EmployeeStore.data.employeeToEdit = null;
            },   
    }    
}

export default EmployeeStore