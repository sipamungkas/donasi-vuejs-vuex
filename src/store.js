import Vue from 'vue'
import Vuex from 'vuex'
// import modules disini
import donatur from './modules/donatur'
import clients from './modules/client'
import transaksi from './modules/transaksi'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false
    },
    modules: {
        // Masukkan modul yang telah diimport kesini ya
        donatur,
        clients,
        transaksi
    }
})