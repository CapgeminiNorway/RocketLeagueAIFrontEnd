(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{I4WI:function(M,L,N){},Pz5q:function(M,L,N){"use strict";N.r(L);var j=function(){var M=this,L=M.$createElement,j=M._self._c||L;return j("q-layout",{attrs:{view:"lHh Lpr lFf"}},[j("q-layout-header",{attrs:{reveal:""},model:{value:M.show,callback:function(L){M.show=L},expression:"show"}},[j("q-toolbar",{attrs:{color:"white"}},[j("q-toolbar-title",{attrs:{align:"left"}},[j("div",{staticClass:"row "},[j("a",{attrs:{href:"https://www.capgemini.com/no-no/",target:"_blank"}},[j("img",{attrs:{src:N("U6bo")}})])])]),j("q-btn",{staticClass:"text-black",attrs:{to:"/howto",flat:""}},[M._v("How to play")]),!1===M.loggedInUser?j("q-btn",{staticClass:"text-black",attrs:{flat:""},nativeOn:{click:function(L){M.openLogin("top")}}},[M._v("Sign in")]):M._e(),!0===M.loggedInUser&&"/profile"!==this.$route.path?j("q-btn",{staticClass:"text-black",attrs:{to:"/profile",flat:""}},[M._v("Profile")]):M._e()],1),j("router-link",{attrs:{to:"/"}},[!1===M.loggedInUser||"/"!==this.$route.path?j("div",{staticClass:"arl_toolbar"},[j("div",{staticClass:"row justify-between"},[j("h2",{staticClass:"text-white col-4 q-pa-md"},[M._v("AI Rocket league")]),!1===M.loggedInUser?j("div",{staticClass:"toolbar_overlay col-2 q-pa-md gt-md"},[j("h5",{staticClass:"text-secondary"},[M._v("\n              Sign up today!\n            ")]),j("p",{staticClass:"text-secondary"},[M._v("Lorem ipsum dolor sit amet, legimus\n              volumus laboramus ei est, est veri munere cu.\n            ")]),j("q-btn",{staticClass:"bg-white"},[M._v("Sign up")])],1):M._e()])]):M._e()])],1),j("q-page-container",[j("q-modal",{attrs:{position:M.position,width:"30%"},model:{value:M.loginModal,callback:function(L){M.loginModal=L},expression:"loginModal"}},[j("div",{staticClass:"loginModal row justify-center"},[j("div",{staticClass:"q-display-1 q-mb-md col-12"},[M._v("LOGIN")]),j("div",{staticClass:"inputWrapper"},[j("q-input",{attrs:{"float-label":"Username"},on:{keyup:function(L){return"button"in L||!M._k(L.keyCode,"enter",13,L.key,"Enter")?M.submit(L):null}},model:{value:M.form.username,callback:function(L){M.$set(M.form,"username",L)},expression:"form.username"}}),j("q-input",{attrs:{"float-label":"Password",type:"password"},on:{keyup:function(L){return"button"in L||!M._k(L.keyCode,"enter",13,L.key,"Enter")?M.submit(L):null}},model:{value:M.form.password,callback:function(L){M.$set(M.form,"password",L)},expression:"form.password"}}),j("div",{staticClass:"row float-right q-pb-md"},[j("q-btn",{staticClass:"q-ma-sm",attrs:{color:"primary"},on:{click:M.login}},[M._v("Login")]),j("q-btn",{staticClass:"q-ml-sm q-mb-sm q-mt-sm",attrs:{color:"orange",label:"Close"},on:{click:function(L){M.loginModal=!1}}})],1)],1)])]),j("router-view")],1)],1)},t=[];j._withStripped=!0;var u=N("pg2m"),T=function(M,L){if(u["a"].is.cordova&&navigator&&navigator.app)return navigator.app.loadUrl(M,{openExternal:!0});var N=window.open(M,"_blank");if(N)return N.focus(),N;L()},g={name:"MyLayout",data:function(){return{show:!0,loginModal:!1,position:"top",form:{username:"",password:""},loggedInUser:!1}},methods:{openURL:T,openLogin:function(M){var L=this;this.position=M,this.$nextTick(function(){L.loginModal=!0})},login:function(){var M={username:this.form.username};this.$store.commit("user/default",M),this.loginModal=!this.loginModal,this.loggedInUser=!this.loggedInUser,this.$router.push({path:"/profile"})}}},i=g,I=(N("sZT1"),N("KHd+")),D=Object(I["a"])(i,j,t,!1,null,null,null);L["default"]=D.exports},U6bo:function(M,L){M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzEiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzEgMzgiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMTJBQkRCIiBkPSJNMTYzLjQzNCAyMi42OThjMy43MjggMCA2LjYwNy0zLjAzOCA2LjY0NC02LjY0LS4yNTktMS41NzMtLjgxLTQuNDgzLTQuODkzLTQuNDgzLTQuNDY0IDAtNS45NDUgNi4yNC05LjU4IDEwLjI2Mi0uMjk1IDIuMjg4LTIuNDU4IDQuMzM1LTUuMTYzIDQuNjc4LjY2NC42OTQgMi4xMzYgMS4wNjcgMy44OTQgMS4wNjcgMy4yMiAwIDcuMTE4LS45NjkgOS4xNTctMi45ODItMi43Mi4wMzUtNC40Ny0xLjcxMy00LjY0My00LjEzNiAxLjMyNyAxLjYwOCAyLjgyNyAyLjIzNCA0LjU4NCAyLjIzNCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDcwQUQiIGQ9Ik0xMzQuNzk1IDEyLjc3YzAtMS45ODEtLjEyLTMuMzA1LTEuNDE2LTMuMzA1LS41OTEgMC0uODguMTE2LTEuMzk3LjI4OS40NTkgNi43LTEuMDU0IDEyLjYtMi45MDIgMTIuNi0yLjQyMyAwLTEuMjEzLTE0LjM2LTYuMzQ4LTE0LjM2LTQuNzMyIDAtNS40MTIgMTEuNDYzLTUuOTUgMTEuNDYzLS4zNjcgMC0uNDIyLTMuMDEtLjQwMy01LjMwNC4xOTktMS4xMDIuMzA2LTIuMDg4LjMwNi0yLjgzOCAwLTEuMDY4LS40MzQtMi45MTQtMi44NTgtMS45OTEuMDg2IDguMTk1LTEuNTU2IDEzLjE1LTMuNDAzIDEzLjE1LTIuNzEyIDAtMi43NC03LjQzMi0yLjc0LTkuNDggMC0yIC4xNDMtNC42NzMtMi44MjgtMy43MjEtLjQ0NiA3LjE1LTIuMzE4IDEyLjU0Ny0zLjUgMTIuNTQ3LTEuNzYyIDAtMS40MDctMTIuMzU0LTUuMjE3LTEyLjM1NC0zLjQyMyAwLTQuNDgyIDExLjctNS4xOTYgMTEuNy0xLjI3NyAwIC4zOTktMTMuMTcyLTQuNTQ1LTEzLjE3Mi0yLjU5NSAwLTMuNjI1IDQuMzk5LTQuNjQxIDkuMzItLjE5OC45NTQtLjQwNS45ODItLjQzOC0uMDkzYTY4LjM0OSA2OC4zNDkgMCAwIDEtLjAyNC0yLjc1OGMxLjI0OS00Ljk0Ny0uMjc1LTYuNzc0LTIuNTY2LTUuNDU2LjczOCA5LjEyOS0zLjQ1MSAxMy41OTItNi42NjcgMTMuNTkyLTEuMTYzIDAtMi4wNzYtLjQ5NC0yLjc2LTEuMjc1IDMuODU2LTIuMzY0IDUuNTY5LTUuMDc4IDUuNTY5LTcuNzI4IDAtMi44NzQtMS42NS00LjUyOC00LjM5LTQuNTI4LTMuODI2IDAtNS45NjQgMy45MzgtNS45NjQgNy4yODUgMCAxLjgwMi4zMzUgMy4zMzIuODkgNC41OTQtMS4zMTQuNjI3LTIuNTUzIDEuMTY5LTMuNzA2IDEuNjk1LS4xLTMuNDQ0LS40OS03LjA2MS0uNzg2LTEwLjM5Ny0yLjAzNS0uNTYxLTIuNjMuNDE4LTIuNzg3IDIuMjMtLjM2IDQuMTM1LTEuODkyIDYuNy0zLjI0NiA2LjctMS4wMiAwLTEuNjQxLTEuMjQtMS43MTYtMi41NTctLjM3OC02LjYyOCA1LjAwMy04LjQ3MiA3LjgxNi03LjUxMS41ODQtMS40NjEtLjA1Ny0yLjUxNC0yLjU5NS0yLjUxNC0zLjA4IDAtNS4zODEgMS44Ny03LjA2OCA0LjI3LTEuMTI3IDEuNi0yLjQyNyAyLjczNS00LjE1NiA0LjEwOC4wNDQtLjM5NS4wNjgtLjc5LjA2OC0xLjE3OCAwLTQuNjc0LTIuNTMzLTYuNzI1LTQuOTUxLTYuNzI1LTIuMDAxIDAtMy4yNTggMS4yLTMuOTg4IDMuMDQtLjE4LTEuODQ1LS41NDctMi42NDItMS42Mi0yLjY0Mi0uNDYgMC0xLjA5Ny4xMy0xLjc4My40NjIuMzE0IDEuMDMuNDM2IDMuMzE1LjQzNiA0LjgxOSAwIDUuNjItMS42MSA4LjEzOC0zLjE2IDguMTM4LTEuNzcgMC0yLjA1Mi02LjY2Ni0yLjItOS4yNmEyLjQxIDIuNDEgMCAwIDAtLjg2OC0uMTZjLTEuNjAxIDAtMS44MSAyLjE1Mi0yLjIwNSA0LjEzLS40MzggMi4xOTItMS43MDEgNC45NDktMy41NzEgNC45NDktMS4xMyAwLTEuODM1LTEuMDktMS45MjMtMy4wNS0uMTg0LTMuOTczIDMuMTIyLTguNjgyIDguMjk1LTcuMjE3LjY3OC0xLjU4My0uMzg2LTIuNzg4LTIuNTMzLTIuNzg4LTMuNzgxIDAtNi45MDcgMi44My04LjI3IDYuMTc5LTEuMzg0IDMuMDctMy44MDcgNy41OC04LjczNSA3LjU4LTMuNDggMC02LjE0Mi0zLjAzNC02LjE0Mi05LjQwMyAwLTUuNDkgMy40Ni0xMC43MDUgNy4xNTMtMTAuNzA1IDIuNTgzIDAgMy4xODIgMi41NCAyLjk1NSA0LjkyNiAxLjMzNiAxLjA3NSAzLjUzMi4wNzYgMy41MzItMi42MDggMC0xLjg1LTEuNTAyLTQuOTg2LTYuMzUtNC45ODZDNS4zMDIuNDcyIDAgNi40NTYgMCAxNC4zMmMwIDcuNjEyIDMuODY0IDEyLjExMiA5LjMzNCAxMi4xMTIgMy40NSAwIDYuNzA3LTEuOTcgOC45NTUtNS42MDIuNTY1IDMuMTggMi43MzMgNC41MTkgNC4zNTggNC41MTkgMi42MjkgMCA0LjM0Ni0xLjcwMSA1LjI4NC00LjAwNy41ODUgMi4zMSAxLjgyIDQuMDE2IDMuODcgNC4wMTYgMS40NDYgMCAyLjU3My0uNzMxIDMuNDIyLTEuOTA2LS4zMzYgOC4wMjMtLjc2MiAxMy4xMzggMy45NzkgMTIuMTMtLjczMi0yLjI4LS45NjYtNi40MzMtLjk2Ni0xMC4xNjEgMC0xMC4yMDMgMS42ODMtMTMuNTYgMy43OTItMTMuNTYgMS41MjggMCAyLjAyMyAxLjk0OCAyLjAyMyA0LjAyNiAwIDEuMTEzLS4xMDYgMi4zOTItLjM5IDMuNTQ3QzQxLjA3IDIxLjA2OSAzOSAyMi4zNTkgMzkgMjMuOTk5YzAgMS4yOTcuOTYyIDEuNDE4IDEuNzk1IDEuNDE4IDEuOTkgMCA0LjM4NS0xLjk1MyA1LjcwOS01LjYzOCAxLjE1OC0uNyAyLjMxOC0xLjUwMyAzLjQyOS0yLjU5Ni0uMDM3LjM3NC0uMDYuNzUtLjA2IDEuMTM0IDAgMy42NTkgMS42MDMgNS44NjggNC4xNTkgNS44NjggMi4wMDMgMCAzLjUwNi0xLjQyIDQuNTY2LTMuNTQ3LjA2NyAxLjIyNi4xMDggMi4zNTUuMTI3IDMuMzk1LTQuMDYzIDEuODc3LTguNTYgMy43ODctOC41NiA5LjA4NyAwIDIuNzQyIDEuOTggNC44MDcgNC41NiA0LjgwNyA1LjY2IDAgNi45NS01Ljk3NCA3LjAwNC0xMi45MTQgMS44NDItLjggMy4yMTUtMS40MTYgNC43OTktMi4xOTggMS4zNTQgMS42OTQgMy4xOTQgMi41NDQgNC44ODMgMi41NDQgMy4xOTUgMCA1LjU5My0xLjY5MyA3LjUyLTUuMTI1LjM0MiAyLjYxMiAxLjAxOSA1LjEyNSAyLjQwNyA1LjEyNSAyLjUzMyAwIDMuMDQ1LTEzLjI0IDQuOTI5LTEzLjI0IDEuNDQyIDAgLjI1NyAxNC4zMjYgNC4wNjUgMTQuMzI2IDMuMjYgMCAzLjg3Mi0xMi42MDcgNS40NTktMTIuNjA3IDEuMTI1IDAgMS4yMSAxMS41MjMgNC43NiAxMS41MjMgMS43NDYgMCAzLjY0LTIuMDk4IDQuNTktNi40OTQuNDQ1IDIuOTI0IDEuOTIzIDYuNDk0IDQuODA4IDYuNDk0IDEuNjgzIDAgMy4xMy0xLjcwMyA0LjI0Ny0zLjk2Ny4zMDggMi4zMy45NjggMy45NjcgMi4yNDMgMy45NjcgMy4zMTcgMCAzLjIwNi0xMy4yMTIgNS44MzItMTMuMjEyIDIuMDQ4IDAgMS40MTQgMTMuMjEyIDYuMjkgMTMuMjEyIDIuMzIgMCAzLjQyLTEuOTc4IDQuMDc0LTQuNDU4Ljg5NyAzLjY0OSAyLjM0NyA0LjQ1OCAzLjUzOSA0LjQ1OC43NTUgMCAxLjMyNi0uMjY2IDIuMDc0LTEuMTU4LTMuNzctMS42MzYtMy40NTMtNy41ODgtMy40NTMtMTEuNDMzTTU0Ljk2MiAzNS40NTZjLTEuMTcxIDAtMS43OS0xLjExMS0xLjc5LTIuMzcgMC0zLjM4NyAyLjQ4OC01LjE4NiA1LjU1NC02LjczLS4xNCA3LjQwNy0xLjg2MSA5LjEtMy43NjQgOS4xbTE1LjIzLTI0LjAxYzEuMTQgMCAxLjc5MyAxLjA0NyAxLjY4IDIuNTUzLS4xMzMgMS43NjktMS40MiAzLjc5Mi0zLjY1NyA1LjM4My0xLjE3LTMuMzI1LS4zLTcuOTM2IDEuOTc4LTcuOTM2TTEwNi4zMTYgNi40MzhjMS4wODctLjAzNyAxLjg0Ni0uOTcgMS44NS0yLjA4LjAwNC0xLjExLS43NDYtMS45ODEtMS44MzMtMS45NDItMS4wODcuMDM3LTEuOTczLjk2OC0xLjk3OCAyLjA3OS0uMDA1IDEuMTEuODczIDEuOTggMS45NjEgMS45NDNNMTMzLjMzOCA3LjAwMWMuOTg5LS4wMzUgMS43OTYtLjkyMyAxLjgtMS45OC4wMDUtMS4wNTktLjc5NC0xLjg4Ny0xLjc4NS0xLjg1Mi0uOTkxLjAzNi0xLjc5Ni45MjQtMS44MDEgMS45ODEtLjAwNCAxLjA1OC43OTYgMS44ODcgMS43ODYgMS44NTFNMTcwLjA3MiAxNS43OTNjLS4wODEtNC4xODctMi4wNzQtNy43Mi01LjE0NS0xMC41NC0yLjMzMi0yLjEzLTUuMTAzLTMuNzQ3LTguMDA4LTQuOTY1YTI4Ljg3NyAyOC44NzcgMCAwIDAtLjcwNS0uMjg3aC0uMDAxYy0zLjU3NyA0LjI4NS0xNS45NjMgNy40ODMtMTUuOTYzIDE2LjQ2NyAwIDMuNTEyIDIuMjE4IDYuNzk2IDUuNDc1IDguMTE0IDEuODg4LjcxNCAzLjc3Ny43NTMgNS42NjcuMTE4IDEuNjgtLjU1MiAzLjA2Mi0xLjU5NCA0LjIxMS0yLjg2NCAzLjYzOC00LjAyMiA1LjExOC0xMC4yNiA5LjU4MS0xMC4yNiA0LjA4NCAwIDQuNjM0IDIuOTA3IDQuODk1IDQuNDgxIDAtLjAwNC0uMDAyLS4xMTQtLjAwNy0uMjY0Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="},sZT1:function(M,L,N){"use strict";var j=N("I4WI"),t=N.n(j);t.a}}]);