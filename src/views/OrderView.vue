§
<template>
  <div class="flex justify-center">
    <div class="w-[60%] max-h-screen bg-slate-300 p-5 rounded-lg">
      <TabsWrapper>
        <Tab title="Сделка"> <OrderSell /></Tab>
        <Tab title="Другое"></Tab>
      </TabsWrapper>
    </div>
  </div>
</template>

<script setup>
import TabsWrapper from "../components/TabsWrapper.vue";
import Tab from "../components/Tab.vue";
import OrderSell from "../components/OrderSell.vue";
</script>
