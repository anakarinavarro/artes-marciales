<template>
  <div id="app">
    <nav class="nav navbar navbar-expand-lg navbar-light bg-light mb-4">
      <ul class="links navbar-nav">
        <li class="home nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="buscador nav-item">
          <router-link class="nav-link" to="/Buscador">Buscador de Luchadores</router-link>
        </li>
        <li class="luchador nav-item">
          <router-link class="nav-link" to="/Luchadores"> Lista de Luchadores</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>

<style></style>
