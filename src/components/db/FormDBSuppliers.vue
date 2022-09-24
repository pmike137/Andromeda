<template>
  <div
    class="flex flex-col w-full bg-white px-[70px] py-7 space-y-5 rounded-t-2xl mb-[5px]"
  >
    <div class="w-full">
      <label for="name-of-product" class="block mb-2 font-bold"
        >Поиск клиента</label
      ><input
        id="name-of-product"
        type="text"
        placeholder="Введите данные о клиенте"
        class="w-full h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
      />
    </div>
  </div>
  <div class="flex flex-col w-full bg-white space-y-5 mb-[5px] overflow-x-auto">
    <table class="custom-table w-full text-sm">
      <thead class="text-xs uppercase cursor-default">
        <tr class="">
          <th scope="col" class="py-4 text-mainColor">№</th>
          <th scope="col" class="py-4 text-mainColor">Наименование</th>
          <th scope="col" class="py-4 text-mainColor">Адресс</th>
          <th scope="col" class="w-1/5 py-4 text-mainColor">Моб. телефон</th>
          <th scope="col" class="w-1/5 py-4 text-mainColor">Тип</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center cursor-pointer hover:bg-mainHoverColor/25">
          <th scope="rowgroup" class="py-4">1</th>
          <td>Иванов Иван Иванович</td>
          <td>поселок Лозовое</td>
          <td>+7 978 111 11 11</td>
          <td>Карьер</td>
        </tr>
        <tr class="text-center cursor-pointer hover:bg-mainHoverColor/25">
          <th scope="rowgroup" class="py-4">2</th>
          <td>ООО "Рога И Копыта"</td>
          <td>ул. Крылова 1</td>
          <td>+7 978 222 22 22</td>
          <td>Оптовый Электроинструмент</td>
        </tr>
        <tr class="text-center cursor-pointer hover:bg-mainHoverColor/25">
          <th scope="rowgroup" class="py-4">3</th>
          <td>Петров Петр Петрович</td>
          <td>г. Краснодар ул. Ленина 1</td>
          <td>+7 978 333 33 33</td>
          <td>Оптовые Смеси</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div
    class="flex flex-col w-full h-[30px] bg-white px-[70px] py-7 space-y-5 rounded-b-2xl"
  ></div>
</template>
<script setup></script>
<style scoped>
.custom-table th,
.custom-table tr,
.custom-table td {
  border: 5px solid #f5f5f5;
}
</style>
