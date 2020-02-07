import Vue from 'vue'
import Router from 'vue-router'
import UserAnalytics from '@/components/UserAnalytics'


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {path: '/userAnalytics', component: UserAnalytics}
    ]
});


export default router; 