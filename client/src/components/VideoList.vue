<template>
  <div id='videoList'>


    <!-- Search Form -->
    <form>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search videos across YouTube..." aria-label="Search videos across YouTube..."
          aria-describedby="go-button-addon" auto-complete="off" autofocus v-model='query'>
        <div class="input-group-append">
          <button class="btn btn-outline-primary" type="button" id="go-button-addon" @click='search'>
            Go!
          </button>
        </div>
      </div>
    </form>
    {{videos[0].channelId}}
    <!-- Video List -
    <router-link :to="{ path: `/home/${video.channelId}`}">See details</router-link>-->
      <ul class="list-unstyled">
        <div v-for='video in videos'>
          <router-link :to="{ path: `/home/${video.id.videoId}`}">
            <li class="media my-4">
              <img class="mr-3" :src="video.snippet.thumbnails.medium.url" alt="Thumbnail">
              <div class="media-body">
                <h5 class="mt-0 mb-1">{{video.snippet.title}}</h5>
                {{video.snippet.description}}
                <br />
              </div>
            </li>
          </router-link>
        </div>
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
        videos: [],
        query: ''
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
        let self = this
        axios.get(`https://www.googleapis.com/youtube/v3/search`, { 
          params: {
            key: 'AIzaSyDRGkpMEtOnPSPPQXWrRYvZwdxgn5plEqI',
            part: 'snippet',
            maxResults: 10
          }
        })
        .then((result) => {
          console.log('GET VIDEOS:--', result.data.items[0]) //[0]: {kind: "youtube#searchResult", etag: ""XI7nbFXulYBIpL0ayR_gDh3eu1k/EbL5CB80HdLJzCQGbqAP7T0poWI"", id: {…}, snippet: {…}}
          let arr = []
          result.data.items.forEach(item=>{
            arr.push(item)
          })
          self.videos = arr
        }).catch((err) => {
          console.log(err)
        });
      },
      search() {
        let self = this
        axios.get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            key: 'AIzaSyDRGkpMEtOnPSPPQXWrRYvZwdxgn5plEqI',
            part: 'snippet',
            q: self.query,
            maxResults: 10
          }
        })
        .then((result) => {
          let arr = []
          result.data.items.forEach(item=>{
            arr.push(item.snippet)
          })
          self.videos = arr
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