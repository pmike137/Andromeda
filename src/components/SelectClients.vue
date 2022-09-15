<template>
  <div class="w-full">
    <v-select :options="DBClients" />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import vSelect from "vue-select";
// import axios from "axios";
import "vue-select/dist/vue-select.css";

const DBClients = [];

// onMounted(() => {
//   axios.get("");
// });
</script>
<style src="https://unpkg.com/vue-select@latest"></style>
<style>
.vs__dropdown-toggle {
  height: 40px !important;
  background-color: white !important;
  border-radius: 8px !important;
}
</style>
