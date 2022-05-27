<template>
  <div class="container">
    <div class="card shadow-lg p-4">
      <h1 class="title-list">Listado de Luchadores</h1>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="idolo in idolos"
          :key="idolo.id"
          @click="findIdolo(idolo.id)"
        >
          {{ idolo.nombre }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    idolos: [],
  }),
  created() {
    fetch('/idolos.json')
      .then((res) => res.json())
      .then((idolos) => {
        this.idolos = idolos;
      });
    console.log('idolos');
  },
  methods: {
    findIdolo(id) {
      this.$router.push(`/Luchadores/${id}`);
    },
  },
};
</script>

<style></style>
