<template>
  <div class="admin-container">
    <div class="admin-navbar navbar-custom ">
      <ul class="nav navbar-nav">
        <li><a href="#">Trang chủ</a></li>
        <li><a class="" href="#">Tạo bài viết</a></li>
        <li><a href="#">Quản lý bài viết</a></li>
        <li><a href="#">Cài đặt</a></li>
      </ul>
    </div>
    <div class="admin-content">
      <h1 class="admin-title font-alt text-center">Tạo bài viết mới</h1>
      <form class="admin-form form" @submit.prevent="submitForm">
        <div class="form-group">
          <input v-model="title" class="form-control" type="text" placeholder="Tiêu đề bài viết">
        </div>
        <div class="form-group">
          <textarea v-model="content" class="form-control" placeholder="Nội dung bài viết" rows="10"/>
        </div>
        <div class="form-group">
          <label for="image">
            Chọn ảnh cho bài viết
            <input id="image" type="file" accept="image/*"  @change="handleImageUpload">
            <img v-if="imagePreview" :src="imagePreview" alt="Preview" class="admin-image-preview">
          </label>
        </div>
       
        <div class="text-center">
          <button class="btn btn-block btn-round btn-d" type="submit">Đăng bài</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'custom'
})

const title = ref('')
const content = ref('')
const imageFile = ref(null)
const imagePreview = ref('')
const imageName = ref('')

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    imageFile.value = file
    imageName.value = file.name
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const submitForm = () => {
  // Xử lý việc gửi form ở đây
  console.log('Tiêu đề:', title.value)
  console.log('Nội dung:', content.value)
  console.log('Ảnh:', imageFile.value)
}
</script>

<style>

</style>