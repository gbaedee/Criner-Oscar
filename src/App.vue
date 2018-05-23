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
 
    <!-- Section: Slider -->
  <section class="slider">
    <ul class="slides">
      <li>
        <img src="./assets/images/tsu.jpg">
        <!-- random image -->
        <div class="caption tsu center-align">
          <h2>Texas Southern University</h2>
          <h5 class="grey-text hide-on-small-only">
            Cleburne, Houston, TX 77004 | (713) 313-7011
          </h5>
        </div>
      </li>
      <li>
        <img src="./assets/images/spelmanCollege.jpg">
        <!-- random image -->
        <div class="caption white-text spelmanCollege center-align">
          <h2>Spelman College</h2>
          <h5 class="blue-text  hide-on-small-only">
            350 Spelman Lane SW, Atlanta, GA 30314 | (404) 681-3643
          </h5>
        </div>
      </li>
      <li>
        <img src="./assets/images/howardUniversity.png">
        <!-- random image -->
        <div class="caption red-text center-align">
          <h2>Howard University</h2>
          <h5 class="blue-text  hide-on-small-only">
            2400 Sixth Street NW, Washington, DC 20059 | (202) 806-6100
          </h5>
        </div>
      </li>
            <li>
        <img src="./assets/images/morehouseCollege.jpg">
        <!-- random image -->
        <div class="caption tsu center-align">
          <h2>Morehouse College</h2>
          <h5 class="grey-text hide-on-small-only">
            830 Westview Drive SW, Atlanta, GA 30314 | (470) 639-0999
          </h5>
        </div>
      </li>
      <li>
        <img src="./assets/images/hamptonUniversity.jpg">
        <!-- random image -->
        <div class="caption center-align">
          <h2>Hampton University</h2>
          <h5 class="blue-text hide-on-small-only">
            Tyler Street, Hampton, VA 23668 | (757) 727-5000
          </h5>
        </div>
      </li>
      <li>
        <img src="./assets/images/XavierUniversityLouisiana.jpg">
        <!-- random image -->
        <div class="caption left-align">
          <h2>Xavier University Of Louisiana</h2>
          <h5 class="darken-3 orange-text hide-on-small-only">
            1 Drexel Drive, New Orleans, LA 70125 | (504) 486-7411
          </h5>
        </div>
      </li>
      <li>
        <img src="./assets/images/TuskegeeUniversity.jpg">
        <!-- random image -->
        <div class="caption red-text right-align">
          <h2>Tuskegee University</h2>
          <h5 class="darken-3 orange-text hide-on-small-only">
            PO Box 1239, Tuskegee, AL 36088 | (334) 727-8501
          </h5>
        </div>
      </li>
      <li>
        <img src="./assets/images/floridaAMUniversity.jpg">
        <!-- random image -->
        <div class="caption green-text center-align">
          <h2>Florida A&M University</h2>
          <h5 class="orange-text hide-on-small-only">
            Lee Hall, Suite 400, Tallahassee, FL 32307 | (850) 599-3000
          </h5>
        </div>
      </li>
      <li>
        <img src="./assets/images/NorthCarolinaATState.jpg">
        <!-- random image -->
        <div class="caption orange-text text-darker right-align">
          <h2>North Carolina A&T State University</h2>
          <h5 class="blue-text hide-on-small-only">
            1601 E. Market Street, Greensboro, NC 27411 | (336) 334-7500
          </h5>
        </div>
      </li>
      <li>
        <img src="./assets/images/bowieStateUniversity.jpg">
        <!-- random image -->
        <div class="caption black-text left-align">
          <h2>Bowie State University</h2>
          <h5 class="orange-text text-darken-3 hide-on-small-only">
            14000 Jericho Park Road, Bowie, MD 20715 | (301) 860-4000
          </h5>
        </div>
      </li>
      <li>
        <img src="./assets/images/claflin.jpg">
        <!-- random image -->
        <div class="caption red-text text-accent-4 right-align">
          <h2>Claflin University</h2>
          <h5 class="orange-text hide-on-small-only">
            400 Magnolia Street, Orangeburg, SC 29115 | (803) 535-5000
          </h5>
        </div>
      </li>
    </ul>
  </section>
  

    <div>
      <router-view/>
    </div>
    <div class="fixed-action-btn">
      
      <a href="/" class="btn-floating red btn-large"><i class="large material-icons tooltipped" data-position="left" data-tooltip="Home">menu</i></a>
        <ul>
          <li><a href="public_Lectures" class="btn-floating grey btn-small"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Public Lectures">public</i></a></li>
          <li><a href="essays_and_Poetry" class="btn-floating brown btn-small"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Essays and Poetry">border_color</i></a></li>
          <li><a href="business" class="btn-floating orange btn-small"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Business">business_center</i></a></li>
          <li><a href="literature" class="btn-floating amber btn-small"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Literature">local_library</i></a></li>
          <li><a href="logic_Law_and_Justice" class="btn-floating yellow btn-small"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Logic, Law and Justice">work</i></a></li>
          <li><a href="spirituality" class="btn-floating lime btn-small"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Spirituality">texture</i></a></li>
          <li><router-link class="btn-floating green btn-small" to="logicArtAndTheHumanities"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Logic, Art and Humanity">color_lens</i></router-link></li>
          <li><router-link class="btn-floating teal btn-small" to="logicPhilosophyAndScience"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Logic, Philosophy And Science">settings_input_component</i></router-link></li>
          <li><router-link class="btn-floating cyan btn-small" to="OnEducation"><i class="small material-icons tooltipped" data-position="left" data-tooltip="On Education">school</i></router-link></li>
          <li><router-link class="btn-floating indigo btn-small" to="ComputationalFinanceAndEconomics"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Computational Finance and Economics">computer</i></router-link></li>
          <li><router-link class="btn-floating purple btn-small" to="ComputationalEnvironmentalScience"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Computional Environmental Science">gps_fixed</i></router-link></li>
          <li><router-link class="btn-floating pink btn-small" to="studentAdvisementAndSurvival"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Student Advisement and Survival">account_balance</i></router-link></li>
          <li><router-link class="btn-floating black btn-small" to="fundamentalsOfKnowledge"><i class="small material-icons tooltipped" data-position="left" data-tooltip="Fundamentals of Knowledge">book</i></router-link></li>
        </ul>
      </div>

      <!-- Section: Follow -->
  <section class="section section-follow grey white-text center z-depth-5">
    <div class="container ">
      <div class="row ">
        <div class="col s12 ">
          <h4>Follow Dr. Oscar H Criner</h4>
          <p>Follow Dr. Oscar H Criner on social media</p>
          <a href="https://www.facebook.com/oscarh.criner" class="white-text">
            <i class="fab fa-facebook fa-4x"></i>
          </a>
          <a href="#" class="white-text">
            <i class="fab fa-twitter fa-4x"></i>
          </a>
          <a href="https://www.linkedin.com/in/oscar-h-criner-94515514" class="white-text">
            <i class="fab fa-linkedin fa-4x"></i>
          </a>
          <a href="https://plus.google.com/u/0/116761464836507943719" class="white-text">
            <i class="fab fa-google-plus fa-4x"></i>
          </a>
          <a href="https://www.pinterest.com/ocriner/?eq=oscar%20cri&etslf=15177" class="white-text">
            <i class="fab fa-pinterest fa-4x"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section: Contact -->
  <section id="contact" class="section section-contact scrollspy white lighten-4">
    <div class="container">
      <div class="row">
        <div class="col s12 m6 " >
          <div class="card-panel grey white-text center z-depth-5">
            <i class="material-icons">email</i>
            <h5>Get In Contact With Me</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <ul class="collection with-header z-depth-5">
            <li class="collection-header">
              <h4 class="center">Location</h4>
            </li>
            <li class="collection-item center">Dr. Oscar H Criner</li>
            <li class="collection-item center">3100 Cleburne St. Houston, Texas 77004</li>
            <li class="collection-item center">(713) 313-7923</li>
          </ul>
        </div>
        <div class="col s12 m6 ">
          <div class="card-panel white lighten-3 z-depth-5">
            <h5>Email Me</h5>
            <div class="input-field">
              <input type="text" placeholder="Name">
            </div>
            <div class="input-field">
              <input type="text" placeholder="Email">
            </div>
            <div class="input-field">
              <input type="text" placeholder="Phone">
            </div>
            <div class="input-field">
              <textarea class="materialize-textarea" placeholder="Enter Message"></textarea>
            </div>
            <input type="submit" value="Submit" class="btn grey">
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- Footer -->
    <v-footer class="grey black-text center">
    
      <p class="flow-text">Created by <a class="center" href="https://greatbaedee.com" target="_blank"><img src="./assets/images/dahlia.png"></a> &copy; 2018 </p>
    </v-footer>
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