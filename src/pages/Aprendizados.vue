<template>
  <Menu>
    <div class="Content">
      <div class="Content-header">
        <h1 class="Content-header-title">Habilidades</h1>
      </div>
      <div class="Content-skills">
        <div class="Content-skills-wrapper" v-for="skill in skills" :key="skill.id">
          <p class="Content-skills-wrapper-technologies">{{ skill.technologie }}</p>
          <ul class="Content-skills-wrapper-list">
            <li
              :key="item.id"
              v-for="item in skill.items"
              class="Content-skills-wrapper-list-item"
            >{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class="Content-header">
        <h1 class="Content-header-title">Cursos</h1>
      </div>
      <div class="Content-body">
        <a
          target="_blank"
          :key="course.id"
          :href="course.link"
          v-for="course in courses"
          class="Content-body-link"
        >{{ course.name }}</a>
      </div>
      <div class="Content-header">
        <h1 class="Content-header-title">Educação</h1>
      </div>
      <div class="Content-body">
        <Content
          time="2015 - 2019"
          title="Análise e Desenvolvimento de Sistemas -"
          company="UniRitter"
        >Formado no tecnólogo de ADS.</Content>
      </div>
    </div>
  </Menu>
</template>

<script>
import Skill from "~/utils/skills";
import Course from "~/utils/courses";
import Content from "~/components/Content";

export default {
  metaInfo: {
    title: "Aprendizados",
  },
  components: {
    Content,
  },
  data: () => ({
    skills: Skill,
    courses: Course,
  }),
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

  &-skills {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;

    &-wrapper {
      &:not(:last-child) {
        padding-right: 30px;
        border-right: 1px solid $pigeonPost;
      }

      &:not(:first-child) {
        padding-left: 30px;
      }

      &-technologies {
        font-weight: bold;
        font-size: 1.4rem;
        color: $pigeonPost;
        width: fit-content;
        border-bottom: 1px solid;
      }

      &-list {
        margin: 0;
        font-weight: bold;
        padding: 10px 0 0 30px;

        &-item {
          padding: 2px 0;
          font-size: 1rem;
          color: $calypso;
        }
      }
    }
  }

  &-body {
    width: 100%;
    display: flex;
    margin-top: 40px;
    flex-direction: column;

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
