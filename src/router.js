import Vue from 'vue';
import VueRouter from 'vue-router';
import EmployeesList from '@pages/EmployeesList';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: 'list',
        },
        {
            path: '/list',
            name: 'employeesList',
            component: EmployeesList,
        },
        {
            path: '/fakeview1',
            name: 'employeesList2',
            component: EmployeesList,
        },
        {
            path: '/fakeview2',
            name: 'employeesList3',
            component: EmployeesList,
        },
        {
            path: '/fakeview3',
            name: 'employeesList5',
            component: EmployeesList,
        },

    ],
});

export default router;