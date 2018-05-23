<template>
  <div id="app">
    <appLauncher />
    <div class="routing" v-if="this.$route.path == '/fundamentalsOfKnowledge'">
      <fundamentalsOfKnowledgeNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/fundamentalsOfKnowledge_Biology'">
      <fundamentalsOfKnowledgeNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/fundamentalsOfKnowledge_Chemistry'">
      <fundamentalsOfKnowledgeNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/fundamentalsOfKnowledge_English'">
      <fundamentalsOfKnowledgeNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/fundamentalsOfKnowledge_History'">
      <fundamentalsOfKnowledgeNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/fundamentalsOfKnowledge_ComputerScience'">
      <fundamentalsOfKnowledgeNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/fundamentalsOfKnowledge_Mathematics'">
      <fundamentalsOfKnowledgeNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/fundamentalsOfKnowledge_Physics'">
      <fundamentalsOfKnowledgeNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/fundamentalsOfKnowledge_Philosophy'">
      <fundamentalsOfKnowledgeNavbar />
    </div>
    <div class="routing" v-if="this.$route.path == '/HumanEvolution'">
      <fundamentalsOfKnowledgeNavbar />
    </div>
    <div class="routing" v-if="this.$route.path == '/studentAdvisementAndSurvival'">
      <studentAdvisementAndSurvivalNavbar />
    </div>
    <div class="routing" v-if="this.$route.path == '/studentAdvisementAndSurvival_247Schedule'">
      <studentAdvisementAndSurvivalNavbar />
    </div>
    <div class="routing" v-if="this.$route.path == '/studentAdvisementAndSurvival_ChoosingACollege'">
      <studentAdvisementAndSurvivalNavbar />
    </div>
    <div class="routing" v-if="this.$route.path == '/studentAdvisementAndSurvival_FinancialAidTrap'">
      <studentAdvisementAndSurvivalNavbar />
    </div>
    <div class="routing" v-if="this.$route.path == '/studentAdvisementAndSurvival_Major'">
      <studentAdvisementAndSurvivalNavbar />
    </div>
    <div class="routing" v-if="this.$route.path == '/studentAdvisementAndSurvival_Preparation'">
      <studentAdvisementAndSurvivalNavbar />
    </div>
    <div class="routing" v-if="this.$route.path == '/studentAdvisementAndSurvival_TeachingAndLearningProcess'">
      <studentAdvisementAndSurvivalNavbar />
    </div>
    <div class="routing" v-if="this.$route.path == '/studentAdvisementAndSurvival_TimeManagement'">
      <studentAdvisementAndSurvivalNavbar />
    </div>
    <div class="routing" v-if="this.$route.path == '/studentAdvisementAndSurvival_Tools'">
      <studentAdvisementAndSurvivalNavbar />
    </div>
    <div class="routing" v-if="this.$route.path == '/teaching_learning2'">
      <studentAdvisementAndSurvivalNavbar />
    </div>
    <div class="routing" v-if="this.$route.path == '/associative_memory'">
      <studentAdvisementAndSurvivalNavbar />
    </div>
    <div class="routing" v-if="this.$route.path == '/OnEducation'">
      <OnEducationNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/OnEducation_Biology'">
      <OnEducationNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/OnEducation_Chemistry'">
      <OnEducationNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/OnEducation_English'">
      <OnEducationNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/OnEducation_History'">
      <OnEducationNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/OnEducation_ComputerScience'">
      <OnEducationNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/OnEducation_Mathematics'">
      <OnEducationNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/OnEducation_Physics'">
      <OnEducationNavbar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/OnEducation_Philosophy'">
      <OnEducationNavbar />
    </div>
    <div class="routing" v-if="this.$route.path == '/OnEducationHumanEvolution'">
      <OnEducationNavbar />
    </div>
    <div class="routing" v-if="this.$route.path == '/logicPhilosophyAndScience'">
      <logicPhilosophyAndScienceNavBar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/logicPhilosophyAndScience_Biology'">
      <logicPhilosophyAndScienceNavBar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/logicPhilosophyAndScience_Chemistry'">
      <logicPhilosophyAndScienceNavBar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/logicPhilosophyAndScience_English'">
      <logicPhilosophyAndScienceNavBar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/logicPhilosophyAndScience_History'">
      <logicPhilosophyAndScienceNavBar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/logicPhilosophyAndScience_ComputerScience'">
      <logicPhilosophyAndScienceNavBar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/logicPhilosophyAndScience_Mathematics'">
      <logicPhilosophyAndScienceNavBar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/logicPhilosophyAndScience_Physics'">
      <logicPhilosophyAndScienceNavBar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/logicPhilosophyAndScience_Philosophy'">
      <logicPhilosophyAndScienceNavBar />
    </div>
    <div class="routing" v-if="this.$route.path == '/logicPhilosophyAndScienceHumanEvolution'">
      <logicPhilosophyAndScienceNavBar />
    </div>
    <div class="routing" v-if="this.$route.path == '/beautyEqualTruth'">
      <logicArtAndTheHumanitiesNavBar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/complexSystem'">
      <logicArtAndTheHumanitiesNavBar />
    </div> 
    <div class="routing" v-if="this.$route.path == '/logicArtAndTheHumanities'">
      <logicArtAndTheHumanitiesNavBar />
    </div>
    <div class="routing" v-if="this.$route.path == '/theater'">
      <logicArtAndTheHumanitiesNavBar />
    </div>

    <div>
      <router-view/>
    </div>
    <!-- Section: Follow -->
    <section class="section section-follow white black-text center z-depth-5">
      <div class="container ">
        <div class="row ">
          <div class="col s12 ">
            <h4>Follow Dr. Oscar H Criner</h4>
            <p>Follow Dr. Oscar H Criner on social media</p>
            <a href="https://www.facebook.com/oscarh.criner" target="_blank" class="blue-text">
              <i class="fab fa-facebook fa-4x"></i>
            </a>
            <a href="https://plus.google.com/u/0/116761464836507943719" target="_blank" class="red-text">
              <i class="fab fa-google-plus fa-4x"></i>
            </a>
            <a href="https://twitter.com/ohcriner" target="_blank" class="blue-text">
              <i class="fab fa-twitter fa-4x"></i>
            </a>
            <a href="https://www.pinterest.com/ocriner/?eq=oscar%20cri&etslf=15177" target="_blank" class="red-text">
              <i class="fab fa-pinterest fa-4x"></i>
            </a>
            <a href="https://www.linkedin.com/in/oscar-h-criner-94515514" target="_blank" class="blue-text">
              <i class="fab fa-linkedin fa-4x"></i>
            </a>
          </div>
        </div>
      </div>
  </section>
  </div>
</template>

<script>
import appLauncher from './components/appLauncher';
import fundamentalsOfKnowledgeNavbar from './components/fundamentalsOfKnowledge/fundamentalsOfKnowledgeNavbar';
import Home from './components/Home';
import studentAdvisementAndSurvivalNavbar from './components/studentAdvisementAndSurvival/studentAdvisementAndSurvivalNavbar';
import OnEducationNavbar from './components/OnEducation/OnEducationNavbar';
import logicPhilosophyAndScienceNavBar from './components/logicPhilosophyAndScience/logicPhilosophyAndScienceNavBar';
import logicArtAndTheHumanitiesNavBar from './components/logicArtAndTheHumanities/logicArtAndTheHumanitiesNavBar';

export default {
  name: 'App',
  components: {
    fundamentalsOfKnowledgeNavbar,
    appLauncher,
    Home,
    studentAdvisementAndSurvivalNavbar,
    OnEducationNavbar,
    logicPhilosophyAndScienceNavBar,
    logicArtAndTheHumanitiesNavBar
  }
}

</script>

<style scoped>
v-footer{
  background-color: grey;
}
h5{
  color: black;
}
</style>

<style>
a img{
  width:80px;
  height:80px;
}
.tsu h2{
  color:maroon;
}
.container{
  width: 100%;
}
</style>