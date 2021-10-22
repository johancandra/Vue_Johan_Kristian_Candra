<template>
  <div class="detail">
    <h1>{{ title }}</h1>
    <div><img class="image" :alt=title :src=image></div>
    <div class="content">
    <h4>Content</h4>
    <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailArticle',
  props: {
    image : String,
    title : String,
    content : String
  },
  components: {
  }
}
</script>

<style scoped>
.detail{
  padding: 20px;
  margin: 25px 50px 25px 50px;
  text-align:left;
}
.image{
	width:100%;
}
.content{
	text-align:left;
}
</style>

