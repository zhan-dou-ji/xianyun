<template>
  <section class="container">
    <el-row type="flex" :gutter="300">
      <!-- 左侧边栏 -->
       <el-col :span="6">
         <CityList class="CityList"/>
       </el-col>
        
      <!-- 内容 -->
      <el-col :span="18">
         <CityreStrategy class="CityList"/>
       </el-col>
        
      
    </el-row>
  </section>
</template>

<script>
import CityList from "@/components/post/cityList";
import CityreStrategy from "@/components/post/cityreStrategy";
export default {
  data(){
    return{

    }
  },
  components: {
    CityList,
    CityreStrategy
  },
};
</script>

<style scoped lang="less">
.el-row {
    margin-bottom: 0px;
    &:last-child {
      margin-bottom: 0;
    }
  }
.container {
  width: 1000px;
  margin: 0 auto;
}
.CityList{
  margin: 20px;
}
</style>