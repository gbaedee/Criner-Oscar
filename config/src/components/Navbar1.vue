<template>
  <div class="navbar">
         <!-- Navbar -->
  <div class="navbar-fixed">
    <nav class="blue">
      <div class="container">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Dr. Oscar H Criner</a>
          <a href="#" data-target="mobile-nav" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="fundamentals_of_Knowledge">Home</a>
            </li>
            <li>
              <a href="fundamentals_of_Knowledge_English">English</a>
            </li>
            <li v-if="!isLoggedIn">
              <router-link to="/login">Login</router-link>
            </li>
            <li>
              <a href="fundamentals_of_Knowledge_History">History</a>
            </li>
            <li>
              <a href="fundamentals_of_Knowledge_Biology">Biology</a>
            </li>
            <li>
              <a href="fundamentals_of_Knowledge_Chemistry">Chemistry</a>
            </li>
            <li>
              <a href="fundamentals_of_Knowledge_ComputerScience">Computer Science</a>
            </li>
            <li>
              <a href="fundamentals_of_Knowledge_Mathematics">Mathematics</a>
            </li>
            <li>
              <a href="fundamentals_of_Knowledge_Physics">Physics</a>
            </li>
            <li>
              <a href="fundamentals_of_Knowledge_Philosophy">Philosophy</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <ul class="sidenav" id="mobile-nav">
    <li>
      <a href="fundamentals_of_Knowledge">Home</a>
    </li>
    <li>
      <a href="fundamentals_of_Knowledge_English">English</a>
    </li>
    <li>
      <a href="fundamentals_of_Knowledge_History">History</a>
    </li>
    <li>
      <a href="fundamentals_of_Knowledge_Chemistry">Chemistry</a>
    </li>
    <li>
      <a href="fundamentals_of_Knowledge_Biology">Biology</a>
    </li>
    <li>
      <a href="fundamentals_of_Knowledge_ComputerScience">Computer Science</a>
    </li>
    <li>
      <a href="fundamentals_of_Knowledge_Mathematics">Mathematics</a>
    </li>
    <li>
      <a href="fundamentals_of_Knowledge_Physics">Physics</a>
    </li>
    <li>
      <a href="fundamentals_of_Knowledge_Philosophy">Philosophy</a>
    </li>
  </ul>
  </div>
</template>