import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from "../views/HomeView.vue";
import LoginView from '../components/LoginView.vue';
import CreateListing from "../views/CreateListing.vue";
import TaskerComponent from '../components/TaskerComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    
  }, {
    path: '/loginwithtoken', name: 'loginwithtoken', component: LoginView
  },{
    path: '/add', name: "CreateListing", component: CreateListing
  },
  {path: '/nearby-taskers', name: "TaskerComponent", component: TaskerComponent}
  
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;