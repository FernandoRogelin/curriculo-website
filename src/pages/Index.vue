<template>
  <div>
    <Menu />
    <div class="Content">
      <div class="Photo" />
      <Title title="name" subTitle="senior front-end engineer" />
      <Card>
        <p class="Content-text">
          {{ $t("welcome") }}
        </p>
        <p class="Content-text">
          {{ $t("area") }}
        </p>
      </Card>
      <div class="Content-informations">
        <div>
          <p class="Content-informations-information">
            {{ $t("information") }}
          </p>
          <ul class="Content-informations-list">
            <li class="Content-informations-list-item">{{ $t("age") }}: <span>25</span></li>
            <li class="Content-informations-list-item">{{ $t("contact") }}: <span>fernando.rogelin@hotmail.com</span></li>
            <li class="Content-informations-list-item">{{ $t("location") }}: <span>Guaíba - Rio Grande do Sul</span></li>
          </ul>
        </div>
        <div class="Content-informations-footer">
          <p class="Content-informations-information">{{ $t("network") }}</p>
          <div>
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
        </div>
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
    top: -3rem;
    left: 3rem;
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
  max-width: 80rem;
  position: relative;
  margin: 4rem auto 0;
  padding: 0 4rem 2rem;

  @media (max-width: $largeViewports) {
    padding: 0 100px;
  }

  @media (max-width: $smallViewports) {
    padding: 0 40px;
  }

  &-informations {
    display: flex;
    margin-top: 2rem;
    align-items: flex-end;
    justify-content: space-between;

    &-information {
      color: $lynch;
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

    &-footer {
      display: flex;
      flex-direction: column;

      & > div {
        display: flex;
        column-gap: 5px;
        margin-top: 0.5rem;
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
}
</style>
