<template>
  <div
    class="flex flex-col w-full bg-white px-[70px] py-7 space-y-5 rounded-2xl"
  >
    <div class="flex flex-col sm:flex-row justify-between space-x-7 items-end">
      <div class="w-full">
        <label for="drivers" class="font-bold text-lg block"> Поставщик </label>
        <select
          id="drivers"
          type="text"
          class="w-[50%] h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        ></select>
      </div>
    </div>
    <div class="flex flex-col justify-between">
      <span class="font-bold text-lg">Товар</span>
      <span class="text-opacity-50 text-sm">Введите кол-во товара (шт.)</span>
      <div class="h-[100px] w-full flex justify-between items-center space-x-1">
        <div
          class="h-full flex flex-col items-center rounded-lg border-[#E7E7E7] border-[1px] py-3 hover:border-mainColor cursor-pointer"
        >
          <input
            v-model="size50x200"
            type="text"
            class="pl-[15px] w-full text-center border-0 text-2xl ring-mainColor border-none hover:ring-mainColor cursor-pointer text-mainColor"
            placeholder="0"
          />
          <span class="text-opacity-50">50x200</span>
        </div>
        <div
          class="h-full flex flex-col items-center rounded-lg border-[#E7E7E7] border-[1px] py-3 hover:border-mainColor cursor-pointer"
        >
          <input
            v-model="size100x100"
            type="text"
            class="w-full text-center border-0 text-2xl ring-mainColor border-mainColor hover:ring-mainColor cursor-pointer text-mainColor"
            placeholder="0"
          />
          <span class="text-opacity-50">100x100</span>
        </div>
        <div
          class="h-full flex flex-col items-center rounded-lg border-[#E7E7E7] border-[1px] py-3 hover:border-mainColor cursor-pointer"
        >
          <input
            v-model="size25x100"
            type="text"
            class="w-full text-center border-0 text-2xl ring-mainColor border-mainColor hover:ring-mainColor cursor-pointer text-mainColor"
            placeholder="0"
          />
          <span class="text-opacity-50">25x100</span>
        </div>
        <div
          class="h-full flex flex-col items-center rounded-lg border-[#E7E7E7] border-[1px] py-3 hover:border-mainColor cursor-pointer"
        >
          <input
            v-model="size25x150"
            type="text"
            class="w-full text-center border-0 text-2xl ring-mainColor border-mainColor hover:ring-mainColor cursor-pointer text-mainColor"
            placeholder="0"
          />
          <span class="text-opacity-50">25x150</span>
        </div>
        <div
          class="h-full flex flex-col items-center rounded-lg border-[#E7E7E7] border-[1px] py-3 hover:border-mainColor cursor-pointer"
        >
          <input
            v-model="size50x100"
            type="text"
            class="w-full text-center border-0 text-2xl ring-mainColor border-mainColor hover:ring-mainColor cursor-pointer text-mainColor"
            placeholder="0"
          />
          <span class="text-opacity-50">50x100</span>
        </div>
        <div
          class="h-full flex flex-col items-center rounded-lg border-[#E7E7E7] border-[1px] py-3 hover:border-mainColor cursor-pointer"
        >
          <input
            v-model="size50x150"
            type="text"
            class="w-full text-center border-0 text-2xl ring-mainColor border-mainColor hover:ring-mainColor cursor-pointer text-mainColor"
            placeholder="0"
          />
          <span class="text-opacity-50">50x150</span>
        </div>
        <div
          class="h-full flex flex-col items-center rounded-lg border-[#E7E7E7] border-[1px] py-3 hover:border-mainColor cursor-pointer"
        >
          <input
            v-model="size50x50x3"
            type="text"
            class="w-full text-center border-0 text-2xl ring-mainColor border-mainColor hover:ring-mainColor cursor-pointer text-mainColor"
            placeholder="0"
          />
          <span class="text-opacity-50">50x50x3</span>
        </div>
        <div
          class="h-full flex flex-col items-center rounded-lg border-[#E7E7E7] border-[1px] py-3 hover:border-mainColor cursor-pointer"
        >
          <input
            v-model="size50x50x6"
            type="text"
            class="w-full text-center border-0 text-2xl ring-mainColor border-mainColor hover:ring-mainColor cursor-pointer text-mainColor"
            placeholder="0"
          />
          <span class="text-opacity-50">50x50x6</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-between space-x-7 items-end">
      <div class="w-full">
        <label for="drivers" class="font-bold text-lg block">
          Перевозчики
        </label>
        <select
          id="drivers"
          type="text"
          class="w-[50%] h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        ></select>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-between space-x-7 items-end">
      <div class="w-full">
        <label for="drivers" class="font-bold text-lg block">
          Цена (руб./куб.)
        </label>
        <input
          v-model="PriceOfProduct"
          inputmode="numeric"
          oninput="this.value = this.value.replace(/[^0-9]/g,'')"
          id="drivers"
          type="text"
          class="w-[50%] h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        />
      </div>
    </div>
    <div>
      <RadioCash />
    </div>
    <div class="flex justify-center items-center">
      <span class="font-bold text-3xl text-mainColor">
        {{
          PriceOfProduct * size50x200 * 0.06 +
          PriceOfProduct * size100x100 * 0.06 +
          PriceOfProduct * size25x100 * 0.015 +
          PriceOfProduct * size25x150 * 0.0225 +
          PriceOfProduct * size50x100 * 0.03 +
          PriceOfProduct * size50x150 * 0.045 +
          PriceOfProduct * size50x50x3 * 0.0075 +
          PriceOfProduct * size50x50x6 * 0.015
        }}
        руб.</span
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

const PriceOfProduct = ref("");
const size50x200 = ref("");
const size100x100 = ref("");
const size25x100 = ref("");
const size25x150 = ref("");
const size50x100 = ref("");
const size50x150 = ref("");
const size50x50x3 = ref("");
const size50x50x6 = ref("");
</script>
<style scoped></style>
