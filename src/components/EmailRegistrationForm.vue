<template>
  <form class="email-registration-form" @submit.prevent="registerEmail" ref="form">
    <p>
      <input type="email" name="email" v-model="formData.email" placeholder="メールアドレス" required @input="validate" :readonly="status.isLoading">
    </p>

    <conversion-button @click="registerEmail" :disabled="!isValid || status.isLoading">
      最新情報をメールで受け取る
    </conversion-button>
  </form>
</template>

<script>
import ConversionButton from './ConversionButton'

export default {
  name: 'email-registration-form',
  components: {
    ConversionButton,
  },
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
        const payload = { ...this.formData }
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
input {
  margin-bottom: 10px;
  width: calc(100% - 40px);
  height: 60px;
  padding-left: 18px;
  padding-right: 18px;
  font-size: 18px;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .email-registration-form {
    display: flex;
    justify-content: center;

    .conversion-button {
      font-size: 24px;
    }
  }

  .form-content {
    width: 456px;
  }

  input {
    display: block;
    width: calc(456px - 40px);
    height: calc(80px - 6px);
    font-size: 24px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .form-content {
    width: 940px;

    .conversion-button {
      width: 372px;
    }
  }

  input {
    display: inline-block;
    width: 512px;
    margin-right: 12px;
  }
}
</style>
