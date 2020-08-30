<template>
  <Menu>
    <div class="Content">
      <div class="Content-header">
        <h1 class="Content-header-title">FERNANDO HENRIQUE ROGELIN FILHO</h1>
        <p class="Content-header-subTitle">Desenvolvedor Front-End.</p>
      </div>
      <Card>
        <p class="Content-text">
          Idade: 23 Anos
          <br />Telefone: (51) 99602-2370
          <br />Contato: fernando.rogelin@hotmail.com
          <br />Localização: Guaíba - Rio Grande do Sul
          <br />Eu sou um programador dedicado a aprender novas tecnologias, novos conhecimentos me inspiram a crescer todos os dias.
          <br />Amo sair com meus amigos e minha família para bater um bom papo e tomar uma cerveja das boas.
        </p>
      </Card>
      <div class="Content-footer">
        <SocialNetwork link="https://www.linkedin.com/in/fernando-rogelin/" icon="linkedin" />
        <SocialNetwork link="https://github.com/FernandoRogelin" icon="github" />
        <SocialNetwork link="https://twitter.com/Nando_Rogelin" icon="twitter" />
        <SocialNetwork link="https://www.facebook.com/fernando.rogelin/" icon="facebook" />
        <SocialNetwork link="https://steamcommunity.com/profiles/76561198011701372/" icon="steam" />
      </div>
    </div>
  </Menu>
</template>

<script>
import Card from "~/components/Card";
import SocialNetwork from "~/components/SocialNetwork";

export default {
  name: "Home",
  metaInfo: {
    title: "Sobre",
  },
  components: {
    Card,
    SocialNetwork,
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
    margin-top: 50px;

    &-title {
      color: $pigeonPost;
      font-size: 2.6rem;
      border-bottom: 1px solid;
    }

    &-subTitle {
      color: $pigeonPost;
    }
  }

  &-text {
    color: $lynch;
    line-height: 2.4;
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
