<template>
  <!-- type="flex" 让所有弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容： -->
  <el-row class="box">
    <div class="city-list" v-for="(item,index) in data" :key="index">
      <div class="city-list-item">
        <span>{{item.type}}</span>
      </div>
      <div class="city-list-2">
        <ul>
          <li v-for="(item,index) in data[index].children" :key="index">
            <a href="#">
              <i>{{index+1}}</i>
              <strong>{{item.city}}</strong>
              <span>{{item.desc}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="recommend-city">
      <h4 class="aside-title">推荐城市</h4>
      <a href="#" class="aside-recommend-item">
        <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" alt />
      </a>
    </div>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          type: "", // 主题类型
          children: [] // 城市列表
        }
      ],
      total: 0
    };
  },
  mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      console.log(res);
      const { data } = res.data;
      this.data = data;
      console.log(this.data[0].children);
    });
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  font-size: 14px;
  line-height: 1.5;
  vertical-align: middle;
  a {
    color: #666;
    text-decoration: none;
    i {
      color: orange;
      font-size: 24px;
      font-style: italic;
    }
    strong {
      margin: 10px;
      color: orange;
      font-weight: 400;
    }
    span {
      color: #999;
    }
  }
}

.city-list {
  width: 260px;
  border: 1px solid #ddd;
  border-right: none;
  border-bottom: none;
  box-shadow: 0 0 1px #f5f5f5;
  z-index: 2;
  .city-list-item {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
    position: relative;
    z-index: 2;
    span::after {
      content: "";
      width: 10px;
      height: 10px;
      border-right: 1px solid #999;
      border-top: 1px solid #999;
      transform: rotate(45deg);
      position: absolute;
      right: 20px;
      top: 15px;
    }
  }
  .city-list-item:hover + .city-list-2 {
    display: block;
  }
  .city-list-2 {
    display: none;
    position: absolute;
    left: 260px;
    top: 0;
    width: 350px;
    padding: 10px 20px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #ddd;
  }
}

.recommend-city {
  margin-top: 20px;
  width: 260px;
  .aside-title {
    font-weight: 400;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }
  .aside-recommend-item {
    text-decoration: none;
    color: inherit;
    img {
      width: 100%;
      display: block;
    }
  }
}
</style>