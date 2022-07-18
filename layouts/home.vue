<template>
  <body>
    <Nuxt v-show="isLoaded"/>
  </body>
</template>
<script>
export default {
  data() {
    return {
      isLoaded: false,
    }
  },
  head() {
    return {
      title: 'teste',
      script: [
        {
          hid: '100',
          src: 'assets/js/jquery-3.6.0.min.js',
          defer: true,
          body: true,
          async: false,
        },
        {
          hid: '101',
          src: 'assets/js/bootstrap.bundle.min.js',
          defer: true,
          body: true,
          async: false,
        },
        {
          hid: '102',
          src: 'assets/js/lord-icon-2.1.0.js',
          defer: true,
          body: true,
          async: false,
        },
        {
          hid: '103',
          src: 'assets/js/feather.min.js',
          defer: true,
          body: true,
          async: false,
        },
        {
          hid: '104',
          src: 'assets/js/slick.js',
          defer: true,
          body: true,
          async: false,
        },
        {
          hid: '105',
          src: 'assets/js/slick.min.js',
          defer: true,
          body: true,
          async: false,
        },
        {
          hid: '106',
          src: 'assets/js/slick-custom.js',
          defer: true,
          body: true,
          async: false,
        },
        {
          hid: '107',
          src: 'assets/js/homescreen-popup.js',
          defer: true,
          body: true,
          async: false,
        },
        {
          hid: '108',
          src: 'assets/js/theme-setting.js',
          defer: true,
          body: true,
          async: false,
        },
        {
          hid: '109',
          src: 'assets/js/script.js',
          defer: true,
          body: true,
          async: false,
          callback: () => { this.isLoaded = true }
        },
      ],
    }
  },
}
</script>
<style></style>
