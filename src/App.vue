<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
}

a:link {
  text-decoration: none;
  color: #6d6875;
  font-size: 24px;
}
a:hover {
  text-decoration: underline;
  color: #b5838d;
}
</style>