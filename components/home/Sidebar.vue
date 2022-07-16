<template>
  <div>
    <a href="javascript:void(0)" class="overlay-sidebar"></a>
    <aside class="header-sidebar">
      <div class="wrap">
        <div class="user-panel">
          <div class="media">
            <a href="account.html">
              <img src="assets/images/avatar/avatar.jpg" alt="avatar"
            /></a>
            <div class="media-body">
              <a href="account.html" class="title-color font-sm"
                >Andrea Joanne
                <span class="content-color font-xs"
                  >andreajoanne@gmail.com</span
                >
              </a>
            </div>
          </div>
        </div>
        <Navigation />
      </div>

      <div class="contact-us">
        <span class="title-color">Contact Support</span>
        <p class="content-color font-xs">
          If you have any problem,queries or questions feel free to reach out
        </p>
        <a href="javascript:void(0)" class="btn-solid"> Contact Us </a>
      </div>
    </aside>
  </div>
</template>
<script>
import Navigation from '~/components/home/Navigation'
export default {
  components: { Navigation },
  computed: {},
  async created() {},
  async mounted() {},
}
</script>
