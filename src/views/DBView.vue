<template>
  <div>
    <div class="flex justify-center">
      <div class="w-[60%] max-h-screen bg-slate-300 p-5 rounded-lg">
        <TabsWrapper>
          <Tab title="Клиенты"><DBFormClient /></Tab>
          <Tab title="Перевозчики"><DBFormDriver /></Tab>
        </TabsWrapper>
      </div>
    </div>
  </div>
</template>
<script setup>
import TabsWrapper from "../components/TabsWrapper.vue";
import Tab from "../components/Tab.vue";
import DBFormClient from "../components/DBFormClient.vue";
import DBFormDriver from "../components/DBFormDriver.vue";
</script>
