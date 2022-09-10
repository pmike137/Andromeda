<template>
  <div class="flex justify-center">
    <div class="w-[60%] bg-slate-300 p-5 rounded-lg">
      <TabsWrapper>
        <Tab title="Инерт" :icon="Stone"> <StockInert /></Tab>
        <Tab title="Лес" :icon="Wood"><StockWood /></Tab>
        <Tab title="Единицы" :icon="Unit"> </Tab>
        <Tab title="Другое" :icon="Other"></Tab>
      </TabsWrapper>
    </div>
  </div>
</template>

<script setup>
import TabsWrapper from "../components/TabsWrapper.vue";
import Tab from "../components/Tab.vue";
import Stone from "../components/icons/IconStone.vue";
import Wood from "../components/icons/IconWood.vue";
import Unit from "../components/icons/IconUnit.vue";
import Other from "../components/icons/IconOther.vue";
import StockInert from "../components/StockInert.vue";
import StockWood from "../components/StockWood.vue";
</script>
