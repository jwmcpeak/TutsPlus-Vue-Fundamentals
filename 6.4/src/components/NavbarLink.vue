<template>
    <li>
        <router-link 
            :to="`/${index}`"
            class="nav-link"
            :class="activeClasses"
            aria-current="page" 
            
            :title="`This link goes to the ${page.link.text} page`"
        >{{ page.link.text }}</router-link >
    </li>
</template>

<script>
export default {
    props: ['page', 'index', 'isActive'],
    computed: {
        activeClasses() {
            return {
                active: this.isActive,
                emphasize: this.isActive
            };
        }
    }
}
</script>
<style scoped>
.emphasize {
    text-decoration: underline !important;
}
</style>