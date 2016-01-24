import Vue from 'vue'
import App from './App'
import './assets/css/sm.min.css'
require('imports?this=>window!./assets/js/sm.min.js')

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
