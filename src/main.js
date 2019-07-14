import Vue from 'vue';
import router from './router';
import App from '@components/App';
import styles from '@scss/reset.scss';

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');