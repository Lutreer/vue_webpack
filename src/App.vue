<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <header class="bar bar-nav">
    <h1 class="title">预加载 Modal (Preloader Modal)</h1>
  </header>
  ...
  <div class="content">
    <div class="content-block">
      <p><a href="#" class="open-preloader">Open Preloader</a></p>
      <p><a href="#" class="open-preloader-title">Open Preloader with custom title</a></p>
    </div>
  </div>
  </div>
  <div class="content-padded docs-icons">
  <span class="icon icon-app"></span>
  <span class="icon icon-browser"></span>
  <span class="icon icon-card"></span>
  <span class="icon icon-cart"></span>
  <span class="icon icon-code"></span>
  <span class="icon icon-computer"></span>
  <span class="icon icon-remove"></span>
  <span class="icon icon-download"></span>
  <span class="icon icon-edit"></span>
  <span class="icon icon-emoji"></span>
  <span class="icon icon-star"></span>
  <span class="icon icon-friends"></span>
  <span class="icon icon-gift"></span>
  <span class="icon icon-phone"></span>
  <span class="icon icon-clock"></span>
  <span class="icon icon-home"></span>
  <span class="icon icon-menu"></span>
  <span class="icon icon-message"></span>
  <span class="icon icon-me"></span>
  <span class="icon icon-picture"></span>
  <span class="icon icon-share"></span>
  <span class="icon icon-settings"></span>
  <span class="icon icon-refresh"></span>
  <span class="icon icon-caret"></span>
  <span class="icon icon-down"></span>
  <span class="icon icon-up"></span>
  <span class="icon icon-right"></span>
  <span class="icon icon-left"></span>
  <span class="icon icon-check"></span>
  <span class="icon icon-search"></span>
</div>
</template>

<script>
import Hello from './components/Hello'
import $ from 'zepto'
export default {
  components: {
    Hello
  }
}

$(document).on('click', '.open-preloader', function () {
    $.showPreloader();
    setTimeout(function () {
        $.hidePreloader();
    }, 2000);
  })
  $(document).on('click','.open-preloader-title', function () {
    $.showPreloader('Custom Title')
    setTimeout(function () {
        $.hidePreloader();
    }, 2000);
  })
</script>

<style>
</style>
