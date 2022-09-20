<template>
  <div class="flex w-full group">
    <input
      name="type-cash"
      id="type-cash-1"
      type="radio"
      class="w-4 h-4 mr-2 text-red-500 bg-gray-100 border-gray-300 focus:ring-red-500 focuc:ring-2"
    />
    <label for="type-cash-1" class="mr-3 text-sm font-medium text-gray-900"
      >Нал</label
    >
    <input
      name="type-cash"
      checked
      id="type-cash-2"
      type="radio"
      class="w-4 h-4 mr-2 text-red-500 bg-gray-100 border-gray-300 focus:ring-red-500 focuc:ring-2"
    />
    <label for="type-cash-2" class="mr-3 text-sm font-medium text-gray-900"
      >Безнал</label
    >
  </div>
</template>
<script setup></script>
<style scoped></style>
