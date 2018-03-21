<template>
  <form class="email-registration-form" @submit.prevent="registerEmail" ref="form">
    <p>
      <input type="email" name="email" v-model="formData.email" placeholder="メールアドレス" required @input="validate" :readonly="status.isLoading">
    </p>

    <button type="submit" :disabled="!isValid || status.isLoading">
      最新情報をメールで受け取る
    </button>
  </form>
</template>

<script>
export default {
  name: 'email-registration-form',
  data () {
    return {
      formData: {
        email: null,
      },
      isValid: false,
      status: {
        isLoading: false,
      },
    }
  },
  methods: {
    validate () {
      this.isValid = this.$refs.form.checkValidity()
    },
    async registerEmail () {
      this.status.isLoading = true
      try {
        const payload = {...this.formData}
        await this.$axios.$post('/emails', payload)
        alert('登録が成功しました')
      } catch (e) {
        if (!e.response || e.response.status !== 409) {
          console.log(e)
          alert('Eメール登録においてエラーが発生しました。')
        } else {
          alert('そのメールアドレスは既に登録されています。')
        }
      } finally {
        this.status.isLoading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
// TODO: Not yet implemented
</style>
