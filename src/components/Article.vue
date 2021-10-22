<template>
<div class="item">
    <div><img class="image" :alt=title :src=image></div>
    <div>{{ title }}</div>
    <div>published_at : {{ published_at }}</div>
    <!--<div>expired_at : {{ expired_at }}</div>-->
    <div>expired_at : {{ namahari2[(namahari.indexOf(published_at)+1+expired_at)%7] }}</div>
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
  },
  afterMount(){
    this.hari = this.namahari.indexOf(this.published_at) + 1
    this.hari = this.hari+this.expired_date
    this.hari = this.hari % 7
    this.hari = this.namahari[this.hari]
  },
  data() {
    return {
        namahari: ["Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu","Minggu"],
        namahari2: ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"],
        hari:0,
    }
  },
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
