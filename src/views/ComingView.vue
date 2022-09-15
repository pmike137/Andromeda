<template>
  <div class="flex justify-center px-3">
    <div class="w-full sm:w-[70%] bg-slate-300 p-5 rounded-lg">
      <TabsWrapper>
        <Tab title="Инерт" :icon="IconStone"><FormInert /></Tab>
        <Tab title="Лес" :icon="IconWood"><FormWood /></Tab>
        <Tab title="Единицы" :icon="IconUnit"> <FormUnit /></Tab>
        <Tab title="Другое" :icon="IconOther"><FormOther /></Tab>
      </TabsWrapper>
    </div>
  </div>
</template>

<script setup>
import TabsWrapper from "../components/TabsWrapper.vue";
import Tab from "../components/Tab.vue";
import { FormInert, FormUnit, FormWood, FormOther } from "../components";
import { IconStone, IconWood, IconUnit, IconOther } from "../components";
</script>
