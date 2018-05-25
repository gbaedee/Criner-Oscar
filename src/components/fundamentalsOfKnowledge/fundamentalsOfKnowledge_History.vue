<template>
  <!-- Section: Icon Boxes -->
  <div>
  <section class="section section-icons black  center">
    <div class="container">
      <div class="row">
        <div class="col s12 m8">
          <div class="card-panel z-depth-5">
            <h4 class="left-align">History</h4>
            <figure class="snip1543">
            <img src="../../assets/images/WroldMap.gif" class="responsive imglarge">
              <figcaption>
                <p>
                  Map of the World produced by the U.S. Central Intelligence Agency
                </p>
              </figcaption>
            </figure>
            <p class="left-align">
             History is a grand adventure story. It is an integrated story, a 
             holistic story, with emphasis on the "whole." All of the people of 
             the world are included in  "World History" and it  is one of the most 
             important college subjects. We live in a global society and have much 
             more interaction with people from around the world than at any other 
             time in history.  Colleges generally have a course or two in history 
             in the core curricula. What is truly important is to develop an 
             understanding and an appreciation of  all the peoples of the world  
             and their civilizations.  Find the course that covers world 
             civilizations and take it.   
            </p>
            <p class="left-align">
             The United States of America is a special place whose development 
             is unparalleled in history. But the United States did not and could 
             not have developed in a vacuum. It had to interact with the rest of 
             the world.  Students must know about this interaction both from our 
             perspective and from the perspective of the other peoples of the 
             world. 
            </p>
            <p class="left-align">
              History is the study of what happened in the past as a set of facts 
              and as the context for the interpretation of those facts. The 
              context of history is a logical system that established the 
              capability to answer the question "Why?" about a historical 
              situation. The answer to the question "Why?" is a statement of the 
              type "Because..." The "Why ... Because" inferential scheme depends 
              upon the assumptions that  are made about the processes of history.  
              Those assumptions  have been the cause of  untold war and 
              devastation. 
            </p>
            <p class="left-align">
             <ol>
                  <li>
                    Are the processes of history simply the result of the actions 
                    of powerful individuals?
                  </li>
                  <li>
                    Are the processes of history the result of the actions of 
                    specific groups or classes of people?
                  </li>
                  <li>
                    Are the processes of history the result of the interactions 
                    of cultures?
                  </li>
                  <li>
                    Are the processes of history part of a more general 
                    socio-biological process?
                  </li>
                </ol>
            </p>
            <p class="left-align">
               History is probably the result of all of these influences, 
               which is what makes history such a complex subject. 
            </p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="card-panel z-depth-5">
            <h6 class="left-align"> The Congo Trilogy </h6>
            <p class="left-align">
                <ol>
                  <li>
                    Joseph Conrad, <i>Heart of Darkness</i>
                  </li>
                  <li>
                    John Hope Franklin, <i> The Biography of George Washington 
                    Williams</i>, Chicago, IL: The University of Chicago Press,1985
                  </li>
                  <li>
                    Adam Hochshield, <i>King Leopold's Ghost</i>
                  </li>
                </ol>
            </p>
            <h6 class="left-align">
              Views of World History
            </h6>
            <p class="left-align">
                <ol>
                  <li>
                    Chinwezu, <i>The West and The Rest of Us</i>
                  </li>
                  <li>
                    Will and Ariel Durant, <i>The Story of Civilization</i> New York: 
                    Simon and Schuster (Many Volumes)
                  </li>
                  <li>
                    George G. M. James, <i>Stolen Legacy</i>,San Francisco, CA: Julian 
                    Richardson Associates, Publishers, 1976 (New York: 
                    Philosophical Library), 1954
                  </li>
                  <li>
                    Herbert J. Muller, <i>The Uses of the Past</i>, Oxford, UK: Oxford 
                    University Press, 1952
                  </li>
                  <li>
                    Morton Smith, <i>The Ancient Greeks</i>, Ithica, NY: Cornell 
                    University Press, 1960
                  </li>
                  <li>
                    Arnold Toynbee, <i> A Study of History </i>, New York: Weathervane 
                    Books (Abridged One-Volume Edition), 1979
                  </li>
                  <li>
                    Chancellor Williams,<i> The Destruction of Black Civilization </i>, 
                    Chicago, IL: Third World Press, 1974
                  </li>
                </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<style scoped>
.imglarge{
  width: 100%;
  height: auto;
}

.snip1543 {
  background-color: #fff;
  color: #ffffff;
  display: inline-block;
  margin: 10px 5px;
  overflow: hidden;
  position: relative;
  text-align: left ;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.snip1543 *,
.snip1543 *:before,
.snip1543 *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;
}

.snip1543 img {
  backface-visibility: hidden;
  max-width: 100%;
  vertical-align: top;
}

.snip1543:before,
.snip1543:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  background-color: black;
  opacity: 0.5;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;
}

.snip1543:before {
  -webkit-transform: skew(30deg) translateX(-80%);
  transform: skew(30deg) translateX(-80%);
}

.snip1543:after {
  -webkit-transform: skew(-30deg) translateX(-70%);
  transform: skew(-30deg) translateX(-70%);
}

.snip1543 figcaption {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  bottom: 0;
  padding: 25px 40% 25px 20px;
}

.snip1543 figcaption:before,
.snip1543 figcaption:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: red;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  content: '';
  opacity: 0.5;
  z-index: -1;
}

.snip1543 figcaption:before {
  -webkit-transform: skew(30deg) translateX(-100%);
  transform: skew(30deg) translateX(-100%);
}

.snip1543 figcaption:after {
  -webkit-transform: skew(-30deg) translateX(-90%);
  transform: skew(-30deg) translateX(-90%);
}

.snip1543 p {
  opacity: 0;
  text-align: left;
  bottom: 5%;
}

.snip1543:hover p,
.snip1543.hover p {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 0.9;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.snip1543:hover:before,
.snip1543.hover:before {
  -webkit-transform: skew(30deg) translateX(-20%);
  transform: skew(30deg) translateX(-20%);
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

.snip1543:hover:after,
.snip1543.hover:after {
  -webkit-transform: skew(-30deg) translateX(-10%);
  transform: skew(-30deg) translateX(-10%);
}

.snip1543:hover figcaption:before,
.snip1543.hover figcaption:before {
  -webkit-transform: skew(30deg) translateX(-40%);
  transform: skew(30deg) translateX(-40%);
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

.snip1543:hover figcaption:after,
.snip1543.hover figcaption:after {
  -webkit-transform: skew(-30deg) translateX(-30%);
  transform: skew(-30deg) translateX(-30%);
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
</style>