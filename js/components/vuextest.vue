<template>
    <div>
        {{ $store.state.age }}
        <input v-model="$store.state.age">
        <button @click="add">+++</button>
    </div>
</template>

<script>
    export default {
        name: "vuextest",
        methods:{
            add(){
                this.$store.commit("increment");
            }
        }
    }
</script>

<style scoped>

</style>