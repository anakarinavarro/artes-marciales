<template>
  <div class="list">
    <h1 class="title-list">Listado de Luchadores</h1>
    <ul>
      <li
        v-for="idolo in idolos"
        :key="idolo.id"
        @click="findIdolo(idolo.id)"
      >
        {{ idolo.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    
    data: () => ({
    idolos: [],
  }),
  created() {
    fetch("/idolos.json")
      .then((res) => res.json())
      .then((idolos) => {
        this.idolos = idolos;
      });
      console.log("idolos")
  },
  methods: {
    findIdolo(id) {
      this.$router.push(`/Luchadores/${id}`);
    },
  },
}
</script>

<style>

</style>