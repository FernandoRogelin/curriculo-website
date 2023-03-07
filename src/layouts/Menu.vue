<template>
  <div class="Wrapper">
    <div class="Wrapper-close" :class="{ close: disable }" @click="disable = !disable">
      <div class="Wrapper-close-hamburguer" :class="{ ex: disable }" />
    </div>
    <div class="Wrapper-menu" :class="{ disable }">
      <div class="Wrapper-menu-photo" />
      <div class="Wrapper-menu-options">
        <ul class="Wrapper-menu-options-list">
          <li :key="menu.id" v-for="menu in $t('menu')" class="Wrapper-menu-options-line">
            <div class="Wrapper-menu-options-click">
              <font-awesome-icon icon="angle-down" class="Wrapper-menu-options-click-icon" />
              <g-link :to="$tp(menu.path)" class="Wrapper-menu-options-click-link">{{ menu.name }}</g-link>
            </div>
          </li>
        </ul>
      </div>
      <div class="Wrapper-menu-languages">
        <button
          @click="changeLocale('pt')"
          class="Wrapper-menu-languages-link"
          :class="{ language: this.$i18n.locale.toString() === 'pt-br' }"
        >Português</button>
        <button
          @click="changeLocale('en')"
          class="Wrapper-menu-languages-link"
          :class="{ language: this.$i18n.locale.toString() === 'en-eu' }"
        >English</button>
      </div>
    </div>
    <div class="Wrapper-screens" :class="{ closeSubmenu: disable }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    disable: false,
  }),
  mounted: function () {
    if (window.screen.width <= 480) this.disable = true;
  },
  methods: {
    changeLocale(locale) {
      this.$router.push({
        path: this.$tp(this.$route.path, locale, true),
      });
    },
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
.Wrapper {
  height: 100%;

  &-screens {
    margin-left: 260px;
    transition: $transitionMenu;

    @media (max-width: $largeViewports) {
      margin-left: 240px;
    }

    @media (max-width: $smallViewports) {
      margin-left: 0;
    }
  }

  &-close {
    top: 0;
    z-index: 1;
    left: 224px;
    width: 36px;
    height: 36px;
    display: flex;
    cursor: pointer;
    position: fixed;
    align-items: center;
    justify-content: center;
    transition: $transitionMenu;
    background-color: $ebonyClay;

    @media (max-width: $largeViewports) {
      left: 240px;
    }

    @media (max-width: $smallViewports) {
      left: 200px;
    }

    &-hamburguer {
      width: 25px;
      height: 3px;
      position: relative;
      transition: $transitionMenu;
      background-color: $ebonyClay;

      &::after {
        top: 0;
        content: "";
        width: 25px;
        height: 3px;
        position: absolute;
        transform: rotate(42deg);
        background-color: $white;
        transition: $transitionMenu;
      }

      &::before {
        bottom: 0;
        content: "";
        width: 25px;
        height: 3px;
        position: absolute;
        background-color: $white;
        transform: rotate(-42deg);
        transition: $transitionMenu;
      }
    }
  }

  &-menu {
    width: 260px;
    padding: 16px;
    display: flex;
    height: 100vh;
    position: fixed;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    transition: $transitionMenu;
    background-color: $blackPearl;
    border-right: 2px solid $black;

    @media (max-width: $largeViewports) {
      width: 240px;
    }

    @media (max-width: $smallViewports) {
      width: 200px;
    }

    &-photo {
      width: 150px;
      height: 150px;
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

    &-options {
      width: 100%;
      margin-top: 40px;

      &-click {
        display: flex;
        width: fit-content;
        align-items: center;

        &-icon {
          transform: rotate(-90deg);
          color: rgba(255, 255, 255, 0.5);
        }

        &-link {
          width: 100%;
          display: block;
          margin-left: 10px;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.5);

          &:hover {
            color: $cornflowerBlue;
          }
        }
      }

      &-line {
        padding: 5px 0;
      }

      &-subMenu {
        &-itens {
          color: $silver;
          font-size: 1rem;
          list-style: disc;

          &:not(:last-child) {
            margin-bottom: 4px;
          }
        }
      }

      &-list {
        margin: 0;
        list-style: none;
        font-size: 1.1rem;
        padding: 0 0 0 15px;

        @media (max-width: $largeViewports) {
          font-size: 1rem;
        }

        @media (max-width: $smallViewports) {
          font-size: 0.9rem;
        }
      }
    }

    &-languages {
      margin-top: 40px;
      color: $pigeonPost;
      position: relative;

      &::after {
        top: -3px;
        width: 1px;
        left: 90px;
        content: "";
        height: 24px;
        position: absolute;
        background-color:$white;
      }

      &-link {
        border: none;
        outline: none;
        font-size: 1rem;
        cursor: pointer;
        background-color: transparent;
        color: rgba(255, 255, 255, 0.5);

        &:first-child {
          margin-right: 2rem;
        }

        @media (max-width: $smallViewports) {
          font-size: 0.8rem;
        }
      }
    }
  }
}

.active--exact {
  color: $cornflowerBlue;
}

.closeSubmenu {
  margin-left: 0;
  transition: $transitionMenu;
}

.disable {
  transition: $transitionMenu;
  transform: translateX($translateMenu);

  @media (max-width: $largeViewports) {
    transform: translateX(-240px);
  }

  @media (max-width: $smallViewports) {
    transform: translateX(-200px);
  }
}

.close {
  transition: $transitionMenu;
  transform: translateX($translateBurguerMenu);

  @media (max-width: $largeViewports) {
    transform: translateX(-240px);
  }

  @media (max-width: $smallViewports) {
    transform: translateX(-200px);
  }
}

.ex {
  background-color: $white;
  transition: $transitionMenu;

  &::before {
    bottom: 7px;
    transform: rotate(0deg);
    transition: $transitionMenu;
  }

  &::after {
    top: 7px;
    transform: rotate(0deg);
    transition: $transitionMenu;
  }
}

.language {
  color: $white;
}
</style>
