<template>
  <Menu>
    <div class="Content">
      <div class="Content-header">
        <h1 class="Content-header-title">Experiências</h1>
      </div>
      <div v-for="carreira in carreiras" :key="carreira.id" class="Content-body">
        <Content
          :time="carreira.time"
          :title="carreira.title"
          :company="carreira.company"
          :technologies="carreira.technologies"
        >{{ carreira.text }}</Content>
      </div>
      <div class="Content-header">
        <h1 class="Content-header-title">Projetos</h1>
      </div>
      <div class="Content-body">
        <p>Ainda não possuo projetos pessoais disponíveis.</p>
      </div>
    </div>
  </Menu>
</template>

<script>
import Content from "~/components/Content";
import Carreira from "~/utils/carreiras";

export default {
  metaInfo: {
    title: "Carreira",
  },
  data: () => ({
    carreiras: Carreira,
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
  }
}
</style>
