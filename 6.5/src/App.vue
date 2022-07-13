<template>
    <navbar></navbar>

    <router-view></router-view>

    <!-- <div v-show="false">hide this content</div>
    
    <page-viewer
        v-if="pages.length > 0"
        :page="pages[activePage]"
    ></page-viewer>

    <create-page
        @page-created="pageCreated"
    ></create-page> -->
</template>

<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';


export default {
    components: {
        Navbar,
        PageViewer,
        CreatePage
    },

    methods: {
        pageCreated(pageObj) {
            this.pages.push(pageObj);
        }
    }
}
</script>