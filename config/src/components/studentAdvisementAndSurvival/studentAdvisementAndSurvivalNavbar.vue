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
              <router-link to="studentAdvisementAndSurvival">Home</router-link>
            </li>
            <li>
              <router-link to="studentAdvisementAndSurvival_Preparation">Preparation</router-link>
            </li>
            <li>
              <router-link to="studentAdvisementAndSurvival_ChoosingACollege">College</router-link>
            </li>
            <li>
              <router-link to="studentAdvisementAndSurvival_Major">Major</router-link>
            </li>
            <li>
              <router-link to="studentAdvisementAndSurvival_TeachingAndLearningProcess">Process</router-link>
            </li>
            <li>
              <router-link to="studentAdvisementAndSurvival_Tools">Tools</router-link>
            </li>
            <li>
              <router-link to="studentAdvisementAndSurvival_FinancialAidTrap">Financial Aid</router-link>
            </li>
            <li>
              <router-link to="studentAdvisementAndSurvival_TimeManagement">Time Management</router-link>
            </li>
            <li>
              <router-link to="studentAdvisementAndSurvival_247Schedule">Schedule</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <ul class="sidenav" id="mobile-nav">
      <li>
        <router-link to="fundamentalsOfKnowledge">Home</router-link>
      </li>
      <li>
        <router-link to="fundamentalsOfKnowledge_English">English</router-link>
      </li>
      <li>
        <router-link to="fundamentalsOfKnowledge_History">History</router-link>
      </li>
      <li>
        <router-link to="fundamentalsOfKnowledge_Biology">Biology</router-link>
      </li>
      <li>
        <router-link to="fundamentalsOfKnowledge_Chemistry">Chemistry</router-link>
      </li>
      <li>
        <router-link to="fundamentalsOfKnowledge_ComputerScience">Computer Science</router-link>
      </li>
      <li>
        <router-link to="fundamentalsOfKnowledge_Mathematics">Mathematics</router-link>
      </li>
      <li>
        <router-link to="fundamentalsOfKnowledge_Physics">Physics</router-link>
      </li>
      <li>
        <router-link to="fundamentalsOfKnowledge_Philosophy">Philosophy</router-link>
      </li>
    </ul>
  </div>
</template>


