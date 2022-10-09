<template>
  <div
    class="flex flex-col w-full bg-white px-3 lg:px-[70px] py-7 space-y-5 rounded-2xl"
  >
    <div class="flex justify-between space-x-7 items-end">
      <div class="w-full">
        <label for="name-of-position" class="font-bold text-lg"> Клиент </label>
        <select
          id="name-of-position"
          placeholder="Выберите товар"
          class="w-full h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        >
          <option selected>Выберите Клиента...</option>
          <option>Щебень Белогорский</option>
          <option>Щебень Ароматное</option>
          <option>Щебень Скалистое</option>
          <option>Песок Донузлав</option>
          <option>Песок Орешники</option>
          <option>Грунт</option>
        </select>
      </div>
      <div class="flex w-[40px] h-[40px]"><IconBtnAdd class="w-10" /></div>
    </div>
  </div>
  <div
    class="flex flex-col w-full bg-white px-[70px] py-7 space-y-5 rounded-2xl mt-10"
  >
    <div class="flex justify-between space-x-7 items-end">
      <div><span class="font-bold text-lg">Чек покупки</span></div>
      <div><IconBtnAdd /></div>
    </div>
  </div>
</template>
<script setup>
import { IconBtnAdd } from "../";
</script>
<style scoped></style>
