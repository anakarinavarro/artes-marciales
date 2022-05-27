<template>
  <div class="home container">
    <Inicio />
  </div>
</template>

<script>
import Inicio from '@/components/inicio.vue';

export default {
  components: {
    Inicio,
  },
};
</script>
<style scoped>
.home {
  display: flex;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  margin-top: 10%;
}
</style>
