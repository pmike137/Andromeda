§
<template>
  <div class="flex justify-center">
    <div class="w-full sm:w-[70%] bg-slate-300 p-5 rounded-lg">
      <TabsWrapper>
        <Tab title="Сделка" :icon="IconDeal"> <OrderSell /></Tab>
        <Tab title="Другое" :icon="IconOther"></Tab>
      </TabsWrapper>
    </div>
  </div>
</template>

<script setup>
import TabsWrapper from "../components/TabsWrapper.vue";
import Tab from "../components/Tab.vue";
import OrderSell from "../components/OrderSell.vue";
import { IconDeal, IconOther } from "../components";
</script>
