<script setup>
const props = defineProps({
    cdata: {
        type: Object,
    }
})
</script>

<template>
    <div>
        <div>ราคาตลาด</div>
        <div class="grid grid-cols-4 gap-4 drop-shadow-md bg-sky-300/[0.15] text-white py-2 px-3">
            <div class="">Currency</div>
            <div class="">Price</div>
            <div class="">Change/24</div>
            <div class="">volumn</div>
        </div>
        <div class="grid grid-cols-4 gap-4 mt-1 rounded-md px-2 py-2 drop-shadow-md bg-sky-300/[0.15] text-white text-sm"
            v-for="(t,i) in props.cdata" :key="i">
            <div class="flex gap-2">
                <img :src="'/ctosymbol/'+t.symbol+'.png'" class="w-8 rounded-full" />
                <div>{{t.name}} {{ t.symbol }}</div>
            </div>
            <div class="...">
                {{
                    Number(t.quote['USD'].price).toLocaleString("en-us", {
                        minimumFractionDigits: 2,
                    })
                }}
            </div>
            <div class="...">{{
                    Number(t.quote['USD'].volume_change_24h).toLocaleString("en-us", {
                        minimumFractionDigits: 2,
                    })
                }}</div>
            <div class=""></div>
        </div>

    </div>
</template>