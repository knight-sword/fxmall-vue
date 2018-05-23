<template>
  <div class="hello">
    <div class="header" style="margin-top: 15px;">
      <el-row type="flex" class="row-bg">
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <div id="logo">
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple-light">
            <div class="searchInput">
              <el-input placeholder="请输入内容" v-model="input5" clearable>
                <el-button @click="searchClick" slot="append" icon="el-icon-search">搜索</el-button>
              </el-input>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div>
      <a href="//www.jd.com/">进入京东首页</a>
    </div>
    <div class="searchnav">
      <a target="_blank" href="//www.jd.com/intro/about.aspx">关于我们</a>  |
      <a target="_blank" href="//help.jd.com/user/issue.html">常见问题</a>  |
      <a target="_blank" href="//www.jd.com/contact">联系我们</a>  |
      <a target="_blank" href="//app.jd.com">手机京东</a>  |
      <a target="_blank" href="//club.jd.com">京东社区</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      input5: '手机'
    }
  },
  methods: {
    searchClick () {
      // window.open('http://localhost:8080/#/goods?keyword=%E6%89%8B%E6%9C%BA')
      this.$router.push({path: '/goods',
        query: {
          keyword: this.input5
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.el-row {*/
  /*margin-bottom: 20px;*/
  /*&:last-child {*/
    /*margin-bottom: 0;*/
  /*}*/
/*}*/
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
}

#logo {
  height: 40px;
}
a {
  text-decoration: none;
  font-size: 12px;
}
.searchnav a {
  color: #333;
  margin-left: 5px;
}
.searchnav {
  margin-top: 20px;
}
</style>
