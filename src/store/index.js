import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "http://localhost:8000/services";
const headers = {Accept: "application/json"};

export default new Vuex.Store({
    state: {
        allProducts: [],
        user: {
            isAuthenticated: false,
            name: "",
            email: "",
            idToken: ""
        },
        
    },
    getters: {
        allProducts: state => state.allProducts
    },
    mutations: {
        setProducts(state, payload) {
            state.allProducts = payload;
        },
        logout(state) {
            state.user.isAuthenticated = false;
            state.user.name = "";
            state.user.email = "";
            state.user.idToken = "";
        },
        login(state, payload) {
            state.user.isAuthenticated = true;
            state.user.name = payload.name;
            state.user.email = payload.email;
            state.user.idToken = payload.idToken;
        }
    },
    actions: {
        async getProducts(state) {
            const allProducts = await fetch(url, {headers});
            const ap = await allProducts.json();
            state.commit("setProducts", ap);
            console.log(ap);
        }
        
    },
    modules: {}
})