<template>
  <div class="container">
    <div class="buscador card shadow-lg p-4">
      <div v-if="idolo">
        <h1>El Luchador Encontrado es: {{ $route.params.id }}</h1>
        <p>Nombre: {{ idolo.nombre }}</p>
        <img :src="idolo.imgSrc" alt="" width="300px" height="300px" />
      </div>
      <div v-if="!idolo">
        <h1>No se Encontro ningun Resultado, Intentelo nuevamente</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    idolo: {
      nombre: '',
      imgScr: '',
    },
  }),
  created() {
    fetch('/idolos.json')
      .then((response) => response.json())
      .then((idolo) => {
        this.idolo = idolo.find((idolo) => idolo.id === this.$route.params.id) || null;
      });
  },
};
</script>

<style></style>
