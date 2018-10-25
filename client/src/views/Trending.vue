<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-7">
          <div class="mt-4">
            <list :isTrending='isTrending' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import list from '@/components/VideoList.vue'
import details from '@/components/VideoDetails.vue'

export default {
  name: 'home',
  components: {
    list, details
  },
   data() {
      return {
        videos: [],
        query: '',
        isTrending: true
      }
    },
}
</script>
