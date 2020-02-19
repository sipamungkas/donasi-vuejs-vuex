<template>
  <div id="app">
    <div class="container" style="padding-top: 20px">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Form Donasi</h3>
            </div>
            <div class="card-body">
              <list-donatur @selectedDonatur="selectedDonatur" />
              <lokasi-bencana @selectedBantuan="selectedBantuan" />
              <div class="form-group">
                <label for>Jumlah Donasi (Rp)</label>
                <input type="number" v-model="jumlah" class="form-control" />
              </div>
              <div class="form-group">
                <button
                  class="btn btn-primary btn-sm"
                  @click="submitDonasi"
                  :disabled="isLoading"
                >{{isLoading ? "Loading...." : "Donasi!"}}</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Donasi Terkumpul</h3>
            </div>
            <div class="card-body">
              <list-transaksi />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Donatur from "./components/Donatur";
import Clients from "./components/Clients";
import Transaksi from "./components/Transaksi";
export default {
  data() {
    return {
      donatur: "",
      bantuan: "",
      jumlah: 0
    };
  },
  computed: {
    isLoading() {
      // get data from root vuex (store.js)
      // state SETELAH .state. langsung menyebutkan nama statenya karena tidak masuk kedalam module
      return this.$store.state.isLoading;
    }
  },
  methods: {
    // handle emit dari component donatur
    selectedDonatur(val) {
      this.donatur = val;
    },
    // handle emit dari component clients
    selectedBantuan(val) {
      console.log(val);
      this.bantuan = val;
    },
    submitDonasi() {
      // dispatch berguna untuk memanggil fungsi yang ada di action
      // fungsinya save_donasi dan berada didalam module transaksi
      // modulename/functionname
      this.$store.dispatch("transaksi/save_donasi", {
        // mengirim 4 parameter yang akan di push ke dalam lists array => listTransaksi
        id: Math.random()
          .toString(36)
          .substring(7),
        donatur: this.donatur,
        bantuan: this.bantuan,
        jumlah: this.jumlah
      });
    }
  },
  components: {
    "list-donatur": Donatur,
    "lokasi-bencana": Clients,
    "list-transaksi": Transaksi
  }
};
</script>