<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form ref="formRef">
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model.trim="formData.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="formData.description"
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="formData.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="formData.tag"
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  @keyup.enter="handleEnter"
                />
                <div class="tag-list">
                  <span v-for="(tag, index) in tagList" :key="tag" class="tag-default tag-pill">
                    <i class="ion-close-round" @click="handleTagClose(index)"></i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click="handleSubmit">
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addArticle } from '@/api/article'

export default {
  name: 'EditorIndex',
  middleware: 'authenticated',
  data() {
    return {
      formData: {
        title: '',
        description: '',
        body: '',
        tag: ''
      },
      tagList: []
    }
  },
  methods: {
    async onSubmit() {
      const params = {
        article: {
          ...this.formData,
          tagList: this.tagList
        }
      }
      delete params.article.tag
      const { data } = await addArticle(params)
      this.$router.push({
        name: 'home'
      })
    },
    handleEnter() {
      const tag = this.formData.tag
      this.tagList.push(tag)
      this.formData.tag = ''
    },
    handleTagClose(index) {
      this.tagList.splice(index, 1)
    },
    handleSubmit() {
      this.onSubmit()
    }
  }
}
</script>

<style></style>
