<template>
  <div class="flex h-screen bg-[#424769]">
    <!-- Sidebar -->
    <div
      :class="{
        'w-64': isOpen,
        'w-64': !isOpen,
        hidden: !isOpen,
        'w-60': isOpen,
      }"
      class="absolute sm:relative bg-[#2D3250] transition-width duration-200 ease-in-out overflow-hidden p-4 shadow-lg h-auto top-0 bottom-0 sm:h-screen md:block z-50"
    >
      <h2 class="text-2xl font-bold mb-4">Martin's software</h2>
      <ul class="py-1 px-3 flex flex-col gap-3">
        <li>
          <ULink
            to="/login"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            Login
          </ULink>
        </li>
        <li>
          <ULink
            to="/"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            Inicio
          </ULink>
        </li>
        <!-- Agrega más links según sea necesario -->
      </ul>
      <!-- Botón de cierre -->
      <button v-if="isOpen" class="mt-4" @click="isOpen = false">Cerrar</button>
    </div>

    <!-- Contenido principal -->
    <div class="flex-1 overflow-auto">
      <!-- Navbar -->
      <nav class="p-4 bg-[#2D3250] shadow-lg flex justify-between">
        <div class="flex justify-start">
          <button class="block sm:hidden md:hidden" @click="isOpen = !isOpen">
            <!-- Icono de menú de hamburguesa -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div class="flex justify-end">
          <AvatarDropdown class="px-5" />
        </div>
      </nav>

      <!-- Contenido -->
      <main class="p-4">
        <slot />
        <UNotifications />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
</script>
