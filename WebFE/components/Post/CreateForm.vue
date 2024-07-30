<template>
<form class="admin-form form" @submit.prevent="submitForm">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="successMessage" class="success">{{ successMessage }}</div>
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
          <button type="submit" class="btn btn-round btn-b" :disabled="isLoading">
            {{ isLoading ? 'Đang xử lý...' : 'Đăng bài' }}
        </button>
        </div>
      </form>

    <form class="form" @submit.prevent="handleLogin">
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="successMessage" class="success">{{ successMessage }}</div>
      <div class="form-group">
        <input v-model="email" class="form-control" type="text" placeholder="Email đăng nhập" required data-validation-required-message="Nhập email của bạn.">
      </div>
      <div class="form-group">
        <input v-model="password" class="form-control" type="password" placeholder="Mật khẩu" required data-validation-required-message="Nhập mật khẩu của bạn.">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-round btn-b" :disabled="isLoading">
        {{ isLoading ? 'Đang xử lý...' : 'Đăng nhập' }}
        </button>
      </div>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useLogin } from '~/composables/useAuth'
  
  const email = ref('')
  const password = ref('')
  
  const { login, error, isLoading, successMessage } = useLogin()
  
  const handleLogin = async () => {
    await login(email.value, password.value)
    if (successMessage.value) {
      email.value = ''
      password.value = ''
    }
  }
  </script>
  
  <style scoped>
  .error {
    color: red;
    margin-bottom: 10px;
  }
  .success {
    color: green;
    margin-bottom: 10px;
  }
  </style>