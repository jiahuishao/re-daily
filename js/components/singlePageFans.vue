<template>
    <div>
        <div v-for="data in data[1]">
            <h3>
                {{ data.name }}
                <small v-if="data.sex">boy</small>
                <small v-else>girl</small>
            </h3>
            <p>{{ data.phone }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "singlePageFans",
        props:['data'],
    }
</script>

<style scoped>

</style>