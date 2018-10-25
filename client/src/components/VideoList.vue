<template>
  <div id='videoList'>


    <!-- Search Form -->
    <form>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search videos across YouTube..." aria-label="Search videos across YouTube..."
          aria-describedby="go-button-addon" auto-complete="off" autofocus>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="go-button-addon">
            Go!
          </button>
        </div>
      </div>
    </form>
    <!-- Video List -->
    <ul class="list-unstyled">
      <a href="JavaScript:Void(0);" class="video-link">
        <li class="media my-4">
          <img class="mr-3" src="https://via.placeholder.com/120x90" alt="Thumbnail">
          <div class="media-body">
            <h5 class="mt-0 mb-1">Video Title</h5>
            Video Description
            <br />
          </div>
        </li>
      </a>
    </ul>
  </div>
  </div>

  </div>
</template>

<script>
  import {
    mapActions,
    mapState
  } from 'vuex'

  export default {
    data() {
      return {
        videos: []
      }
    },
    computed: {
      ...mapState(['loggedin']),
      loginStatus() {
        return this.loggedin
      }
    },
    created() {
      this.errorLogin = false
      if (localStorage.getItem('token')) {
        this.isLogin(true)
      }
      this.getVideos()
    },
    methods: {
      ...mapActions(['isLogin', 'profile']),
      getVideos() {
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDRGkpMEtOnPSPPQXWrRYvZwdxgn5plEqI&part=snippet`)
        .then((result) => {
          console.log('GET VIDEOS:--', result)
        }).catch((err) => {
          console.log(err)
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>