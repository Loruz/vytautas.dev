<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      Comming soon
<!--      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>-->
    </div>

  </Layout>
</template>

<page-query>
{
  posts: allPost {
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: 'Blog',
    meta: [
      {
        name: 'description',
        content: 'Vytautas Preiksaitis personal blog',
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Blog',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Blog',
      },
      {
        key: 'og:url',
        name: 'og:url',
        content: 'https://vytautas.dev/blog',
      },
      {
        key: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        key: 'twitter:creator',
        name: 'twitter:creator',
        content: '@Loruzzz',
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Vytautas Preiksaitis personal blog',
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Vytautas Preiksaitis personal blog',
      },
    ]
  }
}
</script>
<style >
  .posts {
    display: flex;
    justify-content: center;
  }
</style>
