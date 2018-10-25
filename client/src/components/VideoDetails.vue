
<template>
  <div id='detailsVideo'>

    <h3>Details:</h3>
    <h1 v-if='showLogin'>Please Login to like</h1>
      <div class="card mb-2" style="width: 100%;">
        <div class="card-body">
          <img class="card-title" :src='video.thumbnails.high.url'/>
          <p class="card-text">
            
          </p>
        </div>
      </div>
      <strong>{{video.title}}</strong>&nbsp;
      <button class="btn btn-sm btn-primary" @click='liked(video)'>Like this Video!</button><br />
      <br />
      <pre class="card">{{video.description}}</pre>
      <br />
      
  </div>
</template>

<script>
import {
    mapActions,
    mapState
  } from 'vuex'

  export default {
    name: 'detailsVideo',
    props: {
      msg: String
    },
    data() {
      return {
        video: '',
        query: '',
        showLogin: false,
        msg: ''
      }
    },
    methods: {
      ...mapActions(['getLikes']),
      getVideo(id) {
        let self = this
        axios.get(`https://www.googleapis.com/youtube/v3/videos`, { 
          "params": {
            "key": 'AIzaSyDRGkpMEtOnPSPPQXWrRYvZwdxgn5plEqI',
            "part": 'snippet',
            "id": id
          }
        })
          .then((result) => {
            // console.log('RESULT get id detailssss', result.data.items[0], 'XXXXX')
            self.video = result.data.items[0].snippet
          }).catch((err) => {
            console.log( err)
          })
      }, 
      liked(video) {
        if(!this.loggedin) {
          this.showLogin = true
        } else {
          // showLogin = false
          this.likes.forEach(vid=>{
            if(vid.title == video.title) {
              msg = 'you can only like once per vid..'
              showLogin = true
              return
            }
          })
              this.getLikes(video)
              showLogin = false
        }
      }
    },
    computed: {
      ...mapState(['loggedin', 'likes']),
      getParamsId: function() {
        return this.$route.params.id
      }
    },
    watch: {
      getParamsId: function(val) {
        this.getVideo(val)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>