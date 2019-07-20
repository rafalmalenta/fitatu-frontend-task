import Vue from 'vue';
import VueRouter from 'vue-router';
import EmployeesList from '@pages/EmployeesList';
import Form from '@pages/Form';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: 'list/row',
        },
        {
            path: '/list/:rowOrForm',
            name: 'list',
            props: true,
            component: EmployeesList,
        },
        {
            path: '/formularz',
            props: true,
            name: 'formularz',
            component: Form,
        },
        {
            path: '/fakeview2',
            name: 'employeesList3',
            component: Form,
        },
        {
            path: '/fakeview3',
            name: 'employeesList5',
            component: Form,
        },

    ],
});

export default router;