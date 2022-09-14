<template>
  <div class="">
    <div class="flex flex-col sm:flex-row justify-around items-center px-4">
      <div
        class="flex justify-center items-center w-full my-2 py-3 sm:w-64 sm:h-64 rounded-lg flex-col shadow-md rounded-b-lg bg-red-500 hover:bg-red-600 relative cursor-pointer"
      >
        <router-link
          to="/coming"
          class="absolute w-full h-full t-0 l-0"
        ></router-link>
        <h5 class="text-2xl font-bold text-black text-center">Приход</h5>
        <div class="flex justify-center items-center">
          <img src="image/icon-coming.png" class="h-25" />
        </div>
      </div>

      <div
        class="flex justify-center items-center w-full my-2 py-3 sm:w-64 sm:h-64 rounded-lg flex-col shadow-md rounded-b-lg bg-red-500 hover:bg-red-600 relative cursor-pointer"
      >
        <router-link
          to="/order"
          class="absolute w-full h-full t-0 l-0"
        ></router-link>
        <h5 class="text-2xl font-bold text-black text-center">Сделка</h5>
        <div class="flex justify-center items-center">
          <img src="image/icon-order.png" class="h-25" />
        </div>
      </div>
      <div
        class="flex justify-center items-center w-full my-2 py-3 sm:w-64 sm:h-64 rounded-lg flex-col shadow-md rounded-b-lg bg-red-500 hover:bg-red-600 relative cursor-pointer"
      >
        <router-link
          to="/stock"
          class="absolute w-full h-full t-0 l-0"
        ></router-link>
        <h5 class="text-2xl font-bold text-black text-center">Остатки</h5>
        <div class="flex justify-center items-center">
          <img src="image/icon-stock.png" class="h-25" />
        </div>
      </div>
    </div>
  </div>
  <div>
    <hr class="my-8 h-px bg-gray-800 border-0 dark:bg-gray-700" />
  </div>
  <div class="flex flex-col sm:flex-row px-4 justify-around items-center">
    <div
      class="flex justify-center items-center w-full my-2 py-3 sm:w-48 sm:h-48 border border-slate-300 shadow-md rounded-lg bg-slate-300 hover:bg-slate-400 cursor-pointer relative"
    >
      <router-link
        to="/priceedit"
        class="absolute w-full h-full t-0 l-0"
      ></router-link>
      <div class="flex-col items-center justify-center text-center">
        <h5 class="mb-2 text-xl font-bold text-black text-opacity-1">
          Прейскурант
        </h5>
        <div class="flex justify-center items-center">
          <img src="image/icon-price.png" class="h-15" />
        </div>
      </div>
    </div>
    <div
      class="flex justify-center items-center w-full my-2 py-3 sm:w-48 sm:h-48 border border-slate-300 shadow-md rounded-lg bg-slate-300 hover:bg-slate-400 cursor-pointer relative"
    >
      <router-link
        to="/pack"
        class="absolute w-full h-full t-0 l-0"
      ></router-link>
      <div class="flex-col items-center justify-center text-center">
        <h5 class="mb-2 text-xl font-bold text-black text-opacity-1">
          Фасовка
        </h5>
        <div class="flex justify-center items-center">
          <img src="image/icon-shovel.png" class="max-h-[64px]" />
        </div>
      </div>
    </div>
    <div
      class="flex justify-center items-center w-full my-2 py-3 sm:w-48 sm:h-48 border border-slate-300 shadow-md rounded-lg bg-slate-300 hover:bg-slate-400 cursor-pointer relative"
    >
      <router-link
        to="/databases"
        class="absolute w-full h-full t-0 l-0"
      ></router-link>
      <div class="flex-col items-center justify-center text-center">
        <div>
          <h5 class="text-xl font-bold text-black text-opacity-1">БД</h5>
        </div>
        <div class="flex justify-center items-center">
          <img src="image/icon-database.png" class="max-h-[64px]" />
        </div>
      </div>
    </div>
    <div
      class="flex justify-center items-center w-full my-2 py-3 sm:w-48 sm:h-48 border border-slate-300 shadow-md rounded-lg bg-slate-300 hover:bg-slate-400 cursor-pointer relative"
    >
      <div class="flex-col items-center justify-center text-center">
        <h5 class="mb-2 text-xl font-bold text-black">Финансы</h5>
        <div class="flex justify-center items-center">
          <img src="image/icon-safe.png" class="max-h-[64px]" />
        </div>
      </div>
    </div>
    <div
      class="flex justify-center items-center w-full my-2 py-3 sm:w-48 sm:h-48 border border-slate-300 shadow-md rounded-lg bg-slate-300"
    >
      <div class="flex-col items-center justify-center text-center">
        <h5 class="mb-2 text-xl font-bold text-black opacity-50">
          Бухгалтерия
        </h5>
        <div class="flex justify-center items-center">
          <img src="image/icon-1c.png" class="max-h-[64px] opacity-50" />
        </div>
      </div>
    </div>
  </div>
</template>
