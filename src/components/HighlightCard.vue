<template>
  <div
      class="flex flex-col shadow-gray-500 shadow-sm bg-[#E9E9E9] rounded-3xl py-2 px-4 h-[100px] lg:h-[180px] xl:h-[200px]">
    <div class="flex justify-between">
      <h1 class="opacity-50">
        <slot name="name">

        </slot>
      </h1>
      <slot class="lg:w-[30px] lg:h-[30px]" name="svg">

      </slot>
    </div>
    <div class="flex-grow flex items-center justify-center">
      <h1 class="text-2xl lg:text-4xl xl:text-5xl">
        <slot name="main-number">
        </slot>
      </h1>
      <span class="text-sm mb-3">
        <slot name="unit">

        </slot>
      </span>
    </div>
    <h1 class="text-base xl:self-center">
      <slot name="extra">

      </slot>
    </h1>
  </div>
</template>
<script setup>

</script>