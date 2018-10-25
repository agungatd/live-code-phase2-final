<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-7">
          <div class="mt-4">
            <list />
          </div>
        </div>
        <div class="col-xl-5">
          <div class="mt-4">
  <!-- Player and Detail -->
              <helloWorld />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import list from '@/components/VideoList.vue'
import helloWorld from '@/components/VideoDetails.vue'

export default {
  name: 'home',
  components: {
    list, helloWorld
  }
}
</script>
