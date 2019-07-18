<template>
    <button v-on:click="handleClick">Edytuj</button>
</template>
<script>
export default {
    name:"EditButton",
    props:{ 
        id : Number 
    },
    methods:{
        handleClick(){
            this.$emit('editEmployee',this.id)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
