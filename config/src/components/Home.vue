<template>
  <div>
  <!-- Section: content -->
  <section class="section section-icons blue center">
    <div class="container">
      <div class="row">
        <div class="col s12 m8">
          <div class="card-panel z-depth-5 scribble-transition">
            <h4 class="center-align">Professor Oscar H. Criner</h4>
            <h5 class="center-align">Welcome to my academic website</h5>
            <p class="left-align">
              This site is intended to help you succeed in college and introduce 
              you to the academic profession. I want you to experience the joy of 
              scholarship.
            </p>
            
            <p class="left-align">
              For me, scholarship is something you do because you must. You have 
              a curosity about all things. You want to know. You want to do. There 
              may be no other reason to study except that you want to know about 
              subject.
            </p>
            <p class="left-align">
              Do not confuse higher education with job training.While employment 
              is one outcome of higher education, it should not be the focus of 
              your college career. However, for those who succeed at scholarship, 
              the rewards are very great.
            </p>
            <p class="left-align">
              However, scholarship is not usually considered a profession.
              But there is a very great need for scholars in the United States,
              especially for those who are native born. Teaching is what 
              scholars do, but it is not all we do. We are also entrepreneurs,
              writers, businesspersons, artists, musicians, scientists, mathematicians, 
              researchers, and engaged in a host of other endeavors.
            </p>
            <p class="left-align">
              This site is intended to encourage students and show how to develop skills
              at scholarship; and to consider becoming a scholar and  college teacher. There 
              is a critical shortage of African American scholars and teachers; and this is 
              especially true in all historically black colleges and universities (HBCUs). 
              This is expecially devastating to academic programs in the mathematical and 
              computational sciences.
            </p> 

            <p class="left-align">
              The <label for="item-2"> chart  below</label> shows the number of people applying to my university who chose 
              various majors to study. Most of these people have not been on our campus. They 
              have just graduated high school. The bars sho the number of people who believe 
              that they want to study in a given area. 
            </p>
            <div class="ex2">
                <input type="checkbox" name="rwo" id="item-2">
                  <div class="inner">
                    <div class="hide2">
                      <img src="..\assets\images\2018-05-21_16-35-12.jpg" class="responsive">
                    </div>
                  </div>
            </div>
          </div>
        </div>
        
        <div class="col s12 m4">
          <div class="card-panel z-depth-5">
            <img src="..\assets\images\crinerOscarH.jpg" class="responsive">
            <p class="left-align"> Teaching is a family tradition.
                Oscar H. Criner is a fourth generation teacher in Texas.  
                His great grandfather, A. J. Criner, was an itinerant teacher 
                who founded schools in Southeast Texas after the Civil War, 
                including Lincoln High School in Port Arthur and Charlton 
                Pollard High School in Beaumont.  Both his grandmother and 
                great aunt taught in Beaumont and Houston and his parents 
                taught in Mexia, Beaumont, and Houston schools.  His sister 
                Christine Criner-Smith is principal of Willowridge High 
                School in Fort Bend County, Texas.  Dr. Criner has taught 
                at Grambling College in Louisiana, California State University 
                at Hayward,  and San Francisco State University.
              </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>


<style scoped>
.responsive {
    width: 100%;
    height: auto;
}
.is-collapsed li:nth-child(n+5) {
  display: none;
}
/* -------------------------------- 

Primary style

-------------------------------- */
*, *::after, *::before {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: sans-serif;
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
}

/* hide and show image */
label {
  color: blue;
}
label:hover {
  text-decoration: underline;
}

/* example 2 */
.inner {
  position: relative;
  overflow: hidden;
}
.hide2 {
  opacity: 0;
  transform: translateY(-100%);
  margin-bottom: -999em;
  transition: all 1.5s linear, margin 0s linear 1.5s;
}


.ex2 .follow {
  clear: both;
}

.ex2 input[type="checkbox"]:checked + .inner .hide2 {
  clear: both;
  opacity: 1;
  overflow: hidden;
  transform: translateY(0);
  margin: 0;
  transition: all 1.5s linear, margin 0s linear 0s;
}
</style>