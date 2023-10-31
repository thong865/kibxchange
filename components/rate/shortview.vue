<script setup>
definePageMeta({
  layout:'default'
})
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
const refr = ref(1);
const tabList = reactive([
  {
    id: 1,
    title: "Crypto Market",
  },
  {
    id: 2,
    title: "Fliat Rate Bank In Laos",
  },
]);
const { pending, data: crptoData } = await useLazyAsyncData(
  "crptoData",
  () =>
    $fetch("/api/CryptoListMarket", {
      params: {
        refr: refr.value,
      },
    }),
  {
    watch: [refr],
  }
);
const { pending:rapad, data: fliatBankData,error:raerror } = await useLazyAsyncData(
  "fliatBankData",
  () =>
    $fetch("/api/FliatBankRate", {
      params: {
        refr: refr.value,
      },
    }),
  {
    watch: [refr],
  }
);
</script>
<template>
  <div>
    <TabGroup as="div" class="w-full">
      <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab
          v-for="category in tabList"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ category.title }}
          </button>
        </Tab>
      </TabList>
      <TabPanels class="mt-2 w-full">
        <TabPanel>
          <RateCrypto :cdata="crptoData" />
        </TabPanel>
        <TabPanel>
          <!-- <RateBankrate :cdata="fliatBankData" v-if="!raerror" /> -->
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>


<style></style>