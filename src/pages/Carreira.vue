<template>
  <Menu>
    <div class="Content">
      <div class="Content-header">
        <h1 class="Content-header-title">Experiências</h1>
      </div>
      <div v-for="experience in experiences" :key="experience.id" class="Content-body">
        <Content
          :time="experience.time"
          :title="experience.title"
          :company="experience.company"
          :technologies="experience.technologies"
        >{{ experience.text }}</Content>
      </div>
      <div class="Content-header">
        <h1 class="Content-header-title">Projetos</h1>
      </div>
      <div class="Content-body">
        <a
          target="_blank"
          class="Content-body-link"
          href="https://github.com/FernandoRogelin/curriculo-website"
        >Curriculo-website - Repositório que contém todo o meu currículo</a>
      </div>
    </div>
  </Menu>
</template>

<script>
import Content from "~/components/Content";
import Experience from "~/utils/experiences";

export default {
  metaInfo: {
    title: "Carreira",
  },
  data: () => ({
    experiences: Experience,
  }),
  components: {
    Content,
  },
};
</script>

<style lang="scss" scoped>
.Content {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 $paddingScreen;

  &-header {
    margin-top: 60px;

    &-title {
      color: $pigeonPost;
      font-size: 2.6rem;
      border-bottom: 1px solid;
    }
  }

  &-body {
    width: 100%;
    margin-top: 50px;

    &-link {
      color: $calypso;
      width: fit-content;
      text-decoration: none;

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
