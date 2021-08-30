<template>
  <div>
    <form
      class="card comment-form"
      @submit.prevent="onSubmit"
    >
      <div class="card-block">
        <textarea v-model="comment.body" class="form-control" placeholder="Write a comment..." rows="3"></textarea>
      </div>
      <div class="card-footer">
        <img :src="article.author.image" class="comment-author-img" />
        <!-- <img src="https://thirdqq.qlogo.cn/g?b=oidb&k=V7g4wibr5bzgZzjNYRdgSTQ&s=140&t=1555434647" class="comment-author-img" /> -->
        <button class="btn btn-sm btn-primary">
          Post Comment
        </button>
      </div>
    </form>

    <div
      class="card"
      v-for="comment in comments"
      :key="comment.id"
    >
      <div class="card-block">
        <p class="card-text">{{ comment.body }}</p>
      </div>
      <div class="card-footer">
        <nuxt-link
          class="comment-author"
          :to="{
            name: 'profile',
            params: {
              username: article.author.username
            }
          }"
        >
          <img :src="article.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link
          class="comment-author"
          :to="{
            name: 'profile',
            params: {
              username: article.author.username
            }
          }"
        >{{ article.author.username }}</nuxt-link>
        <span class="date-posted">{{ article.createdAt | date('MMM dd, YYYY')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments, addComments } from '@/api/article'

export default {
  name: 'ArticleComments',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      comment: {
        body: ''
      },
      comments: []
    }
  },
  async created() {
    const { data } = await getComments(this.article.slug)
    this.comments = data.comments
  },
  methods: {
    async onSubmit() {
      const { data } = await addComments(this.article.slug, { comment: this.comment })
      console.log(data)
    }
  }
}
</script>

<style>

</style>