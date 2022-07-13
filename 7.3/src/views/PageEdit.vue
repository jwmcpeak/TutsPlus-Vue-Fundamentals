<template>
    edit {{route.params.index}}
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps(['index']);


</script>