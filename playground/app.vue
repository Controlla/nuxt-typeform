<template>
  <button @click="toggle">
    Click me!
  </button>
</template>

<script setup>
const { $typeform } = useNuxtApp()
function toggle () {
  $typeform.popup.toggle()
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    width: 100%;
    height: 100%;
  }
  #form {
    width: 100%;
    height: 100%;
  }
</style>
