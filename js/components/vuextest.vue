<template>
    <div>
        {{ $store.state.age }}
        <input v-model="$store.state.age">
        <input v-model.number="todo">
        <button @click="add">+++</button>
    </div>
</template>

<script>
    export default {
        name: "vuextest",
        data(){
            return {
                todo:5
            }
        },
        methods:{
            add(){
                this.$store.commit("increment",{todo:this.todo});
            }
        }
    }
</script>

<style scoped>

</style>