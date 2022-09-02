<template>
  <NumOfOrder />
  <div class="w-full flex flex-col justify-center items-center">
    <div class="flex justify-center z-0 mb-6 w-full group">
      <label for="NameOfClient" class="mr-3 flex justify-center items-center">
        Выберите клента</label
      >
      <div class="">
        <input
          type="text"
          name="NameOfClient"
          class="rounded-l-lg border-none text-right hover:ring-red-500 hover:border-red-500 cursor-text"
        />
        <select
          name=""
          id=""
          class="border-slate-200 ring-red-500 border-opacity-70 rounded-r-lg hover:ring-red-500 hover:border-red-500 cursor-pointer"
        ></select>
      </div>
    </div>
    <div
      class="flex justify-center py-3 px-6 z-0 mb-0 border-b-2 border-whites w-full group rounded-t-lg bg-slate-400 font-bold text-lg"
    >
      Чек покупки
    </div>
    <div
      class="h-[250px] flex justify-center z-0 mt-0 w-full group overflow-x-auto relative"
    >
      <table
        class="w-full text-base text-black rounded-lg grid-cols-3 border-1 border-black"
      >
        <thead class="sticky top-0 text-base bg-slate-400 rounded-lg">
          <tr class="text-center uppercase">
            <th class="w-1/2 py-3 px-6 text-sm">Наменование</th>
            <th class="py-3 px-6 text-sm">Кол-во</th>
            <th class="py-3 px-6 text-sm">Цена</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b-[1px] border-slate-400 rounded-x-md hover:bg-slate-400 hover:bg-opacity-50 cursor-pointer"
          >
            <th class="py-3 px-6 text-sm font-normal">
              Щебень Белогорский 10-20
            </th>
            <th class="py-3 px-6 text-sm text-right font-normal">100</th>
            <th class="py-3 px-6 text-sm text-right font-normal">2000,00</th>
          </tr>
          <tr
            class="border-b-[1px] border-slate-400 rounded-x-md hover:bg-slate-400 hover:bg-opacity-50 cursor-pointer"
          >
            <th class="py-3 px-6 text-sm font-normal">
              Щебень Белогорский 10-20
            </th>
            <th class="py-3 px-6 text-sm text-right font-normal">100</th>
            <th class="py-3 px-6 text-sm text-right font-normal">2000,00</th>
          </tr>
          <tr
            class="border-b-[1px] border-slate-400 rounded-x-md hover:bg-slate-400 hover:bg-opacity-50 cursor-pointer"
          >
            <th class="py-3 px-6 text-sm font-normal">
              Щебень Белогорский 10-20
            </th>
            <th class="py-3 px-6 text-sm text-right font-normal">100</th>
            <th class="py-3 px-6 text-sm text-right font-normal">2000,00</th>
          </tr>
          <tr
            class="border-b-[1px] border-slate-400 rounded-x-md hover:bg-slate-400 hover:bg-opacity-50 cursor-pointer"
          >
            <th class="py-3 px-6 text-sm font-normal">
              Щебень Белогорский 10-20
            </th>
            <th class="py-3 px-6 text-sm text-right font-normal">100</th>
            <th class="py-3 px-6 text-sm text-right font-normal">2000,00</th>
          </tr>
          <div></div>
        </tbody>
      </table>
    </div>
    <div
      class="h-[10px] z-0 mb-3 border-t-2 border-whites w-full group rounded-b-lg bg-slate-400 font-bold text-lg"
    ></div>
    <div>
      <button
        class="mb-6 py-3 px-6 rounded-lg bg-red-400 border-1 hover:bg-red-500"
      >
        Добавить
      </button>
    </div>
    <div class="w-full flex justify-center items-center mb-6">
      <label for="Adress" class="mr-3 w-1/6 flex justify-center items-center"
        >Адресс доставки:</label
      >
      <input
        type="text"
        name="Adress"
        class="w-full rounded-lg border-none text-right hover:ring-red-500 hover:border-red-500 cursor-text"
      />
    </div>
    <div class="w-full flex justify-between items-center mb-6">
      <label for="Driver" class="mr-3 w-1/6 flex justify-center items-center"
        >Перевозчик (-и):</label
      >
      <input
        type="text"
        name="Driver"
        class="w-1/2 mr-10 rounded-lg border-none text-right hover:ring-red-500 hover:border-red-500 cursor-text"
      />

      <label for="PriceOfDriver" class="mr-3 flex justify-center items-center"
        >Стоимость доставки:</label
      >
      <input
        type="text"
        name="PriceOfDriver"
        class="rounded-lg border-none text-right hover:ring-red-500 hover:border-red-500 cursor-text"
      />
    </div>
    <div class="w-full flex justify-end items-center mb-6">
      <label for="ValuePrice" class="mr-3 flex justify-center items-center"
        >Итого:</label
      >
      <input
        type="text"
        name="ValuePrice"
        class="rounded-lg border-none text-right font-bold bg-slate-200 text-slate-500"
        placeholder="2222,00"
        disabled
      />
    </div>
    <div class="flex justify-end items-center mb-6">
      <button class="py-3 px-6 bg-red-600 hover:bg-red-700 rounded-lg">
        Провести сделку
      </button>
    </div>
  </div>
</template>
<script setup>
import NumOfOrder from "./NumOfOrder.vue";
</script>
<style scoped></style>
