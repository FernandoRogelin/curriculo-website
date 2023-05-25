<template>
  <header class="Wrapper">
    <div class="Wrapper-content">
      <ul class="Wrapper-list">
        <li
          :key="menu.id"
          class="Wrapper-list-link"
          v-for="menu in $t('menu')"
          @click="scrollToElement(menu.scroll)"
        >
          {{ menu.name }}
        </li>
      </ul>
      <div class="Wrapper-languages">
        <button
          @click="changeLocale('pt')"
          class="Wrapper-languages-link"
          :class="{ language: this.$i18n.locale.toString() === 'pt-br' }"
        >Português</button>
        <button
          @click="changeLocale('en')"
          class="Wrapper-languages-link"
          :class="{ language: this.$i18n.locale.toString() === 'en-eu' }"
        >English</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    changeLocale(locale) {
      this.$router.push({
        path: this.$tp(this.$route.path, locale, true),
      });
    },
    scrollToElement(id) {
      const el = document.getElementById(id)

      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
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
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  position: sticky;
  column-gap: 30px;
  padding: 16px 4rem;
  align-items: center;
  justify-content: center;
  transition: $transitionMenu;
  background-color: $blackPearl;

  @media (max-width: $largeViewports) {
  }

  @media (max-width: $smallViewports) {
  }

  &-content {
    width: 74rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-list {
    margin: 0;
    display: flex;
    list-style: none;
    column-gap: 15px;
    font-size: 1.1rem;

    @media (max-width: $largeViewports) {
      font-size: 1rem;
    }

    @media (max-width: $smallViewports) {
      display: none;
      font-size: 0.9rem;
    }

    &-link {
      width: 100%;
      color: $white;
      display: block;
      cursor: pointer;
      position: relative;
      text-decoration: none;

      &:hover {
        color: $cornflowerBlue;
      }

      &:not(:last-child) {
        &::after {
          top: 2px;
          width: 1px;
          content: "";
          right: -8px;
          height: 16px;
          position: absolute;
          background-color:$white;
        }
      }
    }
  }

  &-languages {
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

.active--exact {
  color: $cornflowerBlue;
}

.language {
  color: $white;
}
</style>
