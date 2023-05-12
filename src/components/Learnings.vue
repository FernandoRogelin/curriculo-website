<template>
  <div class="WrapperLearnings">
    <Title title="skill" id="skills" />
    <div class="WrapperLearnings-skills">
      <div class="WrapperLearnings-skills-wrapper" v-for="skill in $t('skills')" :key="skill.id">
        <p class="WrapperLearnings-skills-wrapper-technologies">{{ skill.technologie }}</p>
        <ul class="WrapperLearnings-skills-wrapper-list">
          <li
            :key="skill.id"
            v-for="skill in skill.skills"
            class="WrapperLearnings-skills-wrapper-list-item"
          >{{ skill }}</li>
        </ul>
      </div>
    </div>
    <Title title="course" id="courses" />
    <div class="WrapperLearnings-body">
      <div v-for="course in courses" :key="course.id" class="WrapperLearnings-body-coursesLink">
        <a target="_blank" :href="course.link" class="WrapperLearnings-body-coursesLink-link">
          {{ course.name }}
        </a>
      </div>
    </div>
    <Title title="college" id="formation" />
    <div class="WrapperLearnings-body">
      <Content time="2015 - 2019" :title="$t('system')" company="UniRitter">{{ $t("trained") }}</Content>
    </div>
  </div>
</template>

<script>
import Course from "~/utils/courses";
import Title from "~/components/Title";
import Content from "~/components/Content";

export default {
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
.WrapperLearnings {
  margin-top: 60px;

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
    margin: 40px 0 60px;
    justify-content: center;

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
    margin: 40px 0 40px;
    flex-direction: column;

    &-coursesLink {
      &:not(:last-child) {
        margin-bottom: 10px;
      }

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
      }
    }

  }
}
</style>
