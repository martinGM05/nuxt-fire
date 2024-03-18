<script setup lang="ts">
const { logout } = useFirebaseAuth();
</script>

<template>
  <div>
    <h1>Admin (ruta protegida)</h1>
    <UButton key="logout" @click="logout">Logout</UButton>
  </div>
</template>
