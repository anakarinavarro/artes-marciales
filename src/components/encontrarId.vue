<template>
  <div class="container">
    <div class="titulo card shadow-lg p-4">
      <h2>Buscar un Luchador por su ID</h2>
      <form action="" @submit.prevent="findId">
        <div class="input-group mb-3">
          <input
            v-model="id"
            type="text"
            class="form-control"
            placeholder="Ingrese un ID"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    id: '',
  }),
  methods: {
    findId(id) {
      this.$router.push(`/Luchadores/${this.id}`);
    },
  },
};
</script>

<style>
.titulo {
  text-align: center;
}
</style>
