<template>
  <transition name="slide-fade">
    <div class="Title" v-if="showTitle">
      <h1 class="Title-header">{{ $t(title) }}</h1>
      <p v-if="subTitle" class="Title-header-subTitle">{{ $t(subTitle) }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Title",
  data: () => ({
    showTitle: false,
  }),
  mounted: function () {
    this.showTitle = true;
  },
  props: {
    title: String,
    subTitle: String,
  },
};
</script>

<style lang="scss" scoped>
.Title {
  margin-top: 60px;

  &-header {
    color: $pigeonPost;
    font-size: 2.6rem;
    border-bottom: 1px solid;

    &-subTitle {
      color: $pigeonPost;
    }
  }
}
</style>