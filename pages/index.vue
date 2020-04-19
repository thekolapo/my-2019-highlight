<template>
  <div class="container">
    <loader />
    <div
      id="section__hero"
      v-observe-visibility="visibilityChanged"
      class="section__hero"
    >
      <div class="header">
        Kolapo Oni
      </div>
      <div class="marquee">
        <ul class="list">
          <li
            v-for="index in 4"
            :key="index"
            class="listitem"
          >
            <span>2019 YEAR IN REVIEW</span>
          </li>
        </ul>
      </div>
      <div class="marquee">
        <ul class="list">
          <li
            v-for="index in 4"
            :key="index"
            class="listitem"
          >
            <span>2019 HIGHLIGHTS</span>
          </li>
        </ul>
      </div>
      <div class="marquee">
        <ul class="list">
          <li
            v-for="index in 4"
            :key="index"
            class="listitem"
          >
            <span>2019 HAPPENINGS</span>
          </li>
        </ul>
      </div>
    </div>
    <div
      id="section__work"
      v-observe-visibility="visibilityChanged"
      class="section section__work"
    >
      <div class="header">
        Work
      </div>
      <div class="content">
        <div class="text">
          Generally, I got better & more confident in my work.
          I also worked on a number of interesting projects,
          some I can publicly talk about are:
        </div>
        <div class="projects outlined-text">
          <a href="https://thekolapo.com" target="blank">
            - My portfolio (version 2)
          </a>
          <br>
          <a href="https://blog.gomoney.global" target="blank">
            - Gomoney blog
          </a>
          <br>
          <a href="https://pay.gomoney.global/?id=08124390729" target="blank">
            - Gomoney payment portal
          </a>
          <br>
          <a href="https://early-access.gomoney.global" target="blank">
            - Gomoney early access site
          </a>
        </div>
        <div class="text">
          To all the emails & messages I got from people across
          different continents appreciating my work,
          it really warmed my heart.
        </div>
      </div>
    </div>
    <div
      id="section__reading"
      v-observe-visibility="visibilityChanged"
      class="section"
    >
      <div class="header">
        Reading
      </div>
      <div class="content">
        <div class="text">
          Although I didn't read as many books as I did in 2018,
          two nice books I read this year are Ask The Dust by John Fante
          & Design Is Storytelling by Ellen Lupton.
        </div>
      </div>
    </div>
    <div
      id="section__travel"
      v-observe-visibility="visibilityChanged"
      class="section"
    >
      <div class="header">
        Travel
      </div>
      <div class="content">
        <div class="text">
          I visited four countries this year and
          took a lot of great pictures.
        </div>
      </div>
      <div class="marquee">
        <ul class="list">
          <li
            v-for="index in 9"
            :key="index"
            class="listitem"
          >
            <span>
              Portugal
              <span class="flag">
                🇵🇹
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div class="marquee">
        <ul class="list">
          <li
            v-for="index in 9"
            :key="index"
            class="listitem"
          >
            <span>
              Italy
              <span class="flag">
                🇮🇹
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div class="marquee">
        <ul class="list">
          <li
            v-for="index in 9"
            :key="index"
            class="listitem"
          >
            <span>
              Spain
              <span class="flag">
                🇪🇸
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div class="marquee">
        <ul class="list">
          <li
            v-for="index in 9"
            :key="index"
            class="listitem"
          >
            <span>
              Benin
              <span class="flag">
                🇧🇯
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="pictures-group">
          <div>
            <img src="@/assets/images/vintage-car.jpg" alt="vintage-car">
            <div class="desc">
              Vintage car | Lisbon 🇵🇹
            </div>
          </div>
          <div>
            <img src="@/assets/images/food-barcelona.jpg" alt="food">
            <div class="desc">
              Food | Barcelona 🇪🇸
            </div>
          </div>
          <div>
            <img src="@/assets/images/kolapo-lisbon.jpg" alt="kolapo">
            <div class="desc">
              Me | Lisbon 🇧🇯
            </div>
          </div>
          <div>
            <img src="@/assets/images/hendricks-gin.jpg" alt="hendrick's-gin">
            <div class="desc">
              Hendrick's gin | Lisbon 🇵🇹
            </div>
          </div>
          <div>
            <img src="@/assets/images/boat-2.jpg" alt="boat">
            <div class="desc">
              Boat cruise | Lisbon 🇵🇹
            </div>
          </div>
          <div>
            <img src="@/assets/images/light.jpg" alt="light">
            <div class="desc">
              Light | Casablanca 🇲🇦
            </div>
          </div>
          <div>
            <img src="@/assets/images/building-rome.jpg" alt="vintage-car">
            <div class="desc">
              Random building | Rome 🇮🇹
            </div>
          </div>
          <div>
            <img src="@/assets/images/gbems.jpg" alt="gbems">
            <div class="desc">
              Gbemi | Porto-Novo 🇧🇯
            </div>
          </div>
          <div>
            <img src="@/assets/images/cup.jpg" alt="cup">
            <div class="desc">
              Cup | Casablanca 🇲🇦
            </div>
          </div>
        </div>
        <div class="text text-with-link">
          <span>
            You can also check
          </span>
          <a href="https://vsco.co/thekolapo" target="blank">
            VSCO
          </a>
          <span>
            to see more pictures I've taken.
          </span>
        </div>
      </div>
    </div>
    <div
      id="section__review"
      v-observe-visibility="visibilityChanged"
      class="section"
    >
      <div class="content">
        <div class="text text-with-link">
          <span>
            I won't lie, 2019 has been a rollercoaster of highs and lows.
            While I achieved some of my goals, I didn't achieve some.
            Sometimes I struggled, other times, I felt like a god.
            I also got less scared of the future, met my sugar mama -
          </span>
          <a href="https://twitter.com/fauxxbella" target="blank">
            Tomiwa
          </a>
          <span>
            and did a lot of faaji this year
            because life is too short and na only one life dey.
          </span>
        </div>
        <div class="pictures-group">
          <div>
            <img src="@/assets/images/chisom.jpg" alt="chisom">
            <div class="desc">
              Chisom | Ilashe beach
            </div>
          </div>
          <div>
            <img src="@/assets/images/kachi-ilashe.jpg" alt="kachi">
            <div class="desc">
              Kachi | Ilashe Beach
            </div>
          </div>
          <div>
            <img src="@/assets/images/iniye.jpg" alt="iniye">
            <div class="desc">
              Iniye
            </div>
          </div>
          <div>
            <img src="@/assets/images/lara.jpg" alt="lara">
            <div class="desc">
              Lara ❤️
            </div>
          </div>
          <div>
            <img src="@/assets/images/tomiwa.jpg" alt="tomiwa">
            <div class="desc">
              Tomiwa
            </div>
          </div>
          <div>
            <img src="@/assets/images/wall-of-pictures.jpg" alt="wall-of-pictures">
            <div class="desc">
              Wall of pictures | Barcelona 🇪🇸
            </div>
          </div>
          <div>
            <img src="@/assets/images/kolapo-ilashe.jpg" alt="kolapo">
            <div class="desc">
              Me | Ilashe beach
            </div>
          </div>
          <div>
            <img src="@/assets/images/dominos.jpg" alt="gbems">
            <div class="desc">
              Dominos
            </div>
          </div>
          <div>
            <img src="@/assets/images/gelato.jpg" alt="light">
            <div class="desc">
              Gelato 🍦 | Rome 🇮🇹
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="section__extra"
      v-observe-visibility="visibilityChanged"
      class="section"
    >
      <div class="content">
        <div class="text text-with-link">
          <span>To</span>
          <a href="https://twitter.com/_molara" target="blank">
            Lara
            <i class="fas fa-heart" />
            <i class="fas fa-heart" />
          </a>
          <!-- <a href="https://twitter.com/fauxxbella" target="blank">
            Tomiwa
          </a>,
          <a href="https://twitter.com/Gbemss_" target="blank">
            Gbemi
          </a>,
          <a href="https://twitter.com/onykchi" target="blank">
            Kachi
          </a> -->
          <span>
            & everyone that made 2019 a good year,
            thanks for being amazing people.
            To 2020 - A new year to make cool $hit
            & sweet memories.
          </span>
        </div>
      </div>
    </div>
    <div
      id="section__footer"
      v-observe-visibility="visibilityChanged"
      class="section"
    >
      <div class="content">
        <div class="text text-with-link">
          <span>Made in Lagos, Nigeria by</span>
          <a href="https://twitter.com/kolapo_" target="blank">
            the creative kid Kp
          </a>
          <span>🤘🏾.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import $ from 'jquery'
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
import Loader from '@/components/Loader'

Vue.use(VueObserveVisibility)

let that = null

export default {
  components: {
    Loader
  },
  data () {
    return {
      visibilityThreshold: 0.2,
      loadingAssets: true,
      loaderCounter: 0,
      scrollingDown: true,
      windowWidth: null,
      showFlagEmoji: true
    }
  },
  mounted () {
    that = this
    const marquees = $('.marquee')
    const forwardDirection = [false, true, false, false, true, false, true]

    for (let index = 0; index < marquees.length; index++) {
      this.createMarqueeEffect(marquees[index], forwardDirection[index])
    }

    // let isMobileBrowser = this.checkIfMobileBrowser();
    // let isChromeBrowser = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    // if(isMobileBrowser) {
    //   this.showFlagEmoji = false;
    // }
    // else if(!isChromeBrowser) {
    //   this.showFlagEmoji = false;
    // }

    $(document).ready(function () {
      setTimeout(() => {
        that.changeColor('#15777c', '#E4B0A0')
      }, 100)
    })

    this.windowWidth = window.innerWidth

    window.addEventListener('resize', () => {
      const currentWidth = window.innerWidth

      if (currentWidth !== this.windowWidth) {
        this.windowWidth = currentWidth
        setTimeout(() => window.location.reload())
      }
    })

    let lastScrollTop = 0
    window.addEventListener('scroll', () => {
      const st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop) {
        that.scrollingDown = true
      } else {
        that.scrollingDown = false
      }
      lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
    }, false)
  },
  methods: {
    checkIfMobileBrowser () {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return true
      }

      return false
    },
    createMarqueeEffect (textGroup, forwardDirection) {
      const marquee = $(textGroup)
      const list = marquee.find('ul.list')
      const clonedList = list.clone()
      let listWidth = 5

      list.find('li').each(function (i) {
        listWidth += $(this, i).outerWidth(true)
      })

      // const endPos = $tickerWrapper.width() - listWidth;

      list.add(clonedList).css({
        width: listWidth + 'px'
      })

      clonedList.addClass('cloned').appendTo(marquee)

      const infinite = new TimelineMax({ repeat: -1, paused: true })
      const time = 20

      infinite
        .fromTo(
          list,
          time,
          { rotation: 0.01, x: 0 },
          { force3D: true, x: !forwardDirection ? -listWidth : listWidth, ease: Linear.easeNone },
          0
        )
        .fromTo(
          clonedList,
          time,
          { rotation: 0.01, x: forwardDirection ? -listWidth : listWidth },
          { force3D: true, x: 0, ease: Linear.easeNone },
          0
        )
        .set(list, { force3D: true, rotation: 0.01, x: forwardDirection ? -listWidth : listWidth })
        .to(
          clonedList,
          time,
          { force3D: true, rotation: 0.01, x: !forwardDirection ? -listWidth : listWidth, ease: Linear.easeNone },
          time
        )
        .to(
          list,
          time,
          { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone },
          time
        )
        // .progress(1)
        // .progress(0)
        .play()

      marquee
        .on('mouseenter', function () {
          infinite.pause()
        })
        .on('mouseleave', function () {
          infinite.play()
        })
    },
    changeColor (textColor, bgColor) {
      $('body').css({
        'color': textColor,
        '-webkit-text-stroke-color': textColor,
        'background-color': bgColor
      })
    },
    visibilityChanged (isVisible, entry) {
      if (isVisible) {
        switch (entry.target.id) {
          case 'section__hero':
            this.changeColor('#15777c', '#E4B0A0')
            break

          case 'section__work':
            this.changeColor('#15557c', '#E4B0A0')
            break

          case 'section__reading':
            this.changeColor('#5660B7', '#FFD9D8')
            break

          case 'section__travel':
            this.changeColor('#E79292', '#DCF3E8')
            break

          case 'section__review':
            this.changeColor('#15557c', '#E4B0A0')
            break

            // case 'section__footer':
            // case 'section__extra':
            //   this.changeColor('#15557c', '#E4B0A0');
            //   break;

          default:
            break
        }
      } else if (!isVisible) {
        switch (entry.target.id) {
          case 'section__hero':
            this.changeColor('#15557c', '#E4B0A0')
            break

          case 'section__work':
            if (this.scrollingDown) {
              this.changeColor('#5660B7', '#FFD9D8')
              return
            }

            this.changeColor('#15777c', '#E4B0A0')
            break

          case 'section__reading':
            if (this.scrollingDown) {
              this.changeColor('#E79292', '#DCF3E8')
              return
            }

            this.changeColor('#15557c', '#E4B0A0')
            break

          case 'section__travel':
            if (this.scrollingDown) {
              this.changeColor('#15557c', '#E4B0A0')
              return
            }

            this.changeColor('#5660B7', '#FFD9D8')
            break

          case 'section__review':
            if (!this.scrollingDown) {
              this.changeColor('#E79292', '#DCF3E8')
            }
            break

            // case 'section__extra':
            //   if(!this.scrollingDown) {
            //     this.changeColor('#15557c', '#E4B0A0');
            //   }
            //   break;

          default:
            break
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/sass/index";
</style>
