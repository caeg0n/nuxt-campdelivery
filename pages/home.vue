<template>
  <!-- Body Start -->
  <div>
    <div class="skeleton-loader">
      <Header />
      <div class="main-wrap index-page mb-xxl">
        <SearchBox />
        <Banner />
        <Recently />
        <Category />
        <Offer />
      </div>
    </div>
    <Header2 />
    <Sidebar />
    <!-- Main Start -->
    <main class="main-wrap index-page mb-xxl">
      <SearchBox2 />
      <Banner2 />
      <Recently2 />
      <Category2 />
      <Offer2 />
      <LowestPrice />
      <Essential />
      <Coupons />
      <LowestPrice2 />
      <Question />
    </main>
    <!-- Main End -->
    <Footer />
    <Language />
    <Pwa />
  </div>
  <!-- Body End -->
</template>

<script>
import Header from '~/components/home/Header'
import SearchBox from '~/components/home/SearchBox'
import SearchBox2 from '~/components/home/SearchBox2'
import Banner from '~/components/home/Banner'
import Banner2 from '~/components/home/Banner2'
import Recently from '~/components/home/Recently'
import Recently2 from '~/components/home/Recently2'
import Category from '~/components/home/Category'
import Category2 from '~/components/home/Category2'
import Offer from '~/components/home/Offer'
import Offer2 from '~/components/home/Offer2'
import Header2 from '~/components/home/Header2'
import Sidebar from '~/components/home/Sidebar'
import LowestPrice from '~/components/home/LowestPrice'
import LowestPrice2 from '~/components/home/LowestPrice2'
import Essential from '~/components/home/Essential'
import Coupons from '~/components/home/Coupons'
import Question from '~/components/home/Question'
import Footer from '~/components/home/Footer'
import Language from '~/components/home/Language'
import Pwa from '~/components/home/Pwa'

import { Device } from '@capacitor/device'
import { Geolocation } from '@capacitor/geolocation';

export default {
  components: {
    Language,
    Footer,
    Question,
    Essential,
    LowestPrice,
    LowestPrice2,
    SearchBox,
    SearchBox2,
    Banner,
    Banner2,
    Recently,
    Recently2,
    Category,
    Category2,
    Offer,
    Offer2,
    Header,
    Header2,
    Sidebar,
    Coupons,
    Pwa,
  },
  layout: 'home',
  name: 'home',
  loading: false,
  transition: 'fade',

  computed: {},

  async created() {
    const uid = await Device.getId()
    const coordinates = await Geolocation.getCurrentPosition()
    await this.$store.dispatch('session/setUUID', uid['uuid'])
    await this.$store.dispatch('session/setCapacitorCoordinates', coordinates)
  },

  async mounted() {
  },

  methods: {
    // async getCurrentPosition() {
    //   const coordinates = await Geolocation.getCurrentPosition()
    //   console.log('Current', coordinates)
    // },
    // watchPosition() {
    //   const wait = Geolocation.watchPosition({}, (position, err) => {})
    // },
  },
}
</script>
