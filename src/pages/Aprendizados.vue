<template>
  <Menu>
    <div class="Content">
      <Title title="skill" />
      <div class="Content-skills">
        <div class="Content-skills-wrapper" v-for="skill in $t('skills')" :key="skill.id">
          <p class="Content-skills-wrapper-technologies">{{ skill.technologie }}</p>
          <ul class="Content-skills-wrapper-list">
            <li
              :key="skill.id"
              v-for="skill in skill.skills"
              class="Content-skills-wrapper-list-item"
            >{{ skill }}</li>
          </ul>
        </div>
      </div>
      <Title title="course" />
      <div class="Content-body">
        <a
          target="_blank"
          :key="course.id"
          :href="course.link"
          v-for="course in courses"
          class="Content-body-link"
        >{{ course.name }}</a>
      </div>
      <Title title="college" />
      <div class="Content-body">
        <Content time="2015 - 2019" :title="$t('system')" company="UniRitter">{{ $t("trained") }}</Content>
      </div>
    </div>
  </Menu>
</template>

<script>
import Course from "~/utils/courses";
import Title from "~/components/Title";
import Content from "~/components/Content";

export default {
  metaInfo: {
    title: "Aprendizados",
  },
  components: {
    Title,
    Content,
  },
  data: () => ({
    courses: Course,
  }),
};
</script>

<style lang="scss" scoped>
.Content {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  flex-direction: column;
  padding: 0 $paddingScreen;

  @media (max-width: $smallViewports) {
    padding: 0 40px;
  }

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

        @media (max-width: $smallViewports) {
          border-right: none;
        }
      }

      &:not(:first-child) {
        padding-left: 30px;

        @media (max-width: $smallViewports) {
          padding-left: 0;
        }
      }

      &-technologies {
        font-weight: bold;
        font-size: 1.4rem;
        color: $pigeonPost;
        width: fit-content;
        border-bottom: 1px solid;

        @media (max-width: $largeViewports) {
          font-size: 1.2rem;
        }
      }

      &-list {
        margin: 0;
        font-weight: bold;
        padding: 10px 0 0 30px;

        &-item {
          padding: 2px 0;
          font-size: 1rem;
          color: $calypso;

          @media (max-width: $largeViewports) {
            font-size: 0.9rem;
          }
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

      @media (max-width: $largeViewports) {
        font-size: 0.9rem;
      }

      @media (max-width: $smallViewports) {
        font-size: 0.7rem;
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
