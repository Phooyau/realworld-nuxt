<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab === 'your_feed' }"
                  exact
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'your_feed'
                    }
                  }"
                  >Your Feed</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab === 'global_feed' }"
                  exact
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'global_feed'
                    }
                  }"
                  >Global Feed</nuxt-link
                >
              </li>
              <li class="nav-item" v-show="tag">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab === 'tag_tab' }"
                  exact
                  :to="{
                    name: 'home',
                    query: {
                      tag,
                      tab: 'tag_tab'
                    }
                  }"
                  >#{{ tag }}</nuxt-link
                >
              </li>
            </ul>
          </div>

          <!-- <div v-show="loading" class="article-preview">
            Loading articles...
          </div> -->
          <div v-show="(!articles || !articles.length)" class="article-preview">
            No articles are here... yet.
          </div>
          <ArticleList :articles="articles"></ArticleList>

          <ul class="pagination">
            <li
              class="page-item"
              :class="{ active: item === page }"
              v-for="item in totalPage"
              :key="item"
            >
              <nuxt-link
                class="page-link"
                :to="{
                  name: 'home',
                  query: {
                    page: item,
                    tag,
                    tab
                  }
                }"
                >{{ item }}</nuxt-link
              >
            </li>
          </ul>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                v-for="tag in tags"
                :key="tag"
                :to="{
                  name: 'home',
                  query: {
                    tag,
                    tab: 'tag_tab'
                  }
                }"
                class="tag-pill tag-default"
                >{{ tag }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getArticles, getFeedArticles, addFavorite, deleteFavorite } from '@/api/article'
import { getTags } from '@/api/tag'
import ArticleList from '@/components/article-list'

export default {
  name: 'HomeIndex',
  components: {
    ArticleList
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.count / this.limit)
    },
    ...mapState(['user'])
  },
  async asyncData({ query, store }) {
    const limit = 20
    const page = +query.page || 1
    const { tag, tab = 'global_feed' } = query
    const loadArticles = store.state.user && tab === 'your_feed'
      ? getFeedArticles
      : getArticles

    try {
      const [articleRes, tagRes] = await Promise.all([
        loadArticles({
          tag,
          limit,
          offset: (page - 1) * limit
        }),
        getTags()
      ])
      const { data } = articleRes
      const { data: tagData } = tagRes
      data.articles.forEach((article) => article.favoriteDisabled = false)

      return {
        articles: data.articles,
        count: data.articlesCount,
        tags: tagData.tags,
        limit,
        page,
        tag,
        tab
      }
    } catch (err) {
      console.log(err)
    }
    return {
      articles: [],
      count: 0,
      tags: [],
      limit,
      page,
      tag,
      tab
    }
  },
  watchQuery: ['page', 'tag', 'tab'],
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true
      if (article.favorited) {
        // 取消点赞
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount -= 1
      } else {
        // 添加点赞
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false
    }
  }
}
</script>

<style></style>
