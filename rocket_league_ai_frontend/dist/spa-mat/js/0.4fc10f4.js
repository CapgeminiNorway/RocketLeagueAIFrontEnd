(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{I4WI:function(t,o,a){},Pz5q:function(t,o,a){"use strict";a.r(o);var s=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-layout-header",{attrs:{reveal:""},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[a("q-toolbar",{attrs:{color:"white"}},[a("q-toolbar-title",{attrs:{align:"left"}},[a("div",{staticClass:"row "},[a("img",{attrs:{src:"assets/capgemini_logo.svg"}})])]),a("q-btn",{staticClass:"text-black",attrs:{to:"/howto",flat:""}},[t._v("How to play")]),a("q-btn",{staticClass:"text-black",attrs:{flat:""},nativeOn:{click:function(o){t.openLogin("top")}}},[t._v("Sign in")])],1),!1===t.loggedInUser?a("div",{staticClass:"arl_toolbar"},[a("div",{staticClass:"row justify-between"},[a("h2",{staticClass:"text-white col-4 q-pa-md"},[t._v("AI Rocket league")]),a("div",{staticClass:"toolbar_overlay col-2 q-pa-md gt-md"},[a("h5",{staticClass:"text-secondary"},[t._v("Sign up today!")]),a("p",{staticClass:"text-secondary"},[t._v("Lorem ipsum dolor sit amet, legimus\n          volumus laboramus ei est, est veri munere cu. ")]),a("q-btn",{staticClass:"bg-white"},[t._v("Sign up")])],1)])]):t._e()],1),a("q-page-container",[a("q-modal",{attrs:{position:t.position},model:{value:t.loginModal,callback:function(o){t.loginModal=o},expression:"loginModal"}},[a("div",{staticStyle:{padding:"20px"}},[a("div",{staticClass:"q-display-1 q-mb-md"},[t._v("LOGIN")]),a("div",[a("q-input",{attrs:{"float-label":"Username"},on:{keyup:function(o){return"button"in o||!t._k(o.keyCode,"enter",13,o.key,"Enter")?t.submit(o):null}},model:{value:t.form.username,callback:function(o){t.$set(t.form,"username",o)},expression:"form.username"}}),a("q-input",{attrs:{"float-label":"Password",type:"password"},on:{keyup:function(o){return"button"in o||!t._k(o.keyCode,"enter",13,o.key,"Enter")?t.submit(o):null}},model:{value:t.form.password,callback:function(o){t.$set(t.form,"password",o)},expression:"form.password"}}),a("div",{staticClass:"row float-right q-pb-md"},[a("q-btn",{staticClass:"q-ma-sm",attrs:{color:"primary"},on:{click:t.login}},[t._v("Login")]),a("q-btn",{staticClass:"q-ml-sm q-mb-sm q-mt-sm",attrs:{color:"orange",label:"Close"},on:{click:function(o){t.loginModal=!1}}})],1)],1)])]),a("router-view")],1)],1)},e=[];s._withStripped=!0;var n=a("pg2m"),i=function(t,o){if(n["a"].is.cordova&&navigator&&navigator.app)return navigator.app.loadUrl(t,{openExternal:!0});var a=window.open(t,"_blank");if(a)return a.focus(),a;o()},l={name:"MyLayout",data:function(){return{show:!0,loginModal:!1,position:"top",form:{username:"",password:""},loggedInUser:!1}},methods:{openURL:i,openLogin:function(t){var o=this;this.position=t,this.$nextTick(function(){o.loginModal=!0})},login:function(){var t={username:this.form.username};this.$store.commit("user/default",t),this.loginModal=!this.loginModal,this.loggedInUser=!this.loggedInUser,this.$router.push({path:"/user"})}}},r=l,c=(a("sZT1"),a("KHd+")),u=Object(c["a"])(r,s,e,!1,null,null,null);o["default"]=u.exports},sZT1:function(t,o,a){"use strict";var s=a("I4WI"),e=a.n(s);e.a}}]);