<template>
    <div id="app">
      <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                 list-type="picture-card"
                 ref="upload"
                 :on-preview="handlePictureCardPreview"
                 :auto-upload="false"
                 :on-error="handleOnError"
                 :multiple="true"
                 :http-request="uploading">
        <i class="el-icon-plus" slot="trigger"></i>
        <!--<el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->
        <!--<el-button size="small" type="primary">点击上传</el-button>-->
      </el-upload>
      <el-button style="margin-left: 10px;margin-top: 20px"
                 size="small" type="primary"
                 @click="submitUpload"
                 v-loading.fullscreen.lock="fullscreenLoading">
        上传到服务器
      </el-button>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt>
      </el-dialog>
    </div>
</template>
<script>
export default {
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      fullscreenLoading: false
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    submitUpload () {
      this.fullscreenLoading = true
      this.$refs.upload.submit()
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2000)
    },
    handleOnError (event, file, fileList) {
      alert('上传失败！！！')
    }
    // uploading () {
    //   alert(2222222222)
    // }
  }
}
</script>
