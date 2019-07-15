<template>
    <button v-on:click="$emit('edit-employee',id)">Edytuj</button>
</template>
<script>
export default {
    name:"EditButton",
    props:{ 
        id : Number 
    },
}
</script>
<style lang="scss" scoped>

</style>
