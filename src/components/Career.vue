<template>
  <div class="WrapperCareer">
    <Title title="experience" />
    <div class="WrapperCareer-companys">
      <div v-for="experience in $t('experiences')" :key="experience.id" class="WrapperCareer-body">
        <Content
        :time="experience.time"
        :title="experience.title"
        :company="experience.company"
        :technologies="experience.technologies"
        >{{ experience.text }}</Content>
      </div>
    </div>
    <Title title="project" />
    <div class="WrapperCareer-body">
      <a
        target="_blank"
        class="WrapperCareer-body-link"
        href="https://github.com/FernandoRogelin/curriculo-website"
      >Curriculo-website - Repositório que contém todo o meu currículo</a>
    </div>
  </div>
</template>

<script>
import Title from "~/components/Title";
import Content from "~/components/Content";

export default {
  components: {
    Title,
    Content,
  },
};
</script>

<style lang="scss" scoped>
.WrapperCareer {
  @media (max-width: $largeViewports) {
    padding: 0 100px;
  }

  @media (max-width: $smallViewports) {
    padding: 0 40px;
  }

  &-companys {
    margin-bottom: 40px;
  }

  &-body {
    width: 100%;
    margin-top: 50px;

    &-link {
      color: $calypso;
      width: fit-content;
      text-decoration: none;

      @media (max-width: $smallViewports) {
        font-size: 0.8rem;
      }

      &:hover {
        border-bottom: 1px solid $calypso;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
