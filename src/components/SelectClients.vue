<template>
  <div class="w-full">
    <v-select :options="['raz', 'dva']" />
  </div>
</template>
<script setup>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
</script>
<style src="https://unpkg.com/vue-select@latest"></style>
<style>
.vs__dropdown-toggle {
  height: 40px !important;
  background-color: white !important;
  border-radius: 8px !important;
}
</style>
