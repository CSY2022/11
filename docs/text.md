# Comment

<template>
  <Waline :serverURL="https://comments.csy2022.top" :path="window.location.pathname.replace(/\/$/,'')" />
</template>
<script setup>
import { Waline } from '@waline/client/component';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import '@waline/client/style';

const serverURL = 'https://comments.csy2022.top';
const path = computed(() => useRoute().path);
</script>