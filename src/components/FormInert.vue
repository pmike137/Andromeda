<template>
  <NumOfOrder />
  <div class="flex justify-center items-center">
    <form class="w-3/4">
      <div class="flex justify-between z-0 mb-6 w-full group">
        <select
          id="name-of-position"
          class="w-[70%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Выберите товар...</option>
          <option>Щебень Белогорский</option>
          <option>Щебень Ароматное</option>
          <option>Щебень Скалистое</option>
          <option>Песок Донузлав</option>
          <option>Песок Орешники</option>
          <option>Грунт</option>
        </select>
        <select
          id="size-of-position"
          class="w-[25%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Тип</option>
          <option>5-20</option>
          <option>20-40</option>
          <option>40-70</option>
        </select>
      </div>
      <div class="flex justify-between z-0 mb-6 w-full group">
        <label
          for="amount"
          class="flex justify-center items-center w-24 sm:text-xs text-center"
          >Кол-во</label
        >
        <input
          type="text"
          id="amount"
          class="block p-2 w-1/4 sm:text-xs rounded-lg border-none focus:border focus:border-red-500 focus:ring-red-500"
        />
        <select
          name=""
          id=""
          class="w-24 h-9 rounded-lg border-none text-end focus:border-red-500 focus:ring-red-500"
        >
          <option>+</option>
          <option>-</option>
        </select>
        <input
          type="text"
          id="amount"
          class="block p-2 w-1/4 sm:text-xs rounded-lg border-none focus:ring-red-500"
        />
      </div>
      <div class="flex justify-end z-0 mb-6 w-full group">
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
        <div id="dropdownSearch" class="hidden z-10 bg-white rounded shadow">
          <div p-3>
            <div class="relative">
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                Привет
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between z-0 mb-6 w-full group">
        <label
          for="price-unit"
          class="flex justify-center items-center w-24 sm:text-xs text-center"
          >Цена за ед. (номинал)</label
        >
        <input
          type="text"
          id="price"
          class="block p-2 w-1/4 h-9 sm:text-xs rounded-lg border-none focus:border focus:border-red-500 focus:ring-red-500"
        />
        <label
          for="price-logistics"
          class="flex justify-center items-center w-24 sm:text-xs text-center"
          >Цена за ед. (факт)</label
        >
        <input
          type="text"
          id="price-logistics"
          class="block p-2 w-1/4 h-9 sm:text-xs rounded-lg border-none focus:ring-red-500 focus:border-red-500"
        />
      </div>
      <div class="flex justify-end z-0 mb-6 w-full group">
        <input
          name="type-cash"
          id="type-cash-1"
          type="radio"
          class="w-4 h-4 mr-2 text-red-500 bg-gray-100 border-gray-300 focus:ring-red-500 focus:border-red-500 focuc:ring-2"
        />
        <label for="type-cash-1" class="mr-3 text-sm font-medium text-gray-900"
          >Нал</label
        >
        <input
          name="type-cash"
          checked
          id="type-cash-2"
          type="radio"
          class="w-4 h-4 mr-2 text-red-500 bg-gray-100 border-gray-300 focus:ring-red-500 focus:border-red-500 focus:ring-2"
        />
        <label for="type-cash-2" class="mr-3 text-sm font-medium text-gray-900"
          >Безнал</label
        >
      </div>
      <div class="flex justify-center z-0 mb-6 w-full group">
        <button
          type="button"
          class="h-9 w-[30%] rounded-lg bg-red-400 hover:bg-red-600"
        >
          Подтвердить
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import NumOfOrder from "../components/NumOfOrder.vue";
import VueMultiselect from "vue-multiselect";
import { ref } from "vue";

const customselected = ref(null);
const customoptions = ref([
  { name: "Зия", car: "Зил" },
  { name: "Сервер", car: "Зил" },
  { name: "Решат", car: "Зил" },
]);

// export default {
//   props: {
//     drivers: {
//       type: Array,
//       default: () => [],
//     },
//   },
//   components: {
//     Multiselect,
//   },
//   data() {
//     return {
//       drivers_name: "",
//     };
//   },
//   methods: {
//     onSearchDrivers_name() {
//       console.log("onSearchDrivers_name");
//     },
//     onSlecetedDrivers() {
//       console.log("onSlecetedDrivers");
//     },
//   },
// };
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
