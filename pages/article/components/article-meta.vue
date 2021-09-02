<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
        name: 'profile',
        params: {
          username: article.author.username
        }
      }"
    >
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link
        class="author"
        :to="{
          name: 'profile',
          params: {
            username: article.author.username
          }
        }"
        >{{ article.author.username }}</nuxt-link
      >
      <span class="date">{{ article.createdAt | date('MMM dd, YYYY') }}</span>
    </div>
    <button
      class="btn btn-sm btn-outline-secondary"
      :class="{ active: article.author.following }"
      @click="handleFollow(article.author.following)"
    >
      <i class="ion-plus-round"></i>
      &nbsp; {{ `${article.author.following ? 'Unfollow' : 'Follow'} ${article.author.username}` }}
      <span class="counter">(10)</span>
    </button>
    &nbsp;&nbsp;
    <button class="btn btn-sm btn-outline-primary" :class="{ active: article.favorited }">
      <i class="ion-heart"></i>
      &nbsp; Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
    </button>
  </div>
</template>

<script>
import { followUser, unFollowUser } from '@/api/profile'

export default {
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    async handleFollow(following) {
      const username = this.article.author.username
      if (!username) {
        return
      }

      const operateUser = following ? unFollowUser : followUser
      const { data } = await operateUser(username)

      // 此处图方便直接改了 props
      this.article.author.following = !this.article.author.following
    }
  }
}
</script>

<style></style>
