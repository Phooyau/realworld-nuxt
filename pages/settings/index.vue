<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input v-model="formData.image" class="form-control" type="text" placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="formData.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <textarea v-model="formData.bio" class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input v-model="formData.email" class="form-control form-control-lg" type="text" placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="formData.password" class="form-control form-control-lg" type="password" placeholder="Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import { getUser, editUser } from '@/api/settings'

export default {
  name: 'SettingsIndex',
  middleware: 'authenticated',
  data() {
    return {
      formData: {
        image: '',
        username: '',
        bio: '',
        email: '',
        password: ''
      }
    }
  },
  async created() {
    const { data } = await getUser()
    Object.assign(this.formData, data.user)
  },
  methods: {
    async onSubmit() {
      const { data } = await editUser({ user: this.formData })
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style>

</style>