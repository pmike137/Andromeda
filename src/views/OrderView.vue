<template>
  <div class="flex flex-col justify-center lg:px-14">
    <div class="flex justify-between items-center w-full mb-8 px-3 lg:px-0">
      <div class="absolute top-[145px] left-[40px]">
        <IconBack />
      </div>
      <div class="flex justify-center items-center">
        <IconOrderOrder class="mr-4" />
        <div class="flex flex-col">
          <span class="text-2xl font-bold">Сделка</span>

          <span class="text-sm text-gray-400"
            >Выберите клиента и сформируйте чек сделки
          </span>
        </div>
      </div>
      <NumOfOrder />
    </div>
    <div class="w-full rounded-2xl">
      <TabsWrapper>
        <Tab title="Чек" :icon="IconOrderCheck"><FormOrderDeal /> </Tab>
        <Tab title="Другое" :icon="IconComingOther"> </Tab>
      </TabsWrapper>
    </div>
  </div>
</template>

<script setup>
import TabsWrapper from "../components/TabsWrapper.vue";
import Tab from "../components/Tab.vue";
import {
  FormOrderDeal,
  IconOrderOrder,
  IconComingOther,
  IconOrderCheck,
  NumOfOrder,
  IconBack,
} from "../components";
</script>
