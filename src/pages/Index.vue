<template>
  <Layout
    :show-logo="false"
    :show-footer="false"
    :show-newsletter="false"
  >
    <div class="container content-box">
      <h1 class="title">
        Hello, my name is Vytautas.
      </h1>
      <h2 class="subtitle">
        I’m a Vue.js / JavaScript developer and a currently working in <SpecialLink to="https://whatagraph.com/">Whatagraph</SpecialLink> project.<br>
      </h2>
      <p class="paragraph">
        I always in search for new inspirations and technologies to learn. Passioned about software architectures, and best practices.<br/>
      </p>
      <p class="paragraph">
        You can follow me on <SpecialLink to="https://twitter.com/Loruzzz">Twitter</SpecialLink> or <SpecialLink to="https://instagram.com/vytasprei">Instagram</SpecialLink>
      </p>
      <!-- <a
        href="mailto:damian@dulisz.com"
        class="paragraph mail-link"
      >
        ↳ Talk to me.
      </a> -->
    </div>
  </Layout>
</template>

<script>
import SpecialLink from '~/components/Link'
import Greeting from '~/components/Greeting'

const EARLY_MORNING = 'EARLY_MORNING'
const MORNING = 'MORNING'
const AFTERNOON = 'AFTERNOON'
const EVENING = 'EVENING'

function getDayTime () {
  const hourNow = new Date(Date.now()).getHours()

  switch (true) {
    case (hourNow >= 5 && hourNow < 7):
      return EARLY_MORNING
    case (hourNow >= 12 && hourNow < 17):
      return AFTERNOON
    case (hourNow >= 17 || hourNow < 5):
      return EVENING
    default:
      return MORNING
  }
}

export default {
  components: { SpecialLink, Greeting },
  metaInfo: {
    title: 'About',
    meta: [
      {
        name: 'description',
        content: 'Hello I`m passioned JavaScript developer.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Vytautas Preiksaitis',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Vytautas Preiksaitis',
      },
      {
        key: 'og:url',
        name: 'og:url',
        content: 'https://vytautas.dev/',
      },
      {
        key: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        key: 'twitter:creator',
        name: 'twitter:creator',
        content: '@Loruzz',
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Hello I`m passioned JavaScript developer.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Hello I`m passioned JavaScript developer.'
      },
    ]
  },
  data () {
    return {
      dayTime: MORNING,
      language: 'en'
    }
  },
  mounted () {
    setTimeout(() => {
      this.dayTime = getDayTime()
      this.language = navigator.language.substr(0, 2)
      //add support for swiss german
      let locale = navigator.language
      if(locale === 'de-CH') this.language = 'de_CH'
    }, 2000)
  },
}
</script>

<style lang="scss">
.container {
  min-height: calc(100vh - 100px);
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;

  a:hover {
    opacity: 1;
  }
}

.title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 30px;
}

.subtitle {
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 20px;
  margin-top: 0;
  line-height: 2.25rem;
  max-width: 550px;
}

.paragraph {
 	font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 1.1rem;
  margin-bottom: 20px;
  max-width: 750px;
}

@media only screen and (min-width: 600px)  {
  .container {
    min-height: calc(100vh - 200px);
  }

  .title {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 1.3rem;
    margin-bottom: 30px;
    margin-top: 0;
    line-height: 2.4rem;
  }

  .paragraph {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }

  .paragraph-small {
    font-size: 0.8rem;
  }
}

a.mail-link {
  display: inline-block;
  text-decoration: none;
  color: var(--body-color, #444a51);
}

.resize-enter-active, .resize-leave-active {
  transition: max-height .5s, opacity .4s;
  max-height: 600px;
}
.resize-enter, .resize-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
