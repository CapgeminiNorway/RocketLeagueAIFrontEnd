<template>
  <q-page class="main-container">
    <div class="row justify-center q-mt-lg cap_flex">

      <h5 class="bg-primary text-white col-12">NOW PLAYING</h5>
      <div class="col-12 row ">
        <div class="col-lg-7 col-12">
          <videoWrapper window-height></videoWrapper>
        </div>
        <div class="col-lg-5 col-12">
          <currentMatch></currentMatch>
        </div>
        <div class="col-lg-6 col-12">
          <nextup></nextup>
        </div>
        <div v-if="$q.screen.gt.md" class="col-1"></div>
        <div class="col-lg-5 col-12">
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
