<template>
  <Waline :serverURL="https://waline.csy2022.tk" :path="window.location.pathname.replace(/\/$/,'')" />
</template>
<script setup>
import { Waline } from '@waline/client/component';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import '@waline/client/dist/waline.css';

const serverURL = 'https://waline.csy2022.tk';
const path = computed(() => useRoute().path);
const dark = 'auto';
</script>