<template>
<header>
  <Title></Title>
  <Menu v-if="!mobile"></Menu>
  <MobileMenu v-if="mobile"></MobileMenu>
</header>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Title from '../components/Title.vue'
import Menu from '../components/Menu.vue'
import MobileMenu from '../components/MobileMenu.vue'


export default defineComponent({
  components: {
    Title,
    Menu,
    MobileMenu
  },
  setup() {

    const mobile = ref(false);

    function isMobile() {
      if(window.innerWidth < 1050) {
        mobile.value = true;
      } else mobile.value = false;
    }

    onMounted(() => {

      isMobile();

      window.addEventListener("resize", function () {
        isMobile();
      });

    })

    return {
      mobile
    }
  }
});
</script>

<style>

header {
  position: absolute;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* padding: 3rem; */
  box-sizing: border-box;
  background-color: transparent;
}

</style>
