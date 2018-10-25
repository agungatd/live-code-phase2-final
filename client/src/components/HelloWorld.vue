
<template>
  <div id='detailsVideo'>

    <h3>Details:</h3>
      <div class="card mb-2" style="width: 100%;">
        <div class="card-body">
          <h5 class="card-title">YouTube Player goes here</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
      <strong>Video Title</strong>&nbsp;
      <button class="btn btn-sm btn-primary">Like this Video!</button><br />
      <br />
      <pre class="card">Video description goes here, you can addnewline too!</pre>
      <br />
      
  </div>
</template>

<script>
  export default {
    name: 'detailsVideo',
    props: {
      msg: String
    },
    data() {
      return {
        videos: [],
        query: ''
      }
    },
    methods: {
      getVideo(id) {
         console.log('get id from LIST on detailssss', id)
        let self = this
        // axios.get(`https://www.googleapis.com/youtube/v3/search`, { 
        //   params: {
        //     key: 'AIzaSyDRGkpMEtOnPSPPQXWrRYvZwdxgn5plEqI',
        //     part: 'snippet',
        //     maxResults: 1
        //   }
        //   // .then((result) => {
        //   //   alert(result)
        //   // }).catch((err) => {
        //   //   console.log(err)
        //   // });
        // })
      }
    },
    computed: {
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