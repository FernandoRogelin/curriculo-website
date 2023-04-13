<template>
  <div>
    <div class="Photo" />
    <Menu />
    <div class="Content">
      <Title title="name" subTitle="senior front-end engineer" />
      <Card>
        <p class="Content-text">
          {{ $t("welcome") }}
        </p>
        <p class="Content-text">
          {{ $t("area") }}
        </p>
        <p class="Content-information">
          {{ $t("information") }}
        </p>
        <ul class="Content-list">
          <li class="Content-list-item">{{ $t("age") }}: <span>25</span></li>
          <li class="Content-list-item">{{ $t("contact") }}: <span>fernando.rogelin@hotmail.com</span></li>
          <li class="Content-list-item">{{ $t("location") }}: <span>Guaíba - Rio Grande do Sul</span></li>
        </ul>
      </Card>
      <div class="Content-footer">
        <SocialNetwork
          icon="linkedin"
          link="https://www.linkedin.com/in/fernando-rogelin/"
        />
        <SocialNetwork
          icon="github"
          link="https://github.com/FernandoRogelin"
        />
        <SocialNetwork
          icon="twitter"
          link="https://twitter.com/RogelinFernando"
        />
        <SocialNetwork
          icon="facebook"
          link="https://www.facebook.com/fernando.rogelin/"
        />
        <SocialNetwork
          icon="steam"
          link="https://steamcommunity.com/profiles/76561198011701372/"
        />
      </div>
      <Learnings />
      <Career />
    </div>
  </div>
</template>

<script>
import Menu from "~/layouts/Menu.vue";
import Card from "~/components/Card";
import Title from "~/components/Title";
import SocialNetwork from "~/components/SocialNetwork";

export default {
  name: "Home",
  metaInfo: {
    title: "Home",
  },
  components: {
    Card,
    Menu,
    Title,
    SocialNetwork,
  },
};
</script>

<style lang="scss" scoped>
.Photo {
    top: 4rem;
    left: 4rem;
    width: 150px;
    height: 150px;
    position: absolute;
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

    @media (max-width: $smallViewports) {
      width: 120px;
      height: 120px;
    }
  }
.Content {
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 4rem 2rem;

  @media (max-width: $largeViewports) {
    padding: 0 100px;
  }

  @media (max-width: $smallViewports) {
    padding: 0 40px;
  }

  &-information {
    color: $lynch;
    margin-top: 2rem;
    font-size: 1.2rem;
  }

  &-list {
    margin-top: 0.5rem;
    padding-left: 2rem;

    &-item {
      color: $lynch;

      & > span {
        color: $mineShaft;
      }
    }
  }

  &-text {
    color: $mineShaft;
    margin-bottom: 0.7rem;

    @media (max-width: $largeViewports) {
      font-size: 0.9rem;
    }
  }

  &-footer {
    width: 100%;
    display: flex;
    column-gap: 5px;
    margin-top: 30px;
  }
}
</style>
