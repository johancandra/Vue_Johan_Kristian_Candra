<template>
  <div class="header"><span class="apptitle">ARTICLE APP</span></div>
  <div class="list">
  <h4>List Article</h4>
    <!--<button v-on:click="mounted">mount</button>-->
  </div>
  <div>
    <div class="row items" v-for="infos in chunkedInfo" :key="infos">
      <div class="col-md-4 article" v-for="item in infos" :key="item">
      <router-link
      :to="{name:'DetailArticle', 
      params: { 
      title: item.title,
      content: item.content,
      image: item.image 
      } }" :title="item.title" :image="item.image" :content="item.content" class="itemdetail">
        <Article :title="item.title" :image="item.image" :published_at="item.published_at" :expired_at="item.expired_at"/>
      </router-link>
      </div> 
    </div>
  </div>
</template>

<script>
import Article from '@/components/Article.vue'
import axios from 'axios'
import chunk from 'chunk'

export default {
  name: 'Home',
  components: {
    Article
  },
  data() {
    return {
        chunkedInfo: '',
        columns:[],
        mid:1
    }
  },
  methods: {
  mounted: function() {
      axios
      .get('https://mocki.io/v1/f18c2b81-0b4e-48b8-a6da-cd369e866c41')
      .then(response => (
        this.chunkedInfo = chunk(response.data.data, 3)
      ))
  }
  },
  beforeMount(){
    this.mounted()
  }
}
</script>

<style scoped>
.items {
  width: 100%;
    margin: 0px;
}
.apptitle {
  border:1px solid;
  text-align:left;
  font-size:35px;
  padding:0px 10px 0px 10px;
}
.header {
  width:100%;
  border-bottom:1px solid;
  padding:12px;
  text-align:left;
}
.list{
  text-align:left;
  padding:30px 30px 12px 30px;
}
.article{
  padding:0px;
}
.itemdetail{
  text-decoration: none; color: inherit;
}
</style>