<template>
  <div
    class="overflow-x-auto relative shadow-md sm:rounded-lg rounded-lg bg-slate-400 p-0"
  >
    <div
      class="flex justify-center items-center p-4 bg-slate-400 dark:bg-gray-900"
    >
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative mt-1">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Поиск товара"
        />
      </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-black uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="py-3 px-6">Наименование</th>
          <th scope="col" class="py-3 px-6">Группа</th>
          <th scope="col" class="py-3 px-6">Объем (т.)</th>
          <th scope="col" class="py-3 px-6">Себес-ть (руб.)</th>
          <th scope="col" class="py-3 px-6">Другое</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
        >
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Щебень Белогорский
          </th>
          <td class="py-4 px-6">20-40</td>
          <td class="py-4 px-6">250</td>
          <td class="py-4 px-6">1000</td>
          <td class="py-4 px-6">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Edit</a
            >
          </td>
        </tr>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Щебень Белогорский
          </th>
          <td class="py-4 px-6">40-70</td>
          <td class="py-4 px-6">200</td>
          <td class="py-4 px-6">900</td>
          <td class="py-4 px-6">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Edit</a
            >
          </td>
        </tr>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Щебень Белогорский
          </th>
          <td class="py-4 px-6">Бут</td>
          <td class="py-4 px-6">600</td>
          <td class="py-4 px-6">300</td>
          <td class="py-4 px-6">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Edit</a
            >
          </td>
        </tr>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Щебень Мраморное
          </th>
          <td class="py-4 px-6">20-40</td>
          <td class="py-4 px-6">350</td>
          <td class="py-4 px-6">1300</td>
          <td class="py-4 px-6">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Edit</a
            >
          </td>
        </tr>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Песок Зуйский
          </th>
          <td class="py-4 px-6">Морской</td>
          <td class="py-4 px-6">250</td>
          <td class="py-4 px-6">1000</td>
          <td class="py-4 px-6">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Edit</a
            >
          </td>
        </tr>
        <tr
          class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Грунт
          </th>
          <td class="py-4 px-6">плод.</td>
          <td class="py-4 px-6">400</td>
          <td class="py-4 px-6">500</td>
          <td class="py-4 px-6">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Edit</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup></script>
