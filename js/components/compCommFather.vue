<template>
    <div>
        <comp-comm-son :son-value="fatherValue" @shaojiahui="updateV"></comp-comm-son>
        <div>aaaa</div>
    </div>
</template>

<script>
    import compCommSon from '../components/compCommSon.vue'

    export default {
        name: "compCommFather",
        components:{compCommSon},
        data(){
            return {
                fatherValue:'1111111'
            }
        },
        methods:{
            updateV(data){
                console.log(data);
                this.fatherValue = data;
            }
        }
    }
</script>

<style scoped>

</style>