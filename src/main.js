// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import firebase from 'firebase';
import './components/firebaseInit';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted: function(){
     // Sidenav
     const sideNav = document.querySelector('.sidenav');
     M.Sidenav.init(sideNav, {});
 
     // Slider
     const slider = document.querySelector('.slider');
     M.Slider.init(slider, {
       indicators: false,
       height: 0,
       transition: 500,
       interval: 6000
     });
 
     // Material Boxed
     const mb = document.querySelectorAll('.materialboxed');
     M.Materialbox.init(mb, {});
 
     // ScrollSpy
     const ss = document.querySelectorAll('.scrollspy');
     M.ScrollSpy.init(ss, {});
 
     const el = document.querySelector('.tooltipped');
     M.Materialbox.init(el,{});

  }
})
