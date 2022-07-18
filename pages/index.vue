<template>
  <Nuxt/>
</template>
<script>
export default {
  name: 'index',
  mounted() {
    // this.$router.push('/home')
    window.location.href = "/home";
  },
}
</script>
