<template>
  <div class="Wrapper">
    <div class="Wrapper-close" :class="{ close:disable }" @click="disable = !disable">
      <div class="Wrapper-close-hamburguer" :class="{ ex:disable }" />
    </div>
    <div class="Wrapper-menu" :class="{ disable }">
      <div class="Wrapper-menu-photo" />
      <div class="Wrapper-menu-options">
        <ul class="Wrapper-menu-options-list">
          <li :key="menu.id" v-for="menu in menus" class="Wrapper-menu-options-line">
            <div class="Wrapper-menu-options-click">
              <font-awesome-icon
                icon="angle-down"
                class="Wrapper-menu-options-click-icon"
                :class="{ rotate:menu.path === currentRoute }"
              />
              <g-link :to="menu.path" class="Wrapper-menu-options-click-link">{{ menu.name }}</g-link>
            </div>
            <ul
              class="Wrapper-menu-options-list-subMenu"
              v-if="menu.subMenu && menu.path === currentRoute"
            >
              <li
                :key="subMenu.id"
                v-for="subMenu in menu.subMenuOptions"
                class="Wrapper-menu-options-subMenu-itens"
              >{{ subMenu.name }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="Wrapper-screens" :class="{ closeSubmenu:disable }">
      <slot />
    </div>
  </div>
</template>

<script>
import Menu from "~/utils/Menu";

export default {
  name: "Menu",
  data: () => ({
    menus: Menu,
    disable: false,
    currentRoute: window.location.pathname,
  }),
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
  }

  &-close {
    top: 40px;
    left: 260px;
    width: 36px;
    height: 36px;
    display: flex;
    cursor: pointer;
    position: fixed;
    align-items: center;
    justify-content: center;
    transition: $transitionMenu;
    background-color: $ebonyClay;

    &-hamburguer {
      width: 25px;
      height: 3px;
      position: relative;
      border-radius: 25%;
      transition: $transitionMenu;
      background-color: $ebonyClay;

      &::after {
        top: 0;
        content: "";
        width: 25px;
        height: 3px;
        position: absolute;
        border-radius: 25%;
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
        border-radius: 25%;
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

    &-photo {
      width: 150px;
      height: 150px;
      border-radius: 100%;
      background-size: cover;
      border: 4px solid $tundora;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("../images/Photo.jpg");
    }

    &-options {
      width: 100%;
      margin-top: 40px;

      &-click {
        display: flex;
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
  transform: translateX($translateMenu);
  transition: $transitionMenu;
}

.close {
  transform: translateX($translateMenu);
  transition: $transitionMenu;
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

.rotate {
  transform: rotate(0deg);
}
</style>