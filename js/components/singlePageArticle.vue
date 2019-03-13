<template>
    <div>
        <div class="articleBlock" v-for="data in data[0]">
            <div class="name">{{data.name}}</div>
            <span class="remark">{{ data.remark }}</span>
            <p class="content">{{ data.content }}</p>
        </div>
    </div>
</template>

<script>
    import '../../css/singlePageArticle.css'

    export default {
        name: "singlePageArticle",
        props:['data'],
    }
</script>

<style scoped>

</style>