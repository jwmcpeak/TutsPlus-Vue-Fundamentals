<template>
    <navbar
        :pages="pages"
        :active-page="activePage"
        :nav-link-click="(index) => activePage = index"
    ></navbar>

    <div v-show="false">hide this content</div>
    
    <!-- <page-viewer
        v-if="pages.length > 0"
        :page="pages[activePage]"
    ></page-viewer> -->

    <create-page
        :page-created="pageCreated"
    ></create-page>
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
    created() {
        this.getPages();
    },
    data() {
        return {
            activePage: 0,
            pages: []
        };
    },
    methods: {
        async getPages() {
            let res = await fetch('pages.json');
            let data = await res.json();

            this.pages = data;
        },
        pageCreated(pageObj) {
            console.log(pageObj);
        }
    }
}
</script>