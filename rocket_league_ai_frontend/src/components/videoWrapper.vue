<template>
  <div class="row justify-center">
    <div  class="col-7 xl cap_flex q-mr-md">
      <h5 class="bg-primary text-white">NOW PLAYING</h5>
      <iframe src="https://player.twitch.tv/?channel=rocketleague" frameborder="0" allowfullscreen="true" scrolling="no" width="100%" height="90%"></iframe>
      <a href="https://www.twitch.tv/rocketleague?tt_content=text_link&tt_medium=live_embed"
      style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px;
      text-decoration:underline;">Watch live video on www.twitch.tv</a>
    </div>
    <div class="col-4 cap_flex">
      <h5 class="bg-primary text-white">NEXT UP:</h5>
      <q-item>
        <q-item-side>
          <q-item-tile avatar>
            <img src="#">
          </q-item-tile>
        </q-item-side>
        <q-item-main label="car vs car" />
        <q-item-side right>
          <q-item-tile icon="info" color="green" />
        </q-item-side>
      </q-item>
      <!--delete under-->
      <q-item>
        <q-item-side>
          <q-item-tile avatar>
            <img src="#">
          </q-item-tile>
        </q-item-side>
        <q-item-main label="car vs car" />
        <q-item-side right>
          <q-item-tile icon="info" color="green" />
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-side>
          <q-item-tile avatar>
            <img src="#">
          </q-item-tile>
        </q-item-side>
        <q-item-main label="car vs car" />
        <q-item-side right>
          <q-item-tile icon="info" color="green" />
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-side>
          <q-item-tile avatar>
            <img src="#">
          </q-item-tile>
        </q-item-side>
        <q-item-main label="car vs car" />
        <q-item-side right>
          <q-item-tile icon="info" color="green" />
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-side>
          <q-item-tile avatar>
            <img src="#">
          </q-item-tile>
        </q-item-side>
        <q-item-main label="car vs car" />
        <q-item-side right>
          <q-item-tile icon="info" color="green" />
        </q-item-side>
      </q-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'videoWrapper',
  data() {

  },
};
</script>
