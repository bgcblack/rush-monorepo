<template>
  <div class="hello">
    <input type="file" @change="uploadFile">

    <div class="footer">
      <button @click="onStartUpload">上传</button>
      <button @click="onPauseUpload">暂停</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import {ref } from "vue";
import { type FilePiece, splitFile } from "../utils/file"

const file = ref<File | null>(null);
const fileChunks = ref<FilePiece[]>([]);

// 选择文件
function uploadFile(e) {
  file.value = e.target.files[0];
}

// 开始上传
async function onStartUpload() {
  
  if(!file.value) {
    alert("请选择文件再上传！")
    return;
  }
  //进行分片
  const fileChunkList = splitFile(file.value);
  fileChunks.value = fileChunkList
  console.log(fileChunkList);
  //开始上传
  //await uploadChunks({})
}

// 暂停上传
function onPauseUpload() {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
