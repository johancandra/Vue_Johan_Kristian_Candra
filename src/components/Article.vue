<template>
<div class="item">
    <div><img class="image" :alt=title :src=image></div>
    <div>{{ title }}</div>
    <div>published_at : {{ published_at }}</div>
    <div>expired_at : {{ expired_at }}</div>
</div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    image : String,
    title : String,
    published_at : String,
    expired_at : Number
  }
}
</script>

<style scoped>
.item{
  border: solid 1px;
  padding: 20px;
  margin: 10px 30px 10px 30px;
  text-align:left
}
.image{
  width: 100%;
  height: auto;
}
</style>
