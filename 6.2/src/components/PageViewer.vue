<template>
    <div class="container">
        <h1 class="emphasize">Page Title</h1>
        <p>{{$route.params.index}}</p>
    </div>
</template>

<script>
export default {
    created() {
        //console.log(this.$route.params);
    }
}
</script>
<style scoped>
.emphasize {
    color: blue;
}
</style>