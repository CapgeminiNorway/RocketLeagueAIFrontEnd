<template>
  <q-page class="main-container">
    <div class="row justify-center q-mt-lg">
      <div class="col-12 text-center">
        <h5>HOW TO PLAY</h5>
        <p>There are several ways to make your own AI-bot and participate in the league.
          Follow the instructions to start and compete.</p>
      </div>
    </div>
    <div class="row justify-center q-mt-lg">
      <div class="col-4 instruction_circle ">
        <a href="http://www.rlbot.org/"><h1><q-icon name="code"/></h1></a>
        <p class="col-2 text-bold">1. Choose programming language</p>
        <p>
          You can choose between 4 different <a href="http://www.rlbot.org/">programming languages</a>
          for your bot.
          We recommend Scratch if you've never done programming before.
        </p>
      </div>
      <div class="col-4 instruction_circle"><h1><q-icon name="format_align_left"/></h1>
        <p class="col-2 text-bold">2. Follow the instructions</p>
        <p>
          You get guidance depending on the programming language of your choice. Follow the
          instructions on the external site.
        </p>
      </div>
      <div class="col-4 instruction_circle"><router-link to="/profile">
        <h1><q-icon name="whatshot"/></h1></router-link>
        <p class="col-2 text-bold">3. Upload your AI-bot!</p>
        <p>
          Upload your script from your <router-link to="/profile"><a>profile</a></router-link>.
          Give it a smashing name and start competing!
        </p>
      </div>
    </div>

    </q-page>
  </template>
