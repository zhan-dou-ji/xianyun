<template>
  <el-row>
    <div class="post-wrapper">
      <div class="search">
        <div class="search-a clearfix">
          <input type="text" placeholder="请输入想去的地方，比如：'广州'" class="fl" />
          <a href="#"><i class="el-icon-search fr"></i></a>
        </div>
        <div class="search-b">
          推荐:&nbsp;
          <a href="#">
            <span>广州</span>
          </a>
          <a href="#">
            <span>上海</span>
          </a>
          <a href="#">
            <span>北京</span>
          </a>
        </div>
      </div>
      <div class="recommend-c clearfix">
        <h4 class="fl">推荐攻略</h4>
        <!-- <button class="travel-notes fr">
          <span>写游记</span>
        </button>-->
        <el-button type="primary" icon="el-icon-edit" class="travel-notes fr">
          <span>写游记</span>
        </el-button>
      </div>
      <div class="content">
        <h4>
          <a href="#">塞班贵？一定是你的打开方式不对！6000块玩转塞班</a>
        </h4>
        <p class="post-desc">
          <a
            href="#"
          >大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？下面从5个方面来为您一一解读：机票+酒店、岛上交通、玩乐项目、吃以及购买纪念品。1.怎样订机票+酒店性价比最高？机票和酒店的花销往往会占据我们旅行大半的花销，假设机票酒店为塞班行预算的一半，剩下的吃行玩购为预算的另一半，如果能在机票酒店这部分省下钱，也就意味着在塞班岛用来吃行玩购的钱就增加了怎样去塞班？可以转机也可以直飞，转机大多会从韩国转，提前蹲守能买到韩国飞塞班的特价机票，2000以下就能入手，加上国内飞韩国的机票来回塞班得5000+，还没算上在塞班的住宿费用，转机还有中途等待的时间，光花在路途上的时间就比直飞要多上一倍甚至更多，转乘奔波劳累，非联程票还要担心行李托运问题，所以建议大家有直飞还是尽量选择直飞。在酒店上，旅途中我们呆在酒店的时间远比在外游玩的时间少，酒店干净整洁基本就能满足我们休息的需求，塞班不是个享受酒店的地方而且还真不能跟国内星级酒店等位比较，所以不建议大家花过多的钱在塞班的酒店体验上。怎样在机票酒店上获得最高性价比的体验？ 直飞塞班的航班一般和酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。</a>
        </p>
        <div class="card-images">
          <a href="http://157.122.54.189:9093/post/detail?id=4"></a>
        </div>
        <div class="post-info">
          <div class="post-info-left">
            <span>
              <i class="el-icon-location-outline"></i>北京&nbsp;&nbsp;by
            </span>
            <a href="#">
              <img src="#" alt />
              <span>地球发动机</span>
            </a>
            <span>
              <i class="el-icon-view"></i>&nbsp;13230
            </span>
          </div>
        </div>
      </div>
    </div>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
a {
  color: #666;
  text-decoration: none;
}
//搜索栏样式
.search {
  .search-a {
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
    border: 3px solid orange;
    input {
      width: 85%;
      padding: 0 20px;
      line-height: 35px;
      outline: none;
      border: none;
      background: none;
      display: block;
    }
    .el-icon-search {
      padding-top: 5px;
      font-size: 24px;
      color: orange;
      font-weight: 700;
      margin-right: 10px;
      .el-icon-search::before {
        content: "\e619";
      }
    }
  }
  .search-b {
    padding: 10px 0;
    font-size: 12px;
    color: #666;
    a {
      span {
        margin-right: 5px;
      }
    }
    a:hover span{
     color: orange;  
    }
  }
}

//推荐攻略样式
.recommend-c {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  position: relative;
  h4 {
    font-weight: 400;
    font-size: 18px;
    color: orange;
  }
  h4::after {
    display: block;
    content: "";
    width: 72px;
    height: 2px;
    background: orange;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .travel-notes {
    color: #fff;
    background: #409eff;
    border-color: #409eff;

    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    text-align: center;
    border: 1px solid #dcdfe6;
    display: inline-block;
    line-height: 1;

    span {
      margin-left: 5px;
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
    }
  }
}
//内容
.content {
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  h4 {
    white-space: nowrap; //规定段落中的文本不进行换行：
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 18px;
  }
  h4:hover a {
    color: orange;
  }
  .post-desc {
    margin-bottom: 15px;
    line-height: 1.5;
    font-size: 14px;
    height: 63px;
    overflow: hidden;
  }
  .card-images {
    margin: 15px 0;
  }
  .post-info-left {
    font-size: 12px;
    color: #999;
    span {
      margin-right: 10px;
    }
    a {
      span {
        color: orange;
      }
    }
  }
}

/*清除浮动*/
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
  line-height: 0;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
</style>