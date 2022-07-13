const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);

export default {
    getAllPages() {
        return pagesStore;
    },

    getSinglePage(index) {
        return pagesStore[index];
    },

    editPage(index, page) {
        pagesStore[index] = page;

        localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
    }
}