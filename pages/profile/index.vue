<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>{{ profile.bio }}</p>
            <button
              class="btn btn-sm btn-outline-secondary action-btn"
              @click="handleFollow(profile.following)"
            >
              <i class="ion-plus-round"></i>
              &nbsp; {{ `${profile.following ? 'Unfollow' : 'Follow'} ${profile.username}` }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab === 'author' }"
                  exact
                  :to="{
                    name: 'profile',
                    query: {
                      tab: 'author'
                    }
                  }"
                >My Articles</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab === 'favorited' }"
                  exact
                  :to="{
                    name: 'profile',
                    query: {
                      tab: 'favorited'
                    }
                  }"
                >Favorited Articles</nuxt-link>
              </li>
            </ul>
          </div>

          <ArticleList :articles="articles"></ArticleList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfile, followUser, unFollowUser } from '@/api/profile'
import { getArticles } from '@/api/article'
import ArticleList from '@/components/article-list'

export default {
  name: 'ProfileIndex',
  middleware: 'authenticated',
  components: {
    ArticleList
  },
  data() {
    return {
      tab: 'author',
      profile: {},
      articles: []
    }
  },
  // async asyncData({ params }) {
  //   const username = params.username
  //   try {
  //     const { data } = await getProfile(username)
  //     return {
  //       profile: data.profile
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }

  //   return {
  //     profile: {}
  //   }
  // },
  watch: {
    '$route.query': {
      handler(val) {
        const { tab } = val
        tab && (this.tab = tab)
        this.loadArticles()
      },
      immediate: true
    }
  },
  created() {
    this.loadProfile()
    this.$router.push({
      name: 'profile',
      query: {
        tab: this.tab
      }
    })
  },
  methods: {
    async loadProfile() {
      const username = this.$route.params.username
      try {
        const { data } = await getProfile(username)
        this.profile = data.profile
      } catch (err) {
        console.log(err)
      }
    },
    async loadArticles() {
      const { tab } = this.$route.query
      if (!tab) {
        return
      }

      const username = this.$route.username
      const { data } = await getArticles({
        [tab]: username
      })
      this.articles = data.articles
    },
    async handleFollow(following) {
      const username = this.profile.username
      if (!username) {
        return
      }

      const operateUser = following ? followUser : unFollowUser
      const { data } = await operateUser(username)
      profile.following = !profile.following
    }
  }
}
</script>

<style></style>
