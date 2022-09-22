<template>
  <div class="flex flex-col justify-center">
    <div class="flex justify-between items-center w-full mb-8 px-14">
      <div class="absolute top-[145px] left-[40px]">
        <IconBack />
      </div>
      <div class="flex">
        <IconPricePrice class="mr-4" />
        <div class="flex flex-col">
          <span class="text-2xl font-bold">Прейскурант</span>

          <span class="text-sm text-gray-400"
            >Актуализируйте информацию о ценах
          </span>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col w-full bg-white space-y-5 mb-[5px] overflow-x-auto"
    >
      <table class="custom-table w-full text-sm">
        <thead class="text-xs uppercase cursor-default">
          <tr class="">
            <th scope="col" class="py-4 text-mainColor">№</th>
            <th scope="col" class="py-4 text-mainColor">Наименование</th>
            <th scope="col" class="py-4 text-mainColor">Тип</th>
            <th scope="col" class="py-4 text-mainColor">
              Цена за тонну (опт.)
            </th>
            <th scope="col" class="py-4 text-mainColor">
              Цена за тонну (роз.)
            </th>
            <th scope="col" class="py-4 text-mainColor">Цена за мешок</th>
            <th scope="col" class="text-mainColor w-[50px]"><IconEdit /></th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center cursor-pointer hover:bg-mainHoverColor/25">
            <th scope="rowgroup" class="py-4">1</th>
            <td>Щебень Белогорский</td>
            <td>5-20</td>
            <td>1300</td>
            <td>1250</td>
            <td>-</td>
            <td><IconEdit /></td>
          </tr>
          <tr class="text-center cursor-pointer hover:bg-mainHoverColor/25">
            <th scope="rowgroup" class="py-4">2</th>
            <td>Щебень Белогорский</td>
            <td>20-40</td>
            <td>1300</td>
            <td>1250</td>
            <td>85</td>
            <td><IconEdit /></td>
          </tr>
          <tr class="text-center cursor-pointer hover:bg-mainHoverColor/25">
            <th scope="rowgroup" class="py-4">3</th>
            <td>Щебень Белогорский</td>
            <td>40-70</td>
            <td>1300</td>
            <td>1250</td>
            <td>-</td>
            <td><IconEdit /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { IconBack, IconPricePrice, IconEdit } from "../components";
</script>

<style scoped>
.custom-table th,
.custom-table tr,
.custom-table td {
  border: 5px solid #f5f5f5;
}
</style>
