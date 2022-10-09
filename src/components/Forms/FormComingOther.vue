<template>
  <div
    class="flex flex-col w-full bg-white px-3 lg:px-[70px] py-7 space-y-5 rounded-2xl"
  >
    <div class="flex flex-col sm:flex-row justify-between space-x-7 items-end">
      <div class="w-full">
        <label for="drivers" class="font-bold text-lg block"> Описание </label>
        <input
          id="drivers"
          placeholder="Опишите характеристики покупки/товара/сделки"
          type="text"
          class="w-full h-[100px] border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        />
      </div>
    </div>
    <div
      class="flex flex-col lg:flex-row justify-between lg:space-x-7 items-start"
    >
      <div class="w-full">
        <label for="value" class="font-bold text-lg">
          Количество товара (при наличии)
        </label>
        <input
          inputmode="numeric"
          oninput="this.value = this.value.replace(/[^0-9]/g,'')"
          v-model="ValueOfProduct"
          id="value"
          placeholder="Например: 200"
          class="pl-[15px] w-full h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        />
      </div>
      <div class="w-full">
        <label for="price" class="font-bold text-lg"> Цена </label>
        <input
          inputmode="numeric"
          oninput="this.value = this.value.replace(/[^0-9]/g,'')"
          v-model="PriceOfProduct"
          id="price"
          placeholder="Например: 200"
          class="pl-[15px] w-full h-10 mb-5 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        />
        <RadioCash />
      </div>
    </div>
    <div class="flex justify-center items-end h-[80px]">
      <span class="font-bold text-lg">Итоговая стоимость</span>
    </div>
    <div class="flex justify-center items-center">
      <span class="font-bold text-3xl text-mainColor">
        {{ ValueOfProduct * PriceOfProduct }} руб.</span
      >
    </div>
    <div
      class="flex flex-col sm:flex-row justify-center space-x-7 items-center"
    >
      <button
        class="w-[40%] h-[50px] rounded-xl text-center text-white bg-mainColor hover:bg-mainHoverColor"
      >
        Подтвердить
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { RadioCash } from "../";

const ValueOfProduct = ref("");
const PriceOfProduct = ref("");
</script>
<style scoped></style>
