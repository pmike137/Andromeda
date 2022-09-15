<template>
  <div>
    <div class="flex justify-center">
      <div class="w-[60%] bg-slate-300 p-5 rounded-lg">
        <TabsWrapper>
          <Tab title="Клиенты"><DBFormClient /></Tab>
          <Tab title="Перевозчики"><DBFormDriver /></Tab>
          <Tab title="Поставщики"><DBFormSuppliers /></Tab>
        </TabsWrapper>
      </div>
    </div>
  </div>
</template>
<script setup>
import TabsWrapper from "../components/TabsWrapper.vue";
import Tab from "../components/Tab.vue";
import { DBFormClient, DBFormSuppliers, DBFormDriver } from "../components";
</script>
