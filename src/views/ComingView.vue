<template>
  <div class="flex justify-center">
    <div class="w-[60%] bg-slate-300 p-5 rounded-lg">
      <TabsWrapper>
        <Tab title="Инерт" :icon="Stone"><FormInert /></Tab>
        <Tab title="Лес" :icon="Wood"><FormWood /></Tab>
        <Tab title="Единицы" :icon="Unit"> <FormUnit /></Tab>
        <Tab title="Другое" :icon="Other"><FormOther /></Tab>
      </TabsWrapper>
    </div>
  </div>
</template>

<script setup>
import TabsWrapper from "../components/TabsWrapper.vue";
import Tab from "../components/Tab.vue";
import FormWood from "../components/FormWood.vue";
import FormInert from "../components/FormInert.vue";
import FormUnit from "../components/FormUnit.vue";
import FormOther from "../components/FormOther.vue";
import Stone from "../components/icons/IconStone.vue";
import Wood from "../components/icons/IconWood.vue";
import Unit from "../components/icons/IconUnit.vue";
</script>
