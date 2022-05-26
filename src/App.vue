<template>
  <div id="app">
    <nav class="nav">
      <div class="home">
        <router-link to="/">Home</router-link>
      </div>
      <ul class="links">
        <li class="buscador">
            <router-link to="/Buscador">Buscador de Luchadores</router-link> 
        </li>
        <li class="luchador">
          <router-link to="/Luchadores"> Lista de Luchadores</router-link>
        </li>
      </ul> 
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
 name: "App",
}
</script>

<style>

.links{
  display: flex;
  flex-direction: row;
  justify-content: center; 
}
.home{
  display: flex;
  flex-direction: row; 
  justify-content: center;
  margin-right: 20px;
}

.buscador{
  margin-right: 40px;
  
}
.luchador{
  margin-left: 40px;
}
</style>
