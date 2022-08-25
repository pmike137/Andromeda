<template>
  <div class="flex justify-center">
    <div class="w-[60%] max-h-screen bg-slate-300 p-5 rounded-lg">
      <TabsWrapper>
        <Tab title="Инерт"><FormInert /></Tab>
        <Tab title="Лес"><FormWood /></Tab>
        <Tab title="Единицы"><FormUnit /></Tab>
        <Tab title="Другое"><FormOther /></Tab>
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
</script>
