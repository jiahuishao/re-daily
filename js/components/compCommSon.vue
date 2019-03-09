<template>
    <div>
        {{ sonValue }}
        <div>
            <button v-on:click="onv(message)"></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "compCommSon",
        props:['sonValue'],
        data(){
            return {
                message:1
            }
        },
        methods:{
            onv(data){
                this.$emit('shaojiahui',data);
            }
        }
    }
</script>

<style scoped>

</style>