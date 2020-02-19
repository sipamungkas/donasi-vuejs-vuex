<template>
  <div>
    <div class="form-group">
      <label for>Jenis Bantuan</label>
      <select @change="$emit('selectedBantuan',$event.target.value)" class="form-control">
        <option value>Pilih Bantuan</option>
        <option v-for="(row,index) in listBantuan" :key="index+1" :value="row.name">{{row.name}}</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    listBantuan() {
      return this.$store.state.clients.listBantuan;
    }
  }
};
</script>