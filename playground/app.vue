<template>
  <div />
</template>

<script setup>
const { $typeform } = useNuxtApp()
// eslint-disable-next-line no-console
$typeform.popup.toggle()
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
