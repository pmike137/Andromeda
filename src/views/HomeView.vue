<template>
  <div class="">
    <div
      class="flex flex-col sm:flex-row justify-around items-center px-4 sm:h-72 space-x-3 mb-3"
    >
      <div
        @mouseover="onHover('coming')"
        @mouseleave="onHover(null)"
        class="bg-white flex justify-center items-center w-full h-full py-3 rounded-2xl flex-col rounded-b-lg relative cursor-pointer group hover:shadow-lg hover:shadow-[#F05252]/[.12] default-transition"
      >
        <router-link
          to="/coming"
          class="absolute w-full h-full t-0 l-0"
        ></router-link>
        <div class="absolute left-7 top-7 z-0">
          <IconHomeComingMini
            :isActive="activeIcon === 'coming' ? true : false"
          />
        </div>
        <div class="absolute left-7 bottom-14 z-1">
          <span
            class="font-bold text-3xl text-black group-hover:text-mainColor default-transition"
            >Приход</span
          >
        </div>
        <div class="absolute left-7 bottom-7 z-1">
          <span
            class="text-md text-black text-opacity-50 group-hover:text-mainColor default-transition"
            >Поставить на приход товар
          </span>
        </div>
        <div class="absolute right-0 bottom-0 z-0">
          <IconHomeComing />
        </div>
      </div>

      <div
        @mouseover="onHover('order')"
        @mouseleave="onHover(null)"
        class="bg-white flex justify-center items-center w-full h-full py-3 rounded-2xl flex-col rounded-b-lg relative cursor-pointer group hover:shadow-lg hover:shadow-[#F05252]/[.12] default-transition"
      >
        <router-link
          to="/order"
          class="absolute w-full h-full t-0 l-0"
        ></router-link>
        <div class="absolute left-7 top-7 z-0">
          <IconHomeOrderMini
            :isActive="activeIcon === 'order' ? true : false"
          />
        </div>
        <div class="absolute left-7 bottom-14 z-1">
          <span class="font-bold text-3xl text-black group-hover:text-mainColor"
            >Сделка</span
          >
        </div>
        <div class="absolute left-7 bottom-7 z-1">
          <span
            class="text-md text-black text-opacity-50 group-hover:text-mainColor"
            >Провести сделку
          </span>
        </div>
        <div class="absolute right-0 bottom-0 z-0">
          <IconHomeOrder />
        </div>
      </div>
      <div
        @mouseover="onHover('pack')"
        @mouseleave="onHover(null)"
        class="bg-white flex justify-center items-center w-full h-full py-3 rounded-2xl flex-col rounded-b-lg relative cursor-pointer group hover:shadow-lg hover:shadow-[#F05252]/[.12] default-transition"
      >
        <router-link
          to="/stock"
          class="absolute w-full h-full t-0 l-0"
        ></router-link>
        <div class="absolute left-7 top-7 z-0">
          <IconHomeStockMini :isActive="activeIcon === 'pack' ? true : false" />
        </div>
        <div class="absolute left-7 bottom-14 z-1">
          <span class="font-bold text-3xl text-black group-hover:text-mainColor"
            >Остатки</span
          >
        </div>
        <div class="absolute left-7 bottom-7 z-1">
          <span
            class="text-md text-black text-opacity-50 group-hover:text-mainColor"
            >Посмотреть наличие товара на складе
          </span>
        </div>
        <div class="absolute right-0 bottom-0 z-0">
          <IconHomeStock />
        </div>
      </div>
    </div>
    <div
      class="flex justify-center items-center w-full sm:flex-row px-4 sm:h-72 space-x-3"
    >
      <div
        class="bg-white w-full h-full rounded-2xl flex-col rounded-b-lg relative cursor-pointer group hover:shadow-lg hover:shadow-[#F05252]/[.12] default-transition"
      >
        <div class="mt-12 h-20 flex justify-center items-center">
          <IconHomePrice />
        </div>
        <div class="ml-7 mt-12">
          <span class="font-bold text-2xl text-black group-hover:text-mainColor"
            >Прайс</span
          >
        </div>
        <div class="ml-7">
          <span
            class="text-sm text-black text-opacity-50 group-hover:text-mainColor"
            >Редактировать прайс
          </span>
        </div>
      </div>
      <div
        class="bg-white w-full h-full rounded-2xl flex-col rounded-b-lg relative cursor-pointer group hover:shadow-lg hover:shadow-[#F05252]/[.12] default-transition"
      >
        <div class="mt-12 h-20 flex justify-center items-center">
          <IconHomePack />
        </div>
        <div class="ml-7 mt-12">
          <span class="font-bold text-2xl text-black group-hover:text-mainColor"
            >Фасовка</span
          >
        </div>
        <div class="ml-7">
          <span
            class="text-sm text-black text-opacity-50 group-hover:text-mainColor"
            >Конвертация мешков
          </span>
        </div>
      </div>
      <div
        class="bg-white w-full h-full rounded-2xl flex-col rounded-b-lg relative cursor-pointer group hover:shadow-lg hover:shadow-[#F05252]/[.12] default-transition"
      >
        <div class="mt-12 h-20 flex justify-center items-center">
          <IconHomeDB />
        </div>
        <div class="ml-7 mt-12">
          <span class="font-bold text-2xl text-black group-hover:text-mainColor"
            >БД</span
          >
        </div>
        <div class="ml-7">
          <span
            class="text-sm text-black text-opacity-50 group-hover:text-mainColor"
            >Базы данных
          </span>
        </div>
      </div>
      <div
        class="bg-white w-full h-full rounded-2xl flex-col rounded-b-lg relative cursor-pointer group hover:shadow-lg hover:shadow-[#F05252]/[.12] default-transition"
      >
        <div class="mt-12 h-20 flex justify-center items-center">
          <IconHomeFinance />
        </div>
        <div class="ml-7 mt-12">
          <span class="font-bold text-2xl text-black group-hover:text-mainColor"
            >Финансы</span
          >
        </div>
        <div class="ml-7">
          <span
            class="text-sm text-black text-opacity-50 group-hover:text-mainColor"
            >Аналитика показателей
          </span>
        </div>
      </div>
      <div
        class="bg-white w-full h-full rounded-2xl flex-col rounded-b-lg cursor-not-allowed relative group default-transition"
      >
        <div class="absolute left-7 top-7 z-1">
          <IconHomeInDev />
        </div>
        <div class="mt-12 h-20 flex justify-center items-center">
          <IconHome1C />
        </div>
        <div class="ml-7 mt-12">
          <span class="font-bold text-2xl text-black">1C</span>
        </div>
        <div class="ml-7">
          <span class="text-sm text-black text-opacity-50"
            >Импорт данных 1С
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {
  IconHomeComing,
  IconHomeComingMini,
  IconHomeOrder,
  IconHomeOrderMini,
  IconHomeStock,
  IconHomeStockMini,
  IconHomePrice,
  IconHomePack,
  IconHomeDB,
  IconHomeFinance,
  IconHome1C,
  IconHomeInDev,
} from "../components";

const activeIcon = ref(null);
const onHover = (iconActive) => {
  activeIcon.value = iconActive;
};
</script>
