<template>
  <div>
    <Title title="experience" id="experiences" />
    <div class="companys">
      <div v-for="experience in $t('experiences')" :key="experience.id" class="body">
        <Content
          :time="experience.time"
          :title="experience.title"
          :company="experience.company"
          :technologies="experience.technologies"
        >
          {{ experience.text }}
        </Content>
      </div>
    </div>
    <Title title="project" id="projects" />
    <div class="body">
      <a
        target="_blank"
        class="body__link"
        href="https://github.com/FernandoRogelin/curriculo-website"
      >
        Curriculo-website - Repositório que contém todo o meu currículo
      </a>
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
.companys {
  margin: 30px 0;
}
.body {
  width: 100%;
  padding: 20px 0;

  &:not(:last-child) {
    border-bottom: 1px solid $pigeonPost;
  }

  &__link {
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
</style>
