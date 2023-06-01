<template>
  <div>
    <div class="menu" @click="isOpenMenu = !isOpenMenu" />
    <div class="openMenu" :class="{ isOpenMenu }">
      <div class="openMenu-animation">
        <ul>
          <li
            :key="menu.id"
            v-for="menu in $t('menu')"
            class="openMenu-animation-item"
            @click="scrollToElement(menu.scroll)"
          >
            {{ menu.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Hamburguer',
    data: () => ({
      isOpenMenu: false
    }),
    methods: {
      scrollToElement(id) {
        const el = document.getElementById(id)

        if (el) el.scrollIntoView({ behavior: 'smooth' })
        this.isOpenMenu = false
      }
    },
  }
</script>

<style lang="scss" scoped>
.isOpenMenu {
  grid-template-rows: 1fr !important;
}
.openMenu {
  left: 50%;
  top: 52px;
  z-index: 2;
  width: 86%;
  display: grid;
  position: absolute;
  grid-template-rows: 0fr;
  background-color: #ECEFF1;
  transform: translate(-50%, 0);
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
  transition: grid-template-rows 0.3s ease-in-out;

  &-animation {
    overflow: hidden;
    padding: 0 1rem;

    & > ul {
      list-style-type: none;
    }

    &-item {
      color: #333333;
      padding: 0.4rem 0;

      &:not(:last-child) {
        border-bottom: 1px solid #333;
      }
    }
  }
}
.menu {
  width: 30px;
  height: 2px;
  display: none;
  position: relative;
  background-color: $white;

  &::after {
    top: -8px;
    content: '';
    width: 30px;
    height: 2px;
    position: absolute;
    background-color: $white;
  }

  &::before {
    content: '';
    width: 30px;
    height: 2px;
    bottom: -8px;
    position: absolute;
    background-color: $white;
  }

  @media (max-width: $largeViewports) {
    display: block;
  }
}
</style>
