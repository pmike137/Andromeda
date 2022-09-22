<template>
  <div class="flex flex-col justify-center items-center">
    <div
      class="flex flex-col w-full justify-center items-center space-x-3 space-y-[5px] mb-3 sm:px-4 sm:h-72 sm:flex-row"
    >
      <div
        @mouseover="onHover('coming')"
        @mouseleave="onHover(null)"
        class="flex flex-col justify-between py-7 h-52 sm:h-full bg-white w-full rounded-3xl relative px-7 cursor-pointer group"
      >
        <router-link
          to="/coming"
          class="absolute w-full h-full left-0 top-0 z-10"
        ></router-link>

        <div class="">
          <IconHomeComingMini
            :isActive="activeIcon === 'coming' ? true : false"
          />
        </div>
        <div class="mt-16">
          <span
            class="font-bold text-3xl text-black group-hover:text-mainColor default-transition"
            >Приход
          </span>
          <p></p>
          <span
            class="sm:hidden xl:block text-md text-black text-opacity-50 group-hover:text-mainColor default-transition"
            >Поставить на приход товар
          </span>
          <div class="hidden lg:block absolute right-0 bottom-0 z-0">
            <IconHomeComing />
          </div>
        </div>
      </div>
      <div
        @mouseover="onHover('order')"
        @mouseleave="onHover(null)"
        class="flex flex-col justify-between py-7 h-52 sm:h-full bg-white w-full rounded-3xl relative px-7 cursor-pointer group"
      >
        <router-link
          to="/order"
          class="absolute w-full h-full left-0 top-0 z-10"
        ></router-link>

        <div class="">
          <IconHomeOrderMini
            :isActive="activeIcon === 'order' ? true : false"
          />
        </div>
        <div class="mt-16">
          <span
            class="font-bold text-3xl z-1 text-black group-hover:text-mainColor default-transition"
            >Сделка</span
          >
          <p></p>
          <span
            class="sm:hidden xl:block text-md text-black z-1 text-opacity-50 group-hover:text-mainColor default-transition"
            >Провести сделку</span
          >
          <div class="hidden lg:block absolute right-0 bottom-0 z-0">
            <IconHomeOrder />
          </div>
        </div>
      </div>
      <div
        @mouseover="onHover('stock')"
        @mouseleave="onHover(null)"
        class="flex flex-col justify-between py-7 h-52 sm:h-full bg-white w-full rounded-3xl relative px-7 cursor-pointer group"
      >
        <router-link
          to="/stock"
          class="absolute w-full h-full left-0 top-0 z-10"
        ></router-link>

        <div class="">
          <IconHomeStockMini
            :isActive="activeIcon === 'stock' ? true : false"
          />
        </div>
        <div class="mt-16">
          <span
            class="font-bold text-3xl z-1 text-black group-hover:text-mainColor default-transition"
            >Остатки</span
          >
          <p></p>
          <span
            class="sm:hidden xl:block text-md text-black z-1 text-opacity-50 group-hover:text-mainColor default-transition"
            >Посмотреть наличие товара</span
          >
          <div class="hidden lg:block absolute right-0 bottom-0 z-0">
            <IconHomeStock />
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col sm:flex-row justify-center items-center w-full sm:px-4 sm:h-72 space-x-3 space-y-[3px]"
    >
      <div
        class="bg-white h-full w-full rounded-3xl flex flex-row space-x-10 px-10 py-7 sm:flex-col rounded-b-lg relative cursor-pointer group hover:shadow-lg hover:shadow-[#F05252]/[.12] default-transition"
      >
        <router-link
          to="/priceedit"
          class="absolute w-full h-full left-0 top-0 z-10"
        ></router-link>
        <div class="h-full flex justify-center items-center">
          <IconHomePrice />
        </div>
        <div class="flex flex-col justify-center items-start">
          <div class="">
            <span
              class="font-bold text-2xl text-black group-hover:text-mainColor"
              >Прайс</span
            >
          </div>
          <div class="">
            <span
              class="text-sm text-black text-opacity-50 group-hover:text-mainColor"
              >Редактировать прайс
            </span>
          </div>
        </div>
      </div>
      <div
        class="bg-white w-full h-full rounded-3xl flex flex-row space-x-10 px-10 py-7 sm:flex-col rounded-b-lg relative cursor-pointer group hover:shadow-lg hover:shadow-[#F05252]/[.12] default-transition"
      >
        <router-link
          to="/pack"
          class="absolute w-full h-full left-0 top-0 z-10"
        ></router-link>
        <div class="h-full flex justify-center items-center">
          <IconHomePack />
        </div>
        <div class="flex flex-col justify-center items-start">
          <div class="">
            <span
              class="font-bold text-2xl text-black group-hover:text-mainColor"
              >Фасовка</span
            >
          </div>
          <div class="">
            <span
              class="text-sm text-black text-opacity-50 group-hover:text-mainColor"
              >Конвертация мешков
            </span>
          </div>
        </div>
      </div>
      <div
        class="bg-white w-full h-full rounded-3xl flex flex-row space-x-10 px-10 py-7 sm:flex-col rounded-b-lg relative cursor-pointer group hover:shadow-lg hover:shadow-[#F05252]/[.12] default-transition"
      >
        <router-link
          to="/databases"
          class="absolute w-full h-full left-0 top-0 z-10"
        ></router-link>

        <div class="h-full flex justify-center items-center">
          <IconHomeDB />
        </div>
        <div class="flex flex-col justify-center items-start">
          <div class="">
            <span
              class="font-bold text-2xl text-black group-hover:text-mainColor"
              >БД</span
            >
          </div>
          <div class="">
            <span
              class="text-sm text-black text-opacity-50 group-hover:text-mainColor"
              >Базы Данных
            </span>
          </div>
        </div>
      </div>
      <div
        class="bg-white w-full h-full rounded-3xl flex flex-row space-x-10 px-10 py-7 sm:flex-col rounded-b-lg relative cursor-not-allowed opacity-60 group default-transition"
      >
        <IconHomeInDev />
        <div class="h-full flex justify-center items-center">
          <IconHomeFinance />
        </div>
        <div class="flex flex-col justify-center items-start">
          <div class="">
            <span class="font-bold text-2xl text-black">Финансы</span>
          </div>
          <div class="">
            <span class="text-sm text-black text-opacity-50"
              >Аналитика показателей
            </span>
          </div>
        </div>
      </div>
      <div
        class="bg-white w-full h-full rounded-3xl flex flex-row space-x-10 px-10 py-7 sm:flex-col rounded-b-lg relative cursor-not-allowed opacity-60 group default-transition"
      >
        <IconHomeInDev />
        <div class="h-full flex justify-center items-center">
          <IconHome1C />
        </div>
        <div class="flex flex-col justify-center items-start">
          <div class="">
            <span class="font-bold text-2xl text-black">1C</span>
          </div>
          <div class="">
            <span class="text-sm text-black text-opacity-50"
              >Импорт данных
            </span>
          </div>
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
