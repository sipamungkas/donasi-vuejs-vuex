const transaksi = {
    namespaced: true,
    state: {
        listTransaksi: [{
                id: 'TRX1P1',
                donatur: 'Anugrah Sandi',
                bantuan: 'Gempa Lombok',
                jumlah: 100000
            },
            {
                id: 'TRX1P2',
                donatur: 'Dharma',
                bantuan: 'Banjir Bandang',
                jumlah: 250000
            },
            {
                id: 'TRX1P3',
                donatur: 'Asis Ramadhan',
                bantuan: 'Beasiswa Pendidikan',
                jumlah: 3000000
            }
        ]
    },
    mutations: {
        // mengubah state dengan ini (seperti reducer)
        ADD_DONASI: (state, payload) => {
            // menambahkan data baru kedalam array
            state.listTransaksi.push(payload)
        }
    },
    actions: {
        // action ya actions seperti action di redux
        save_donasi({
            commit,
            rootState
        }, payload) {
            //rootState untuk mengakses state yang tidak ada di dalam modul (ada di store.js)
            rootState.isLoading = true
            setTimeout(() => {
                // action akan menyuruh mutation untuk mengubah state
                commit('ADD_DONASI', payload)
                rootState.isLoading = false
            }, 1000)
        }
    }
}

export default transaksi;