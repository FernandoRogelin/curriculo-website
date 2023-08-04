<template>
  <div class="WrapperLearnings">
    <Title title="skill" id="skills" />
    <div class="content">
      <div class="skills" v-for="skill in $t('skills')" :key="skill.id">
        <p class="skills__technologies">{{ skill.technologie }}</p>
        <ul class="list">
          <li
            :key="skill.id"
            v-for="skill in skill.skills"
            class="list__item"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
   </div>
    <Title title="course" id="courses" />
    <div class="body">
      <a
        target="_blank"
        :key="course.id"
        class="body__link"
        :href="course.link"
        v-for="course in courses"
        >
        {{ course.name }}
      </a>
    </div>
    <Title title="college" id="formation" />
    <div class="body">
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
}
.content{
  margin: 30px 0;
}
.skills {
  width: 100%;
  padding: 10px 0;

  &:not(:last-child) {
    border-bottom: 1px solid $pigeonPost;
  }

  @media (max-width: $smallViewports) {
    row-gap: 30px;
    column-gap: 30px;
    justify-content: flex-start;
  }

  &__technologies {
    font-weight: bold;
    font-size: 1.4rem;
    color: $pigeonPost;

    @media (max-width: $largeViewports) {
      font-size: 1.2rem;
    }
  }
}
.list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  column-gap: 30px;
  font-weight: bold;
  padding-left: 18px;

  &__item {
    font-size: 1rem;
    color: $calypso;

    @media (max-width: $largeViewports) {
      font-size: 0.9rem;
    }
  }
}

.body {
  width: 100%;
  display: flex;
  row-gap: 10px;
  margin: 40px 0;
  flex-direction: column;

  &__link {
    height: 22px;
    color: $calypso;
    width: fit-content;
    text-decoration: none;

    @media (max-width: $largeViewports) {
      font-size: 0.9rem;
    }

    @media (max-width: $smallViewports) {
      height: initial;
      font-size: 0.7rem;
    }

    &:hover {
      border-bottom: 1px solid $calypso;
    }
  }
}
</style>
