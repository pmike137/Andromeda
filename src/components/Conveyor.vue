<template>
  <VueMultiselect
    v-model="customselected"
    :options="customoptions"
    :multiple="true"
    :close-on-select="true"
    :clear-on-select="false"
    :preserve-search="true"
    placeholder="Выберите перевозчика (-ов)"
    label="name"
    track-by="name"
    :preselect-first="false"
  />
</template>
<script setup>
import VueMultiselect from "vue-multiselect";
import { ref } from "vue";

const customselected = ref(null);
const customoptions = ref([
  { name: "Зия", car: "Зил" },
  { name: "Сервер", car: "Зил" },
  { name: "Решат", car: "Зил" },
]);
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style>
.multiselect__tag {
  background: #f05252 !important;
}
.multiselect__tags {
  border-radius: 8px !important;
  border: 0px !important;
}
.multiselect__placeholder {
  color: black !important;
}
</style>
