<template>
  <div class="flex flex-col justify-center">
    <div class="flex justify-between items-center w-full mb-8 px-14">
      <div class="absolute top-[145px] left-[40px]">
        <IconBack />
      </div>
      <div class="flex">
        <IconStockStock class="mr-4" />
        <div class="flex flex-col">
          <span class="text-2xl font-bold">Остатки</span>

          <span class="text-sm text-gray-400"
            >Уточните наличие остатков товара на складах
          </span>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col w-full bg-white px-[70px] py-7 space-y-5 rounded-t-2xl mb-[5px]"
    >
      <div class="w-full">
        <label for="name-of-product" class="block mb-2 font-bold"
          >Поиск товара</label
        ><input
          id="name-of-product"
          type="text"
          placeholder="Введите наименование товара"
          class="w-full h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        />
      </div>
    </div>
    <div
      class="flex flex-col w-full h-20 bg-white px-[70px] py-7 space-y-5 mb-[5px]"
    >
      <span class="font-bold">Список товаров (32)</span>
    </div>
    <div
      class="flex flex-col w-full bg-white py-7 space-y-5 mb-[5px] overflow-x-auto"
    >
      <table class="w-full text-sm">
        <thead class="text-xs uppercase cursor-default">
          <tr class="">
            <th scope="col" class="py-4 text-mainColor">№</th>
            <th scope="col" class="w-2/5 py-4 text-mainColor">Наименование</th>
            <th scope="col" class="py-4 text-mainColor">Тип</th>
            <th scope="col" class="py-4 text-mainColor">Кол-во</th>
            <th scope="col" class="py-4 text-mainColor">Себестоимость</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center cursor-pointe">
            <th scope="rowgroup" class="py-4">1</th>
            <td>Щебень Белогорский</td>
            <td>5-20</td>
            <td>300 тонн</td>
            <td>400</td>
          </tr>
          <tr class="text-center cursor-pointer">
            <th scope="rowgroup" class="py-4">2</th>
            <td>Щебень Белогорский</td>
            <td>20-40</td>
            <td>300 тонн</td>
            <td>400</td>
          </tr>
          <tr class="text-center cursor-pointer">
            <th scope="rowgroup" class="py-4"></th>
            <td>Щебень Белогорский</td>
            <td>40-70</td>
            <td>300 тонн</td>
            <td>400</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="flex flex-col w-full h-[30px] bg-white px-[70px] py-7 space-y-5 rounded-b-2xl"
    ></div>
  </div>
</template>

<script setup>
import { IconStockStock, IconBack } from "../components";
</script>
