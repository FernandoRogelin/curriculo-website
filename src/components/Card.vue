<template>
  <div class="body">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  margin-top: 60px;
}
</style>