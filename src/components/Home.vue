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
              scholarship.<a href="#modal-1" class="cd-modal-trigger">HBCUs</a>
            </p>

            <div class="cd-modal" id="modal-1">
	            <div class="modal-content">
		            <h2>
                  Modal Content
                </h2>
		            <p>
			            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad 
                  modi repellendus, optio eveniet eligendi molestiae? Fugiat, 
                  temporibus! A rerum pariatur neque laborum earum, illum 
                  voluptatibus eum voluptatem fugiat, porro animi tempora? Sit 
                  harum nulla, nesciunt molestias, iusto aliquam aperiam est qui 
                  possimus reprehenderit ipsam ea aut assumenda inventore iste! 
                  Animi quaerat facere repudiandae earum quisquam accusamus 
                  tempora, delectus nesciunt, provident quae aliquam, voluptatum 
                  beatae quis similique in maiores repellat eligendi voluptas 
                  veniam optio illum vero! Eius, dignissimos esse eligendi veniam.
		            </p>
		            <p>
			            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Debitis saepe amet sit fugit rerum, corporis minus vitae 
                  officia quaerat incidunt voluptate, blanditiis ea est quibusdam 
                  voluptas animi quasi totam magni, commodi praesentium. Possimus 
                  quam illo ipsam iste unde totam cupiditate deleniti, impedit 
                  assumenda hic eligendi natus tempora dolores quod mollitia ab 
                  non sunt eaque adipisci, suscipit quas aliquid officiis beatae. 
                  Necessitatibus voluptatibus, perferendis tenetur perspiciatis 
                  adipisci nesciunt eum ex fuga commodi iure numquam enim rem 
                  ullam labore nisi magni sint voluptatem quos! Eum iure 
                  exercitationem voluptates repellendus culpa doloremque laborum 
                  animi illum, sint fugit soluta possimus a fuga veritatis 
                  molestias corporis placeat illo pariatur dolor reiciendis 
                  earum, sapiente omnis. Placeat maiores omnis, porro officia, 
                  laborum eos. Fugiat mollitia inventore consequuntur odit eaque, 
                  rerum recusandae, eum sint molestiae consequatur culpa deserunt 
                  quae aliquid dolor tempora tenetur architecto repellendus enim 
                  quasi atque, odio voluptas. Tenetur repellendus explicabo ipsum 
                  inventore quia aut eos expedita necessitatibus asperiores 
                  blanditiis! Delectus nisi laudantium ipsum! Quasi blanditiis 
                  corrupti dicta maiores placeat laboriosam delectus ipsum facere 
                  voluptas, magnam voluptatibus, perferendis alias ullam saepe, 
                  perspiciatis recusandae voluptates, dolores praesentium?
		            </p>
	            </div> <!-- .modal-content -->
	            <a href="#0" class="modal-close">Close</a>
            </div> <!-- .cd-modal -->

            <div class="cd-transition-layer" data-frame="38"> 
            	<div class="bg-layer"></div>
            </div>
            
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

              The chart below shows the number of people applying to my university who chose 
              various majors to study. Most of these people have not been on our campus. They 
              have just graduated high school. The bars sho the number of people who believe 
              that they want to study in a given area. 
            </p>
           <img src="..\assets\images\2018-05-21_16-35-12.jpg" class="responsive">
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

<script src="..\assets\js\modalJS\js/modernizr.js"></script> <!-- Modernizr -->
<script>
	if( !window.jQuery ) document.write('<script src="..\assets\js\modalJS\jquery-2.2.1-min.js"><\/script>');
</script>
<script src="..\assets\js\modalJS\main.js"></script> <!-- Resource jQuery -->


<style scoped>
.responsive {
    width: 100%;
    height: auto;
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

/* -------------------------------- 

Shared style

-------------------------------- */
.cd-btn {
  display: inline-block;
  padding: 1.6em 2.4em;
  font-size: 1.4rem;
  letter-spacing: .15em;
  font-weight: 700;
  text-transform: uppercase;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  -webkit-transition: box-shadow .3s;
  transition: box-shadow .3s;
}
.cd-btn:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

h1 {
  line-height: 1;
}

/* Main Content */
.cd-main-content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100vh;
  /* vertically align its content */
  display: table;
}
.cd-main-content .center {
  /* vertically align inside parent element */
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

/* Modal Window */
.cd-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  height: 100%;
  width: 100%;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity .3s 0s, visibility 0s .3s;
  transition: opacity .3s 0s, visibility 0s .3s;
}
.cd-modal .modal-content {
  height: 100%;
  overflow-y: auto;
  padding: 3em 5%;
}
.cd-modal h1, .cd-modal h2 {
  text-align: center;
}
.cd-modal p {
  line-height: 1.6;
  margin: 2em auto;
  max-width: 800px;
}
.cd-modal .modal-close {
  /* 'X' icon */
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 5%;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-indent: 100%;
  color: transparent;
  visibility: hidden;
  opacity: 0;
  -webkit-transform: scale(0);
          transform: scale(0);
  -webkit-transition: visibility 0s .3s, opacity .3s 0s, -webkit-transform .3s 0s;
  transition: visibility 0s .3s, opacity .3s 0s, -webkit-transform .3s 0s;
  transition: transform .3s 0s, visibility 0s .3s, opacity .3s 0s;
  transition: transform .3s 0s, visibility 0s .3s, opacity .3s 0s, -webkit-transform .3s 0s;
}
.cd-modal .modal-close::before, .cd-modal .modal-close::after {
  content: '';
  display: inline-block;
  position: absolute;
  height: 2px;
  width: 20px;
  top: calc(50% - 1px);
  left: calc(50% - 10px);
}
.cd-modal .modal-close::before {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
.cd-modal .modal-close::after {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}
.cd-modal.visible {
  opacity: 1;
  visibility: visible;
  -webkit-transition: opacity .7s, visibility 0s;
  transition: opacity .7s, visibility 0s;
}
.cd-modal.visible .modal-content {
  /* this fixes the buggy scrolling on webkit browsers - mobile devices only - when overflow property is applied */
  -webkit-overflow-scrolling: touch;
}
.cd-modal.visible .modal-close {
  visibility: visible;
  opacity: 1;
  -webkit-transition: visibility 0s 0s, opacity .3s 0s, -webkit-transform .3s 0s;
  transition: visibility 0s 0s, opacity .3s 0s, -webkit-transform .3s 0s;
  transition: transform .3s 0s, visibility 0s 0s, opacity .3s 0s;
  transition: transform .3s 0s, visibility 0s 0s, opacity .3s 0s, -webkit-transform .3s 0s;
  -webkit-transform: scale(1);
          transform: scale(1);
}
@media only screen and (min-width: 1100px) {
  .cd-modal .modal-content {
    padding: 6em 5%;
  }
  .cd-modal .modal-close {
    height: 60px;
    width: 60px;
  }
  .cd-modal .modal-close::before, .cd-modal .modal-close::after {
    height: 2px;
    width: 26px;
    top: calc(50% - 1px);
    left: calc(50% - 13px);
  }
  .cd-modal p {
    font-size: 2rem;
  }
}

/* Transition Layer */
.cd-transition-layer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
}
.cd-transition-layer .bg-layer {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translateY(-50%) translateX(-2%);
          transform: translateY(-50%) translateX(-2%);
  /* its dimentions will be overwritten using jQuery to proportionally fit the viewport */
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 0 0;
}
.cd-transition-layer.visible {
  opacity: 1;
  visibility: visible;
}
.cd-transition-layer.visible .bg-layer {
  -webkit-transform: translateY(-50%) translateX(-98%);
          transform: translateY(-50%) translateX(-98%);
}
.cd-transition-layer.opening .bg-layer, .cd-transition-layer.closing .bg-layer {
  -webkit-animation-duration: .8s;
          animation-duration: .8s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}
.no-cssanimations .cd-transition-layer {
  display: none;
}

/* -------------------------------- 

Scribble Effect

-------------------------------- */
.scribble-transition .cd-modal {
  background: blue;
}
.scribble-transition .cd-modal .modal-content {
  color: #fcf4e1;
}
.scribble-transition .cd-modal .modal-close::before,
.scribble-transition .cd-modal .modal-close::after {
  background: #fcf4e1;
}
.scribble-transition .cd-modal .modal-close {
  background: blue;
}
.scribble-transition .cd-modal .modal-close:hover {
  background: red;
}
.scribble-transition .cd-transition-layer .bg-layer {
  -webkit-transform: translateY(-50%) translateX(-1.3158%);
          transform: translateY(-50%) translateX(-1.3158%);
  /* sprite composed of 38 frames */
  width: 3800%;
  background-image: url(..\assets\images\scribble.png);
}
.scribble-transition .cd-transition-layer.opening .bg-layer {
  -webkit-animation: cd-sequence-2 0.8s steps(37) forwards;
          animation: cd-sequence-2 0.8s steps(37) forwards;
}
.scribble-transition .cd-transition-layer.closing .bg-layer {
  -webkit-animation: cd-sequence-2 0.8s steps(37) forwards reverse;
          animation: cd-sequence-2 0.8s steps(37) forwards reverse;
}
.scribble-transition .cd-transition-layer.visible .bg-layer {
  -webkit-transform: translateY(-50%) translateX(-98.6842%);
          transform: translateY(-50%) translateX(-98.6842%);
}
@media only screen and (min-width: 768px) {
  .scribble-transition h1 {
    font-size: 7.2rem;
  }
  .scribble-transition h2 {
    font-size: 5.8rem;
  }
}

/* -------------------------------- 

Animations

-------------------------------- */
@-webkit-keyframes cd-sequence {
  0% {
    /* translateX(-2%) is used to horizontally center the first frame inside the viewport */
    -webkit-transform: translateY(-50%) translateX(-2%);
            transform: translateY(-50%) translateX(-2%);
  }
  100% {
    /* translateX(-98%) (2% + 96) is used to horizontally center the last frame inside the viewport  */
    -webkit-transform: translateY(-50%) translateX(-98%);
            transform: translateY(-50%) translateX(-98%);
  }
}
@keyframes cd-sequence {
  0% {
    /* translateX(-2%) is used to horizontally center the first frame inside the viewport */
    -webkit-transform: translateY(-50%) translateX(-2%);
            transform: translateY(-50%) translateX(-2%);
  }
  100% {
    /* translateX(-98%) (2% + 96) is used to horizontally center the last frame inside the viewport  */
    -webkit-transform: translateY(-50%) translateX(-98%);
            transform: translateY(-50%) translateX(-98%);
  }
}
@-webkit-keyframes cd-sequence-2 {
  0% {
    -webkit-transform: translateY(-50%) translateX(-1.3158%);
            transform: translateY(-50%) translateX(-1.3158%);
  }
  100% {
    -webkit-transform: translateY(-50%) translateX(-98.6842%);
            transform: translateY(-50%) translateX(-98.6842%);
  }
}
@keyframes cd-sequence-2 {
  0% {
    -webkit-transform: translateY(-50%) translateX(-1.3158%);
            transform: translateY(-50%) translateX(-1.3158%);
  }
  100% {
    -webkit-transform: translateY(-50%) translateX(-98.6842%);
            transform: translateY(-50%) translateX(-98.6842%);
  }
}
@-webkit-keyframes cd-sequence-3 {
  0% {
    -webkit-transform: translateY(-50%) translateX(-2.5%);
            transform: translateY(-50%) translateX(-2.5%);
  }
  100% {
    -webkit-transform: translateY(-50%) translateX(-97.5%);
            transform: translateY(-50%) translateX(-97.5%);
  }
}
@keyframes cd-sequence-3 {
  0% {
    -webkit-transform: translateY(-50%) translateX(-2.5%);
            transform: translateY(-50%) translateX(-2.5%);
  }
  100% {
    -webkit-transform: translateY(-50%) translateX(-97.5%);
            transform: translateY(-50%) translateX(-97.5%);
  }
}

</style>