<template>
    <div id="app">
      <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                 list-type="picture-card"
                 ref="upload"
                 :on-preview="handlePictureCardPreview"
                 :on-remove="handleRemove"
                 :auto-upload="false"
                 :on-error="handleOnerror">
        <i class="el-icon-plus" slot="trigger"></i>
        <!--<el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->
        <!--<el-button size="small" type="primary">点击上传</el-button>-->
        <el-button style="margin-left: 10px;" size="small" type="primary" @click="submitUpload">上传到服务器</el-button>
      </el-upload>
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
      dialogVisible: false
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
      this.$refs.upload.submit()
    },
    handleOnerror (event, file, fileList) {
      alert(999999999)
    }
  }
}
</script>
