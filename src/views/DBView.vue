<template>
  <div class="flex flex-col justify-center px-14">
    <div class="flex justify-between items-center w-full mb-8">
      <div class="absolute top-[145px] left-[40px]">
        <IconBack />
      </div>
      <div class="flex">
        <IconComingComing class="mr-4" />
        <div class="flex flex-col">
          <span class="text-2xl font-bold">Приход товара</span>

          <span class="text-sm text-gray-400"
            >Выберите материал и внесите информацию о полученном товаре</span
          >
        </div>
      </div>
      <NumOfOrder />
    </div>
    <div class="w-full rounded-2xl">
      <TabsWrapper>
        <Tab title="Клиенты" :icon="IconDBClients"><FormDBClients /></Tab>
        <Tab title="Перевозчики" :icon="IconDBDrivers"><FormDBDrives /></Tab>
        <Tab title="Поставщики" :icon="IconDBSuppliers"
          ><FormDBSuppliers />
        </Tab>
      </TabsWrapper>
    </div>
  </div>
</template>
<script setup>
import TabsWrapper from "../components/TabsWrapper.vue";
import Tab from "../components/Tab.vue";

import {
  FormDBClients,
  FormDBDrivers,
  FormDBSuppliers,
  IconDBClients,
  IconDBDrivers,
  IconDBSuppliers,
} from "../components";
</script>
