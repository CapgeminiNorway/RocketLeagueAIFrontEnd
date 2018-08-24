<template>
    <div class="col-7 q-mr-md videoWrapper">
      <iframe src="https://player.twitch.tv/?channel=capgemini_rocketleagueai" frameborder="0"
      allowfullscreen="true" scrolling="no" width="100%" height="92%"></iframe>
      <a href="https://www.twitch.tv/capgemini_rocketleagueai?tt_content=text_link&tt_medium=live_embed"
      style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px;
      text-decoration:underline;">Watch live video on www.twitch.tv</a>
    </div>
</template>

<script>
export default {
  name: 'videoWrapper',
  data() {
    return {
    };
  },
};
</script>
