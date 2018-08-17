<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header v-model="show" reveal>
      <q-toolbar color="white">
        <q-toolbar-title align="left">
          <div class="row ">
            <img src="assets/capgemini_logo.svg" class="" >
          </div>
        </q-toolbar-title>
        <q-side-link to="/" class="text-black q-mr-md">How to play</q-side-link>
        <q-side-link to="/" class="text-black">Sign in</q-side-link>
      </q-toolbar>
      <div class="arl_toolbar">
        <div class="row justify-between">
        <h2 class="text-white col q-pa-md">AI Rocket league</h2>
        <div class="toolbar_overlay col-2 q-pa-md">
          <h5 class="text-secondary">Sign up today!</h5>
          <p class="text-secondary">Lorem ipsum dolor sit amet, legimus
            volumus laboramus ei est, est veri munere cu. </p>
          <q-btn class="bg-white">Sign up</q-btn>
        </div>
      </div>

      </div>
    </q-layout-header>
    <!--
    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/quasarframework/')">
          <q-item-side icon="code" />
          <q-item-main label="GitHub" sublabel="github.com/quasarframework" />
        </q-item>
        <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
          <q-item-side icon="chat" />
          <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
        </q-item>
        <q-item @click.native="openURL('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </q-layout-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      show: true,
    };
  },
  methods: {
    openURL,
    handleScroll(event) {
      console.log(event);
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>
</style>
