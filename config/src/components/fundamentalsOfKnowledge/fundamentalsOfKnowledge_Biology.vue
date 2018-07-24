<template>
  <!-- Section: Icon Boxes -->
  <div>
  <section class="section section-icons black  center">
    <div class="container">
      <div class="row">
        <div class="col s12 m8">
          <div class="card-panel z-depth-5">
            <h4 class="left-align">Biology</h4>
            <figure class="snip1543">
            <img src="../../assets/images/SNAG-0001.gif" class="responsive imglarge">
              <figcaption>
                <p>
                  Fractal generated using a fragment of a DNA sequence.
                </p>
              </figcaption>
            </figure>
            <p class="left-align">
                Biology is a fundamental subject. What could be more fascinating 
                than studying the life process? Biology is the foundation 
                required for understanding the life processes. Knowing and 
                understanding the life processes are necessary for preserving it. 
                Otherwise, it will be destroyed or changed is unexpected ways by 
                uncontrolled pollution and abuse of the natural resources.  
            </p>
            <p class="left-align">
                New results in biology are having tremendous impact upon human 
                activities, medicine, science and the view of humanity generally. 
                There is probably no other field that is a rich in the potential 
                for establishing new knowledge today as is biology. Where the 
                20th Century was the era of the physicist, computer scientist, 
                and  mathematician, the 21st Century will be the era of the 
                biologist. In particular, it will be the era of the quantitative 
                biologist, who understands mathematics, computing, as well as the 
                other sciences. In this new biology, scientists will be concerned 
                with delving into the fundamental nature of the life process 
                itself.    
            </p>
            <p class="left-align">
                The "new synthesis" of the biological, physical, and social 
                sciences is changing the manner in which human beings are viewed. 
                We now know that biology has much more influence over the behavior 
                of human beings that ever thought before. The development of  
                computational models of complex biological phenomena is the 
                cutting edge today. This knowledge will have tremendous impact 
                on the structure and behavior of human organizations and practices. 
                Think of  Star Trek and "Mr. Data" and you will begin to see a 
                vision of the future of this research. It is as exciting as going 
                to the moon.    
            </p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="card-panel z-depth-5">
            <p>
              <img src="../../assets/images/JustEE.jpg" class="responsive imglarge">
            </p>
            <p class="left-align">
              <router-link to="HumanEvolution">Human Evolutionary History</router-link>
            </p>
            <p class="left-align">
              Readings in The New Synthesis
            </p>
            <p class="left-align">
                <ol>
                  <li>
                    David Livingstone Smith,<i> Why We Lie </i>, New York: St. Martins 
                    Press, 2004
                  </li>
                  <li>
                    Edward O. Wilson,<i> On Human Nature </i>, Cambridge, MA: 
                    Harvard University Press, 1978
                  </li>
                  <li>
                    Edward O. Wilson,<i> Sociobiology - The New Synthesis </i>, 
                    Cambridge, MA: The Bellnap Press, Harvard University 
                    Press, 1975
                  </li>
                  <li>
                    Spencer Wells,<i> The Journey of Man</i>, Princeton, NJ, Princeton 
                    University Press, 2002
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
  width: 100%;
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
  color: white;
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
