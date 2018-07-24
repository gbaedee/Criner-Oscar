<template>
  <div class="navbar">
         <!-- Navbar -->
  <div class="navbar-fixed">
    <nav class="grey">
      <div class="container">
        <div class="nav-wrapper">
          <a href="#" data-target="mobile-nav" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <router-link to="logicArtAndTheHumanities">Home</router-link>
            </li>
            <li>
              <router-link to="theater">Theater</router-link>
            </li>
            <li>
              <router-link to="complexSystem">Complex System</router-link>
            </li>
            <li>
              <router-link to="beautyEqualTruth">Beauty Equal Truth</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <ul class="sidenav" id="mobile-nav">
      <li>
            <router-link to="logicArtAndTheHumanities">Home</router-link>
        </li>
        <li>
            <router-link to="theater">Theater</router-link>
        </li>
        <li>
            <router-link to="complexSystem">Complex System</router-link>
        </li>
        <li>
            <router-link to="beautyEqualTruth">Beauty Equal Truth</router-link>
        </li>
    </ul>
  </div>
</template>

