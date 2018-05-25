<template>
  <!-- Section: Icon Boxes -->
  <div>
  <section class="section section-icons black  center">
    <div class="container">
      <div class="row">
        <div class="col s12 m8">
          <div class="card-panel z-depth-5">
            <h4 class="left-align">Computer Science</h4>
            <figure class="snip1543">
            <img class="responsive imglarge" src="../../assets/images/S3-ChebySineOf-T3-001-01.gif">
              <figcaption>
                <p>
                  Chaotic Chebyshev Polynomials
                </p>
              </figcaption>
            </figure>
            <p class="left-align">
             Computer science has become one of the fundamentals of our knowledge 
             system. It is a very young subject that truly began to show its 
             potential in my lifetime. When I began computers filled large rooms 
             and had small main memories and almost no disk storage. Today, my 
             laptop has more computational power that those early machines with 
             which we designed, built, and operated things like the Polaris 
             missile project.
            </p>
            <p class="left-align">
             The networking technologies are connecting millions of computers all 
             over the world.  Sun Microsystems had a slogan at one time that 
             claimed "The Network IS the Computer." That is coming closer a 
             reality with implications that  no one  at Sun or anywhere else ever 
             envisioned.  
            </p>
            <p class="left-align">
              Visualize a computer with components, applications, and systems 
              that are distributed all over the world with which people around 
              the world are unified in one objective. That is the computing 
              environment of today. 
            </p>
            <p class="left-align">
             Computing impacts every activity of humanity. Knowledge of computing 
             is inescapable if  you intend to function in society. The 
             infrastructure is being constructed today that  will enable 
             utilization of  communication and computing resources from around 
             the world at  your desktop. This means that you will effectively 
             have a supercomputer and all the world's data at your disposal. What 
             will you do with it? Remember, in the 21st century, knowledge is the 
             wealth and information is the currency.
            </p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="card-panel z-depth-5">
            <p class="left-align">
                <ol>
                  <li>
                    A. I. Forsythe, T. A. Keenan, E. I Organick, and  W. 
                    Stenberg, <i>Computer Science - A First Course,</i> Second 
                    Edition,  New York: John Wiley & Sons, Inc, 1975
                  </li>
                  <li>
                    Lesley Anne Robertson,<i> Simple Program Design, </i>
                    Cambridge, MA: Course Technology, 2000
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
  height: 505px;
}
@media screen and (max-width: 900px){
  .imglarge{
  width: 100%;
  height: auto;
  }
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