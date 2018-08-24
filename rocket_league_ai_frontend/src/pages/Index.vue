<template>
  <q-page class="main-container">
    <div class="row justify-center q-mt-lg cap_flex">

      <h5 class="bg-primary text-white col-12">NOW PLAYING</h5>
      <div class="col-12 row ">
        <div class="col-7">
          <videoWrapper window-height></videoWrapper>
        </div>
        <div class="col-5">
          <currentMatch></currentMatch>
        </div>
        <div class="col-6">
          <nextup></nextup>
        </div>
        <div class="col-1"></div>
        <div class="col-5">
          <leaderBoard></leaderBoard>
        </div>
      </div>
    </div>
    <div class="row">
      <about></about>
    </div>

  </q-page>
</template>
<script>
import videoWrapper from '../components/videoWrapper';
import leaderBoard from '../components/leaderBoard';
import nextup from '../components/nextup';
import currentMatch from '../components/currentMatch';
import about from '../components/about';


export default {
  name: 'PageIndex',
  components: {
    videoWrapper,
    leaderBoard,
    currentMatch,
    nextup,
    about,
  },
  data() {
    return {
    };
  },
};
</script>
