<template>
  <div id="app">
    <header id="header">
      <h1>Catch a Ride</h1>
      <nav>
        <router-link to="/"><i class="fas fa-home"></i></router-link>
        <router-link to="/profile"><i class="fas fa-user"></i></router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style>
body {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 13pt;
  margin: 0px 200px;
}

#header {
  padding: 10px 300px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: fixed;
  z-index: 10000;
  left: 50%;
  transform: translate(-50%, 0);
  background: #db87d0;
  text-align: center;
}

nav {
  margin: 1px 2px 1px 300px;
  display: flex;
  justify-content: center;
}

h1 {
  color: #fff;
  font-size: 24px;
  text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
}

h2 {
  font-size: 12px;
}

#header .fas {
  font-size: 25px;
  color: #fff;
  width: 50px;
}

.pure-button-primary {
  background-color: #a2abaf;
}
</style>
