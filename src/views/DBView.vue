<template>
  <div class="flex flex-col justify-center lg:px-14">
    <div class="flex justify-between items-center w-full mb-8 px-3 sm:px-0">
      <div class="absolute top-[145px] left-[40px]">
        <IconBack />
      </div>
      <div class="flex justify-center items-center">
        <IconDBDB class="mr-4" />
        <div class="flex flex-col">
          <span class="text-2xl font-bold">Базы данных</span>

          <span class="text-sm text-gray-400"
            >Осуществите поиск необходимых данных
          </span>
        </div>
      </div>
    </div>
    <div class="w-full rounded-2xl">
      <TabsWrapper>
        <Tab title="Клиенты" :icon="IconDBClients"><FormDBClients /></Tab>
        <Tab title="Перевозчики" :icon="IconDBDrivers"><FormDBDrivers /></Tab>
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
  IconBack,
  IconDBDB,
  IconDBClients,
  IconDBDrivers,
  IconDBSuppliers,
} from "../components";
</script>
