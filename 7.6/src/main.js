import {createApp, VueElement} from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
import router from './routes';
import $pages from './data';


const app = createApp(App);

app.use(router);

//app.config.globalProperties.$bus = $bus;
//app.config.globalProperties.$pages = $pages;

app.provide('$bus', $bus);
app.provide('$pages', $pages);




app.mount('#app');