<template>
  <div class="flex justify-center">
    <div class="w-[60%] bg-slate-300 p-5 rounded-lg">
      <TabsWrapper>
        <Tab title="Инерт" :icon="IconStone"> <StockInert /></Tab>
        <Tab title="Лес" :icon="IconWood"><StockWood /></Tab>
        <Tab title="Единицы" :icon="IconUnit"><StockUnit /> </Tab>
        <Tab title="Другое" :icon="IconOther"><StockOther /></Tab>
      </TabsWrapper>
    </div>
  </div>
</template>

<script setup>
import TabsWrapper from "../components/TabsWrapper.vue";
import Tab from "../components/Tab.vue";
import { IconStone, IconWood, IconUnit, IconOther } from "../components";
import { StockInert, StockWood, StockUnit, StockOther } from "../components";
</script>
