<template>
  <div
    class="h-[600px] overflow-x-auto relative border-b-[1px] border-slate-600 mb-0"
  >
    <table
      class="w-full text-sm text-center text-blue-100 dark:text-blue-100 relative"
    >
      <thead
        class="sticky top-0 text-xs text-white uppercase bg-slate-600 dark:text-white"
      >
        <tr>
          <th scope="col" class="w-2/5 py-3 px-6">Наименование</th>
          <th scope="col" class="w-1/5 py-3 px-6">Категория</th>
          <th scope="col" class="w-1/5 py-3 px-6">Цена (за тонну)</th>
          <th scope="col" class="w-1/5 py-3 px-6">Цена (за мешок)</th>
          <th scope="col" class="w-1/5 py-3 px-6"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-slate-300 text-black border-b border-gray-200">
          <th
            scope="row"
            class="py-1 px-6 font-medium whitespace-nowrap dark:text-blue-100"
          >
            Щебень Белогорский
          </th>
          <td class="py-1 px-6 text-right">5-10</td>
          <td class="py-1 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>

          <td class="px-6 text-right">
            <input
              id="inputFirst"
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>
          <td class="h-full w-full">
            <button
              @click="ButtonClick"
              class="h-5 w-full bg-red-100 hover:bg-red-200 cursor-pointer z-10"
            ></button>
          </td>
        </tr>
        <tr class="bg-slate-300 text-black border-b border-gray-200">
          <th
            scope="row"
            class="py-2 px-6 font-medium whitespace-nowrap dark:text-blue-100"
          >
            Щебень Белогорский
          </th>
          <td class="py-2 px-6 text-right">10-20</td>
          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>

          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>
        </tr>
        <tr class="bg-slate-300 text-black border-b border-gray-200">
          <th
            scope="row"
            class="py-2 px-6 font-medium whitespace-nowrap dark:text-blue-100"
          >
            Щебень Белогорский
          </th>
          <td class="py-2 px-6 text-right">20-40</td>
          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>

          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>
        </tr>
        <tr class="bg-slate-300 text-black border-b border-gray-200">
          <th
            scope="row"
            class="py-2 px-6 font-medium whitespace-nowrap dark:text-blue-100"
          >
            Щебень Белогорский
          </th>
          <td class="py-2 px-6 text-right">20-40</td>
          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>

          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>
        </tr>
        <tr class="bg-slate-300 text-black border-b border-gray-200">
          <th
            scope="row"
            class="py-2 px-6 font-medium whitespace-nowrap dark:text-blue-100"
          >
            Щебень Белогорский
          </th>
          <td class="py-2 px-6 text-right">20-40</td>
          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>

          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>
        </tr>
        <tr class="bg-slate-300 text-black border-b border-gray-200">
          <th
            scope="row"
            class="py-2 px-6 font-medium whitespace-nowrap dark:text-blue-100"
          >
            Щебень Белогорский
          </th>
          <td class="py-2 px-6 text-right">20-40</td>
          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>

          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>
        </tr>
        <tr class="bg-slate-300 text-black border-b border-gray-200">
          <th
            scope="row"
            class="py-2 px-6 font-medium whitespace-nowrap dark:text-blue-100"
          >
            Щебень Белогорский
          </th>
          <td class="py-2 px-6 text-right">20-40</td>
          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>

          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>
        </tr>
        <tr class="bg-slate-300 text-black border-b border-gray-200">
          <th
            scope="row"
            class="py-2 px-6 font-medium whitespace-nowrap dark:text-blue-100"
          >
            Щебень Белогорский
          </th>
          <td class="py-2 px-6 text-right">20-40</td>
          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>

          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>
        </tr>
        <tr class="bg-slate-300 text-black border-b border-gray-200">
          <th
            scope="row"
            class="py-2 px-6 font-medium whitespace-nowrap dark:text-blue-100"
          >
            Щебень Белогорский
          </th>
          <td class="py-2 px-6 text-right">20-40</td>
          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>

          <td class="py-2 px-6 text-right">
            <input
              type="text"
              class="border-0 rounded-lg bg-slate-200 ring-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="flex justify-end items-center bg-slate-300 py-7">
    <button
      class="px-6 py-3 bg-red-300 hover:bg-red-500 border-0 rounded-lg mr-7"
    >
      Ссылка
    </button>

    <button
      class="px-6 py-3 bg-red-300 hover:bg-red-500 border-0 rounded-lg mr-7"
    >
      Печать
    </button>
    <div class="openModal">
      <button
        @click="() => ToggleModal('buttonTrigger')"
        class="mr-7 px-6 py-3 bg-red-300 hover:bg-red-500 border-0 rounded-lg"
      >
        Утвердить
      </button>
    </div>
    <AcceptModal
      v-if="modalTriggers.buttonTrigger"
      :ToggleModal="() => ToggleModal('buttonTrigger')"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import AcceptModal from "../components/AcceptModal.vue";

const modalTriggers = ref({
  buttonTrigger: false,
});

const ToggleModal = (trigger) => {
  modalTriggers.value[trigger] = !modalTriggers.value[trigger];
};

function ButtonClick() {
  var but = document.getElementById("inputFirst");
  but.disabled = !but.disabled;
}
</script>

<style scoped></style>
