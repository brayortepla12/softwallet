<script setup lang="ts"></script>

<template>
  <div class="w-2/5 m-auto mt-10">
    <form class="flex flex-col items-center justify-center">
      <div class="w-full mb-6">
        <input
          type="text"
          id="entry"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="☹️ Ingresa tus gastos... "
          required
        />
      </div>
      <button
        type="button"
        class="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Agregar
      </button>
    </form>
  </div>
</template>
