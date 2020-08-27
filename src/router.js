import Vue from 'vue';
import Router from 'vue-router'
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import Skills from './components/pages/Skills.vue'
import Works from './components/pages/Works.vue'
import Contact from './components/pages/Contact.vue'

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/skills',
        component: Skills
    },
    {
        path: '/works',
        component: Works
    },
    {
        path: '/contact',
        component: Contact
    },
]

const router = new Router({
    mode: 'history',
    routes
})

export default router



