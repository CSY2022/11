<template>
  <Waline :serverURL="https://waline.csy2022.tk" :path="window.location.pathname.replace(/\/$/,'')" />
</template>
<script setup>
import { Waline } from 'https://unpkg.com/@waline/client@v2/component';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import 'https://unpkg.com/@waline/client@v2/dist/waline.css';

const serverURL = 'https://waline.csy2022.tk';
const path = computed(() => useRoute().path);
const dark = 'auto'
</script>