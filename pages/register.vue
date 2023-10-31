<script setup>
import { ref } from "vue";
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
} from "@headlessui/vue";
const registeType = reactive([
    {
        type: "MOBILE",
        descr: "",
    },
    {
        type: "EMAIL",
        descr: "",
    },
]);
const ReqData = reactive({
    register_type: ref('MOBILE')
})
</script>

<template>
    <div>
        <div class="flex">
            <div class="w-8/12">
                <div>REGISTER_TITLE</div>
                <RadioGroup as="div" v-model="ReqData.register_type">
                    <div class="flex gap-2">
                        <RadioGroupOption as="template" v-for="(t, i) in registeType" :key="i" :value="t.type"
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
                                            <RadioGroupLabel as="p" :class="checked ? 'text-white' : 'text-gray-900'"
                                                class="font-medium">
                                                {{ t.descr }}
                                            </RadioGroupLabel>
                                            <RadioGroupDescription as="span"
                                                :class="checked ? 'text-sky-100' : 'text-gray-500'" class="inline">
                                                <span> {{ t.descr }}</span>
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
                <div class="grid grid-col-2">
                    <InputIcon label="firstname" v-if="ReqData.register_type == 'EMAIL'" />
                    <InputIcon label="Mobile" v-if="ReqData.register_type == 'MOBILE'" />
                    <InputIcon label="lastname" />
                </div>
                <InputIcon />
            </div>
            <section
                class="flex h-screen w-4/12 flex-col w-full bg-cover bg-fixed bg-center flex justify-center items-center"
                style="
          background-image: url(https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=880&q=80);
        ">
                <h1 class="text-white text-5xl font-semibold mt-20 mb-10">
                    This is Parallax Effect
                </h1>

                <span class="text-center font-bold my-20 text-white/90">
                    <a href="https://egoistdeveloper.github.io/twcss-to-sass-playground/" target="_blank"
                        class="text-white/90 hover:text-white">
                        Convetert to SASS
                    </a>

                    <hr class="my-4" />

                    <a href="https://unsplash.com/photos/8Pm_A-OHJGg" target="_blank"
                        class="text-white/90 hover:text-white">
                        Image Source
                    </a>

                    <hr class="my-4" />

                    <p>
                        <a href="https://github.com/EgoistDeveloper/my-tailwind-components/blob/main/src/templates/parallax-landing-page.html"
                            target="_blank" class="text-white/90 hover:text-white">
                            Source Code
                        </a>
                        |
                        <a href="https://egoistdeveloper.github.io/my-tailwind-components/./src/templates/parallax-landing-page.html"
                            target="_blank" class="text-white/90 hover:text-white">
                            Full Preview
                        </a>
                    </p>
                </span>
            </section>
        </div>
    </div>
</template>
