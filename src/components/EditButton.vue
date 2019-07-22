<template>
    <div >
        <button
            class="edit"
            v-if="employeeStore.employeeToEdit != employee.id && rowOrForm=='row'"
            v-on:click="editEmployee">
            Edit
        </button>        
        <template v-else-if="rowOrForm=='row' && employeeStore.employeeToEdit == employee.id" >
            <button
                class="save"                
                v-on:click="saveData"
                >
                Save
            </button>
            <button
                class="cancel"
                v-on:click="cancel">
                Cancel
            </button>
        </template>
        <button v-else-if="rowOrForm == 'form'"
                class="edit"                
                v-on:click="form"
                >
                Edit
        </button>
    </div>
    
</template>
<script>
import EmployeeStore from "../EmployeeStore.js"
export default {
    name:"EditButton",
    props:{ 
        employee : Object,
        rowOrForm : String,
    },
    methods:{
        editEmployee(){
            this.$emit('editEmployee',this.employee.id)
        },
       saveData(){
            this.$emit('saveData',this.employee.id)
        },
        cancel(){
            this.$emit('cancel')
        },
        form(){
            this.$emit('form',this.employee)
        },

    },
    data() {
            return {      
                employeeStore : EmployeeStore.data,               
            }
        },
}
</script>
<style lang="scss" scoped>

    button{
        width: 100%;
        border-radius: 12px
    }
    button.cancel{
        background-color: red;
        
    }
    button.save{
        background-color: green;
    }
    button.edit{
        background-color: rgb(168, 168, 216);
    }

</style>
