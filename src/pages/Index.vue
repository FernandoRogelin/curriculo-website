<template>
  <div>
    <Menu />
    <div class="Content">
      <Title showPhoto title="name" subTitle="senior front-end engineer" />
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
          <ul class="Content-informations-list">
            <li class="Content-informations-list-item">{{ $t("age") }}:
              <span>25</span>
            </li>
            <li class="Content-informations-list-item">{{ $t("contact") }}:
              <a href="mailto:fernando.rogelin@hotmail.com">
                fernando.rogelin@hotmail.com
              </a>
            </li>
            <li class="Content-informations-list-item">{{ $t("location") }}:
              <span>Guaíba - Rio Grande do Sul</span>
            </li>
          </ul>
        </div>
        <div class="Content-informations-footer">
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
    margin: 1rem auto 0;
  }

  &-informations {
    display: flex;
    row-gap: 30px;
    flex-wrap: wrap;
    margin-top: 2rem;
    align-items: flex-end;
    justify-content: space-between;

    @media (max-width: $smallViewports) {
      justify-content: center;
    }

    &-information {
      color: $lynch;
      font-size: 1.2rem;
    }

    &-list {
      margin-top: 0.5rem;
      padding-left: 2rem;

      &-item {
        color: $lynch;

        & > span, a {
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
