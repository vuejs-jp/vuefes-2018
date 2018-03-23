<template>
  <form class="email-registration-form" @submit.prevent="registerEmail" ref="form" v-if="!isRegistered">
    <p>
      <input type="email" name="email" v-model="formData.email" placeholder="メールアドレスを入力してください" required @input="validate" :readonly="status.isLoading">
    </p>

    <button class="conversion-button" type="submit" :disabled="!isValid || status.isLoading">
      <template v-if="!status.isLoading">
        最新情報をメールで受け取る
      </template>
      <template v-else>
        登録中……
      </template>
    </button>
  </form>
  <transition v-else>
    <div class="email-registered">
      登録が完了しました。
    </div>
  </transition>
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
      isRegistered: false,
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
        this.isRegistered = true
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
$button-height: 60px;

input {
  margin: 0;
  width: calc(100% - 40px);
  height: 60px;
  padding-left: 18px;
  padding-right: 18px;
  font-size: 18px;

  @media screen and (max-width: $layout-breakpoint--is-small-up) {
    margin-bottom: 10px;
  }

  &[readonly] {
    color: #aaa;
  }
}

.conversion-button {
  background-color: $primary-color;
  width: 100%;
  height: $button-height;
  border-radius: 1px;
  text-align: center;
  font-size: 18px;
  color: $primary-text-color--is-bg-dark;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.5);
  transition: all 0.25s ease-out;

  &:disabled,
  &.is-busy {
    background: #aaa;
  }

  a {
    display: inline-block;
    width: 100%;
    line-height: $button-height;
    font-size: 18px;
    color: $primary-text-color--is-bg-dark;
    white-space: nowrap;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
  }
}

.email-registered {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  width: 100%;
  height: 90px;
  font-size: 18px;
  color: #fff;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .email-registration-form {
    display: flex;
    justify-content: center;

    p {
      margin: 0;
    }

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

  $button-height: 80px;

  .conversion-button {
    width: 456px;
    height: $button-height;
    font-size: 32px;
    text-align: center;

    a {
      width: 100%;
      line-height: $button-height;
      font-size: 32px;
    }
  }
}
</style>
