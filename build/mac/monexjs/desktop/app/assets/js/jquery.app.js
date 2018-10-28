/**
 * Theme: Adminox Admin Template
 * Author: Coderthemes
 * Module/App: Main Js
 */


!function(n){"use strict"
function t(){n(".navbar-toggle").on("click",function(t){n(this).toggleClass("open"),n("#navigation").slideToggle(400)}),n(".navigation-menu>li").slice(-2).addClass("last-elements"),n('.navigation-menu li.has-submenu a[href="#"]').on("click",function(t){n(window).width()<992&&(t.preventDefault(),n(this).parent("li").toggleClass("open").find(".submenu:first").toggleClass("open"))})}function i(){n(".slimscroll-noti").slimScroll({height:"230px",position:"right",size:"5px",color:"#98a6ad",wheelStep:10})}function e(){n(".navigation-menu a").each(function(){this.href==window.location.href&&(n(this).parent().addClass("active"),n(this).parent().parent().parent().addClass("active"),n(this).parent().parent().parent().parent().parent().addClass("active"))})}function a(){t(),i(),e()}a()}(jQuery)




