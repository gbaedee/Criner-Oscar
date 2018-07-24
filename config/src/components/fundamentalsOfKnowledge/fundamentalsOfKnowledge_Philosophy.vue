<template>
  <!-- Section: Icon Boxes -->
  <div>
  <section class="section section-icons black  center">
    <div class="container">
      <div class="row">
        <div class="col s12 m8">
          <div class="card-panel z-depth-5">
            <h4 class="left-align"> Philosophy:</h4>
            <h5 class="left-align"> The study of systems that describe human existence </h5>
            <figure class="snip1543">
            <img class="imglarge responsive" src="../../assets/images/adev.jpg">
              <figcaption>
                <p>
                  Genesis of Eden Diversity Encyclopedia
                </p>
              </figcaption>
            </figure>
            <figure class="snip1543">
            <img src="../../assets/images/ogotemelli.gif" class="imglarge responsive">
              <figcaption>
                <p>
                  Ogotemelli from Conversations with Ogotemelli by M. Griaule, 
                  Oxford University Press.
                </p>
              </figcaption>
            </figure>
            <p class="left-align">
                Human beings need to have an explanation of existence.  Most 
                human societies have creation stories that tell of the origin of 
                the people.  When a society does not have a creation story, it 
                will create one. Many groups of human beings are characterized 
                by their creation stories.  Most often creation stories describe 
                a relation with a supreme being as in the Adam and Eve story in 
                the Book of Genesis in the Christian Bible, Jewish Torah. The 
                depiction of Eve enticing Adam to eat from the tree of knowledge 
                has many subtle interpretations and implications in western 
                civilization.  
            </p>
            <p class="left-align">
                The Dogon elder, Ogotemelli, provided the French anthropologist, 
                Marcel Griaule, with the creation stories and other religious 
                rituals of the Dogon people.  The Dogon are one of many peoples 
                who stories challenge the prevailing views of human knowledge.  
                When the Dogon cosmology was published, there was a frenzy of 
                reaction to what appeared to be knowledge that could not have 
                been know by a people with no modern technology. 
            </p>
            <p class="left-align">
                Clearly, there is some confusion about how we know what we know, 
                or even if we know. The truth of a peoples creation story cannot 
                be challenged, since  the origin of the story is generally a 
                mystery.  Creation stories are not intended to be subjected to 
                the rigorous analysis of modern technology. They are intended 
                to satisfy a basic human need for logic and order in one life and 
                to answer the question, "Why am I here?" 
            </p>
            <p class="left-align">
                It is unfortunate that the study of philosophy has been taken out 
                of many college degree programs.  It is an enjoyable field of 
                study and I advise students to read widely and take as many 
                philosophy courses as possible, even if they are not in your 
                particular curriculum.  
            </p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="card-panel z-depth-5">
            <p class="left-align">
              <ol>
                <li>
                  James Burke,<i> The Knowledge Web</i>, New York: Simon and Schuster, 
                  1999.
                </li>
                <li>
                  Stephen Carter,<i> Integrity</i>, New York: Harper Collins Publishers, 
                  1996.
                </li>
                <li>
                  Noam Chomsky,<i> Problems of Knowledge and Freedom</i>, New York, 
                  Pantheon books, a Division of Random House, 1971.
                </li>
                <li>
                  W. T. Jones,<i> History of Western Philosophy</i>, New York: John Wiley
                </li>
                <li>
                  John S. Mbiti,<i> African Religions and Philosophy</i>, London, UK: 
                  Heinemann Educational Books, Ltd., 1969.
                </li>
                <li>
                  Kwame Nkhruma,<i> Consciencism</i>, New York: Monthly Review Press, 1971
                </li>
                <li>
                  F. S. C. Northrop,<i> The Logic of the Sciences and the 
                    Humanities</i>, New York: Meridian Books, 1959
                </li>
                <li>
                  Bertrand Russell,<i> A History of Western Philosophy</i>, Dover
                </li>
                <li>
                  John Searle,<i> Minds, Brains and Science</i>, Cambridge, MA: Harvard Unuversity Press, 1984.
                </li>
                <li>
                  E. O. Wilson,<i> On Human Nature</i>, Cambridge, MA: Harvard University Press, 1978
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
