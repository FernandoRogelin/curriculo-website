<template>
  <div class="Body">
    <p v-if="company" class="Body-title">
      {{ title }}
      <span class="Body-title-company">{{ company }}</span>
    </p>
    <p v-if="time" class="Body-time">{{ time }}</p>
    <p class="Body-text">
      <slot />
    </p>
    <p v-if="technologies" class="Body-technologies">
      {{ $t("tech") }}:
      <span class="Body-technologies-stack">{{ technologies }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: {
    time: String,
    title: String,
    company: String,
    technologies: String,
  },
};
</script>

<style lang="scss" scoped>
.Body {
  &-title {
    color: $pigeonPost;
    font-size: 1.6rem;

    &-company {
      color: $steelBlue;
      font-size: 1.2rem;
    }
  }

  &-time {
    font-size: 0.8rem;
  }

  &-text {
    margin-top: 20px;
  }

  &-technologies {
    margin-top: 30px;
    color: $steelBlue;
    font-weight: bold;

    &-stack {
      font-weight: normal;
    }
  }
}
</style>