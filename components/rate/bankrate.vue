<script setup>
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from '@headlessui/vue'

const props = defineProps({
  cdata: {
    type: Object,
  }
})

const plans = [
  {
    name: 'BOL',
    descr: '1024 GB SSD disk',
  },
  {
    name: 'STBank',
    descr: '160 GB SSD disk',
  },
  {
    name: 'BCEL',
    descr: '512 GB SSD disk',
  },
  {
    name: 'APB',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  }, {
    name: 'LDB',
    descr: '1024 GB SSD disk',
  }, {
    name: 'JDB',
    descr: '1024 GB SSD disk',
  },
]

const selected = ref(plans[0])
</script>

<template>
  <div>
    <div>ราคาตลาด</div>
    <div>
      <div class="w-full px-4 py-16">
        <div class="mx-auto w-full max-w-md">
          <RadioGroup v-model="selected">
            <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
            <div class="flex gap-2">
              <RadioGroupOption as="template" v-for="plan in plans" :key="plan.name" :value="plan"
                v-slot="{ active, checked }">
                <div :class="[
                  active
                    ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                    : '',
                  checked ? 'bg-sky-900/75 text-white ' : 'bg-white ',
                ]" class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none">
                  <div class="flex w-full items-center justify-between">
                    <div class="flex items-center">
                      <div class="text-sm">
                        <RadioGroupLabel as="p" :class="checked ? 'text-white' : 'text-gray-900'" class="font-medium">
                          {{ plan.name }}
                        </RadioGroupLabel>
                        <RadioGroupDescription as="span" :class="checked ? 'text-sky-100' : 'text-gray-500'"
                          class="inline">
                          <span>{{ plan.descr }}</span>
                        </RadioGroupDescription>
                      </div>
                    </div>
                    <div v-show="checked" class="shrink-0 text-white">
                      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
                        <path d="M7 13l3 3 7-7" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </RadioGroupOption>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4 drop-shadow-md bg-sky-300/[0.15] text-white py-2 px-3">
      <div class="">Currency</div>
      <div class="">BUY</div>
      <div class="">SELL</div>
      <div class="">CHANGE</div>
    </div>
    <div class="grid grid-cols-4 gap-4 mt-1 rounded-md px-2 py-2 drop-shadow-md bg-sky-300/[0.15] text-white text-sm"
      v-for="(t, i) in props.cdata" :key="i">
      <div class="flex gap-2">
        <img :src="'/flag_curr/' + t.names + '.svg'" class="w-8 h-8 rounded-full" />
        <div>{{ t.names }}</div>
      </div>
      <div class="text-right">
        {{
          Number(String(t.ex_buy_cash).replace(',', '')).toLocaleString("en-us", {
            minimumFractionDigits: 2,
          })
        }}
      </div>
      <!-- <div class="...">{{
                    Number(t.quote['USD'].volume_change_24h).toLocaleString("en-us", {
                        minimumFractionDigits: 2,
                    })
                }}</div> -->
      <div class=""></div>
    </div>

  </div>
</template>