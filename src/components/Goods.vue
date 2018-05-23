<template>
  <div>
    <div style="margin-top: 15px;" class="goods">
      <div class="m-list" v-if="noResult">
        <div id="goodsList" >
          <ul class="gl-warp" v-for="item in goods" :key="item.goodsId">
            <li class="gl-item">
              <div class="gl-i-wrap">
                <div class="p-img">
                  <a target="_blank" title="更多精彩，戳我！" href="http://localhost:8080">
                    <img :src="item.imgUrl" width="220" height="220">
                  </a>
                </div>
                <div class="p-name">
                  <a :title="item.goodsName" href="https://ccc-x.jd.com/dsp/nc?ext=aHR0cHM6Ly9pdGVtLmpkLmNvbS83MzU3OTMzLmh0bWw&amp;log=FhREBO1bS7JZJSv1h8m5ejRGEKQFchUW_VO75Gf1Ng37JaGbnUOfFTFRE4n1HxUlGlFHil0suWnvhC2L8E_UvvBCEg3zJJvZ1_egNX_a3XaIkmGYu8aCTxhZZpnB2NLw-M5nJUmKdlumvTy3_z9BWTYIRiYxCfhz7jQBiucYn_wtrhl_Tm9H8XK-PCgajKg_Jw7Pdmt7WnP-_iMrAOhMmdwoLJrr8nVG0JTu5WyU3fkWY-bjhFerZzPFXsN0pFipTZoFiM62I2snUO1lyypy1nspwyodb737cMOxLH9uWI9xnO4jpBBa5REESj2MtlPutNxeAnc3KGYabgHTYmsBk8hYf_WGuHqkUfOVe6YbK_pYAA9ZxX3HSjUQe3gP3Tu4YNAlWRMUuHTXWareqKgHPF_ligqVtVJArOfidGQUlAa8VxcFJClPL2AKdHRUusqQ&amp;v=404">
                    {{item.goodsName}}
                  </a>
                </div>
                <div class="p-price">
                  <strong>￥{{item.goodsPrice}}</strong>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage"
                         :page-sizes="[8, 12, 16, 20]"
                         :page-size="pageSize"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="total"
                         background>
          </el-pagination>
        </div>
      </div>
      <div class="error" v-if="!noResult">
        抱歉，没有找到相关的商品
      </div>
    </div>
  </div>
</template>
<script type="es6">
import axios from 'axios'
export default {
  name: 'Goods',
  data () {
    return {
      currentPage: 1,
      goods: [
        {
          imgUrl: '',
          goodsPrice: '',
          goodsName: '',
          goodsId: ''
        }
      ],
      total: 0,
      pageSize: 20,
      pageIndex: 1,
      noResult: false
    }
  },
  methods: {
    getParams: function () {
      console.log('路由参数=' + this.$route.query.keyword)
      // 1.执行远程调用java后台服务。封装调用方法
      // 暂时不传搜索参数到后台
      let url = 'http://localhost:8088/goods/allGoods'
      axios.get(url).then(result => {
        console.log(result.data.count)
        this.total = result.data.count
        this.goods = result.data.list
        if (this.total > 0) {
          this.noResult = true
        }
      }).catch(error => {
        console.log(error.message)
      })
      // 2.绑定数据
      // 3.自动渲染页面 v-for
    },
    // 点击设置每页商品数量
    handleSizeChange (val) {
      console.log('每页: ' + val)
      this.pageSize = val
      let url = 'http://localhost:8088/goods/limit'
      let params = new URLSearchParams()
      params.append('start', this.pageIndex)
      params.append('page', val)
      axios.post(url, params).then(result => {
        this.goods = result.data.list
      }).catch(error => {
        console.log(error.message)
      })
    },
    // 点击跳转到目标分页
    handleCurrentChange (val) {
      console.log('当前页……' + val)
      this.pageIndex = val
      let url = 'http://localhost:8088/goods/limit'
      let params = new URLSearchParams()
      params.append('start', val)
      params.append('page', this.pageSize)
      axios.post(url, params).then(result => {
        this.goods = result.data.list
      }).catch(error => {
        console.log(error.message)
      })
    }
  },
  mounted () {
    this.getParams()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 定义 css */
  * {
    padding: 0;
    margin: 0;
    list-style:none;
    text-decoration:none
  }
  .goods {
    width: 1210px;
    height: 100%;
    margin: auto;
  }
  .gl-item {
    width: 300px;
    height: 400px;
    float: left;
    border: 1px solid #efefef;
    background-color: #fff;
  }
  .p-name {
    margin: 20px 10px 10px 5px;
    height: 40px;
    /*white-space: nowrap;*/
    overflow: hidden;
    /*text-overflow: ellipsis;*/
  }
  .p-img {
    margin-top: 10px;
  }
  .p-name a {
    font-size: 16px;
    color:#000000;
    text-align: left;
  }
  .p-name a:hover {
    color: red;
  }
  .p-price {
    margin-top: 30px;
    color: #d44d44;
  }
  .gl-item:hover {
    transition: all 0.8s;
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    box-shadow: 1px 1px 20px #999;
  }
  .el-pagination {
    float: left;
    align-self: flex-end;
    margin: 2vw 10vw 2vw;
  }
</style>
