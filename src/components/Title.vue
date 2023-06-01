<template>
  <transition name="slide-fade">
    <div class="Title" v-if="showTitle">
      <div class="Photo" v-if="showPhoto" />
      <div>
        <h1 class="Title-header">{{ $t(title) }}</h1>
        <p v-if="subTitle" class="Title-header-subTitle">{{ $t(subTitle) }}</p>
      </div>
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
    showPhoto: false
  },
};
</script>

<style lang="scss" scoped>
.Photo {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background-size: cover;
    border: 4px solid $tundora;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("../images/Photo.jpg");

    @media (max-width: $largeViewports) {
      width: 140px;
      height: 140px;
    }
}
.Title {
  display: flex;
  column-gap: 3rem;
  align-items: center;
  justify-content: center;
  scroll-margin-top: 60px;

  @media (max-width: $smallViewports) {
    row-gap: 1rem;
    flex-direction: column;
  }

  &-header {
    font-size: 2.6rem;
    color: $pigeonPost;
    border-bottom: 1px solid;
    text-transform: uppercase;

    @media (max-width: $largeViewports) {
      font-size: 2rem;
    }

    @media (max-width: $smallViewports) {
      font-size: 1.4rem;
    }

    &-subTitle {
      font-size: 1.1rem;
      color: $steelBlue;
      text-transform: capitalize;

      @media (max-width: $largeViewports) {
        font-size: 0.9rem;
      }

      @media (max-width: $smallViewports) {
        font-size: 0.7rem;
      }
    }
  }
}
</style>
