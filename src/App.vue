<template>
  <div
    class="h-screen w-screen flex items-center justify-center bg-gradient-to-br to-cyan-600 from-blue-500"
  >
    <Transition
      appear
      enter-from-class="opacity-0 scale-75"
      enter-active-class="transition-all transform duration-1000"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-active-class="transition-all transform duration-1000"
      leave-to-class="opacity-0 scale-75"
    >
      <div
        class="text-center p-8 rounded-full bg-white w-[650px] h-[650px] shadow-lg"
      >
        <div>
          <div class="text-[300px]">🎉</div>
          <div class="text-2xl text-gray-600 font-thin">
            {{ $t("apps.worksite") }}
          </div>
          <div>{{ $trustupT.loader.isLoading }}</div>

          <div>{{ translation.loader.isLoading }}</div>
          <div>{{ $t("apps.accountant", { name: "George" }) }}</div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useTranslation } from "./lib";
// Import your library here.

const translation = useTranslation();
</script>
