<template>
  <Menu>
    <div class="Content">
      <Title title="name" subTitle="profession" />
      <Card>
        <p class="Content-text">
          {{ $t("age") }}
          <br />
          {{ $t("contact") }}: fernando.rogelin@hotmail.com
          <br />
          {{ $t("location") }}: Guaíba - Rio Grande do Sul
          <br />
          {{ $t("myself") }}
          <br />
          {{ $t("goOut") }}
        </p>
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
          link="https://twitter.com/Nando_Rogelin"
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
  </Menu>
</template>

<script>
import Card from "~/components/Card";
import Title from "~/components/Title";
import SocialNetwork from "~/components/SocialNetwork";

export default {
  name: "Home",
  metaInfo: {
    title: "Sobre",
  },
  components: {
    Card,
    Title,
    SocialNetwork,
  },
};
</script>

<style lang="scss" scoped>
.Content {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  flex-direction: column;
  padding: 0 $paddingScreen;

  @media (max-width: $largeViewports) {
    padding: 0 100px;
  }

  @media (max-width: $smallViewports) {
    padding: 0 40px;
  }

  &-text {
    color: $lynch;
    line-height: 2.4;

    @media (max-width: $largeViewports) {
      font-size: 0.9rem;
    }
  }

  &-footer {
    width: 100%;
    display: flex;
    margin-top: 30px;

    > div {
      &:not(:last-child) {
        margin-right: 5px;
      }
    }
  }
}
</style>
