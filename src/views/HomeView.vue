<template>
  <div class="">
    <div class="flex justify-around items-center">
      <div
        class="w-[250px] h-[250px] rounded-lg overflow-hidden border border-black"
      >
        <img src="image/bk-metal.jpg" class="h-12 w-full opacity-1" />
        <div
          class="h-full flex-col border border-red-800 shadow-md rounded-b-lg bg-red-500 hover:bg-red-600 relative cursor-pointer"
        >
          <router-link
            to="/coming"
            class="absolute w-full h-full t-0 l-0"
          ></router-link>
          <h5 class="mt-7 mb-2 text-2xl font-bold text-black text-center">
            Приход
          </h5>
          <div class="flex justify-center items-center">
            <img src="image/icon-coming.png" class="h-25" />
          </div>
        </div>
      </div>
      <div
        class="w-[250px] h-[250px] rounded-lg overflow-hidden border border-black"
      >
        <img src="image/bk-metal.jpg" class="h-12 w-full opacity-1" />
        <div
          class="h-full flex-col border border-red-800 shadow-md rounded-b-lg bg-red-500 hover:bg-red-600 relative cursor-pointer"
        >
          <router-link
            to="/consumption"
            class="absolute w-full h-full t-0 l-0"
          ></router-link>
          <h5 class="mt-7 mb-2 text-2xl font-bold text-black text-center">
            Сделка
          </h5>
          <div class="flex justify-center items-center">
            <img src="image/icon-order.png" class="h-25" />
          </div>
        </div>
      </div>
      <div
        class="w-[250px] h-[250px] rounded-lg overflow-hidden border border-black"
      >
        <img src="image/bk-metal.jpg" class="h-12 w-full opacity-1" />
        <div
          class="h-full flex-col border border-red-800 shadow-md rounded-b-lg bg-red-500 hover:bg-red-600 relative cursor-pointer"
        >
          <router-link
            to="/stock"
            class="absolute w-full h-full t-0 l-0"
          ></router-link>
          <h5 class="mt-7 mb-2 text-2xl font-bold text-black text-center">
            Остатки
          </h5>
          <div class="flex justify-center items-center">
            <img src="image/icon-stock.png" class="h-25" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <hr class="my-8 h-px bg-gray-800 border-0 dark:bg-gray-700" />
  </div>
  <div class="flex justify-around items-center">
    <div
      class="flex justify-center items-center mr-[30px] w-[150px] min-w-[150px] h-[150px] border border-slate-300 shadow-md rounded-lg bg-slate-300 hover:bg-slate-400 cursor-pointer"
    >
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
      class="flex justify-center items-center mr-[30px] w-[150px] min-w-[150px] h-[150px] border border-slate-300 shadow-md rounded-lg bg-slate-300 hover:bg-slate-400 cursor-pointer"
    >
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
      class="flex justify-center items-center mr-[30px] w-[150px] min-w-[150px] h-[150px] border border-slate-300 shadow-md rounded-lg bg-slate-300 hover:bg-slate-400 cursor-pointer"
    >
      <div class="flex-col items-center justify-center text-center">
        <div>
          <h5 class="text-xl font-bold text-black text-opacity-1">Базы</h5>
          <h5 class="mb-2 text-xl font-bold text-black text-opacity-1">
            Данных
          </h5>
        </div>
        <div class="flex justify-center items-center">
          <img src="image/icon-database.png" class="max-h-[64px]" />
        </div>
      </div>
    </div>
    <div
      class="flex justify-center items-center mr-[30px] w-[150px] min-w-[150px] h-[150px] border border-slate-300 shadow-md rounded-lg bg-slate-300 hover:bg-slate-400 cursor-pointer"
    >
      <div class="flex-col items-center justify-center text-center">
        <h5 class="mb-2 text-xl font-bold text-black text-opacity-1">
          Финансы
        </h5>
        <div class="flex justify-center items-center">
          <img src="image/icon-safe.png" class="max-h-[64px]" />
        </div>
      </div>
    </div>
    <div
      class="flex justify-center items-center w-[150px] min-w-[150px] h-[150px] border border-slate-300 shadow-md rounded-lg bg-slate-300 hover:bg-slate-400 cursor-pointer"
    >
      <div class="flex-col items-center justify-center text-center">
        <h5 class="mb-2 text-xl font-bold text-black text-opacity-1">
          Бухгалтерия
        </h5>
        <div class="flex justify-center items-center">
          <img src="image/icon-1c.png" class="max-h-[64px]" />
        </div>
      </div>
    </div>
  </div>
</template>
