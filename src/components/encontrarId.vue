<template>
  <div class="titulo">
      <h1>Buscar un Luchador por su ID</h1>
      <form action="" @submit.prevent="findId">
          <label for="">Ingrese un ID</label>
          <input type="texto"
          v-model="id">
          <button type="submit">Buscar</button>
      </form>

  </div>
</template>

<script>
export default {
    data: ()=>({
        id:""
    }),
    methods:{
        findId(id){
            this.$router.push(`/Luchadores/${this.id}`)
    },
    }
}
</script>

<style>
.titulo{
    text-align: center;
}
</style>