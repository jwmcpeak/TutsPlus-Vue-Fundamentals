const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);

function save() {
    localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
}

export default {
    addPage(page) {
        pagesStore.push(page);

        save();

    },
    getAllPages() {
        return pagesStore;
    },

    getSinglePage(index) {
        return pagesStore[index];
    },

    editPage(index, page) {
        pagesStore[index] = page;

        save();
    },

    removePage(index) {
        pagesStore.splice(index, 1);
        save();

    }
}