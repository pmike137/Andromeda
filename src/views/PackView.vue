<template>
  <div class="flex flex-col justify-center px-14">
    <div class="flex justify-between items-center w-full mb-8">
      <div class="absolute top-[145px] left-[40px]">
        <IconBack />
      </div>
      <div class="flex">
        <IconPackPack class="mr-4" />
        <div class="flex flex-col">
          <span class="text-2xl font-bold">Остатки</span>

          <span class="text-sm text-gray-400"
            >Уточните наличие остатков товара на складах
          </span>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col w-full bg-white px-[70px] py-7 space-y-5 rounded-2xl mb-[5px]"
    >
      <div
        class="flex flex-col sm:flex-row justify-between space-x-7 items-end"
      >
        <div class="w-full">
          <label for="name-of-position" class="font-bold text-lg">
            Товар
          </label>
          <select
            id="name-of-position"
            placeholder="Выберите товар"
            class="w-full h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
          >
            <option selected>Выберите товар...</option>
            <option>Щебень Белогорский</option>
            <option>Щебень Ароматное</option>
            <option>Щебень Скалистое</option>
            <option>Песок Донузлав</option>
            <option>Песок Орешники</option>
            <option>Грунт</option>
          </select>
        </div>
        <div class="w-full">
          <select
            id="size-of-position"
            class="w-full h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
          >
            <option selected>Тип</option>
            <option>5-20</option>
            <option>20-40</option>
            <option>40-70</option>
          </select>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col w-full bg-white px-[70px] py-7 space-y-5 rounded-2xl"
    >
      <div
        class="flex flex-col sm:flex-row justify-between space-x-7 items-end"
      >
        <div class="w-full">
          <label for="name-of-position" class="font-bold text-lg">
            Мешки
          </label>
          <input
            v-model="ValueOfProduct"
            inputmode="numeric"
            oninput="this.value = this.value.replace(/[^0-9]/g,'')"
            id="name-of-position"
            placeholder="Например: 200"
            class="pl-[15px] w-full h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 text-end pr-5 focus:ring-mainHoverColor focus:border-mainHoverColor"
          />
        </div>
        <div class="w-full">
          <input
            id="name-of-position"
            inputmode="numeric"
            disabled
            oninput="this.value = this.value.replace(/[^0-9]/g,'')"
            :value="ValueOfProduct * 2"
            class="pl-[15px] w-full h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 text-end pr-5 focus:ring-mainHoverColor focus:border-mainHoverColor"
          />
        </div>
        <span
          class="font-bold whitespace-nowrap text-2xl text-mainColor hover:text-mainHoverColor"
          >- т.</span
        >
        <button
          class="w-full h-[40px] rounded-xl text-center text-white bg-mainColor hover:bg-mainHoverColor"
        >
          Подтвердить
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { IconBack, IconPackPack, IconBtnAdd } from "../components";

const ValueOfProduct = ref("");
</script>
<style scoped></style>
