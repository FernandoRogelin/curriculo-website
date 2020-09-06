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
    font-size: 1.6rem;
    color: $pigeonPost;

    @media (max-width: $largeViewports) {
      font-size: 1.4rem;
    }

    @media (max-width: $smallViewports) {
      font-size: 1.1rem;
    }

    &-company {
      color: $steelBlue;
      font-size: 1.2rem;

      @media (max-width: $largeViewports) {
        font-size: 1.1rem;
      }

      @media (max-width: $smallViewports) {
        font-size: 0.8rem;
      }
    }
  }

  &-time {
    font-size: 0.8rem;

    @media (max-width: $largeViewports) {
      font-size: 0.7rem;
    }

    @media (max-width: $smallViewports) {
      font-size: 0.6rem;
    }
  }

  &-text {
    margin-top: 20px;

    @media (max-width: $largeViewports) {
      font-size: 0.9rem;
    }

    @media (max-width: $smallViewports) {
      font-size: 0.7rem;
    }
  }

  &-technologies {
    margin-top: 30px;
    color: $steelBlue;
    font-weight: bold;

    @media (max-width: $largeViewports) {
      font-size: 0.9rem;
    }

    @media (max-width: $smallViewports) {
      font-size: 0.7rem;
    }

    &-stack {
      font-weight: normal;
    }
  }
}
</style>