<template>
    <div v-if="page" class="container">
        <h1 class="emphasize">{{page.pageTitle}}</h1>
        <p>{{page.content}}</p>
    </div>
</template>

<script>
export default {
    created() {
        this.page = this.$pages.getSinglePage(this.$route.params.index);
    },
    data() {
        return {
            page: null
        };
    }
}
</script>
<style scoped>
.emphasize {
    color: blue;
}
</style>