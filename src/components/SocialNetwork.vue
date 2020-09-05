<template>
  <div class="Wrapper">
    <a class="Wrapper-link" :href="link" target="_blank">
      <font-awesome-icon :icon="['fab', icon]" class="Wrapper-link-icon" />
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialNetwork",
  props: {
    link: String,
    icon: String,
  },
};
</script>

<style lang="scss" scoped>
.Wrapper {
  width: 55px;
  height: 55px;
  border-radius: 100%;
  background-color: $ebonyClay;

  @media (max-width: $largeViewports) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: $smallViewports) {
    width: 35px;
    height: 35px;
  }

  &-link {
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 100%;
    align-items: center;
    justify-content: center;

    &-icon {
      color: $white;
      font-size: 1.8rem;

      @media (max-width: $largeViewports) {
        font-size: 1.5rem;
      }

      @media (max-width: $smallViewports) {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
