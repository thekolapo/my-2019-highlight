<template>
  <div class="container">
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
      class="section__work"
    >
      <div class="header">
        Work
      </div>
      <div class="text">
        Generally, I got better & more confident in my work.
        I also worked on a number of interesting projects,
        some I can publicly talk about are:
        <div class="projects outlined-text">
          <span>
            - Gomoney early access site
          </span>
          <span>
            - Gomoney blog
          </span>
          <span>
            - My potfolio redesign
          </span>
        </div>
        <div class="text">
          To all the emails & messages I got from people appreciating my work,
          it really warmed my heart.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint semi: "error" */
/* eslint-disable */
import $ from 'jquery';
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)

export default {
  components: {},
  data () {
    return {
      visibilityThreshold: 0.2
    }
  },
  mounted () {
    let marquees = $('.marquee');
    const forwardDirection = [false, true]

    for (let index = 0; index < marquees.length; index++) {
      this.createMarqueeEffect(marquees[index], forwardDirection[index]);
    }
  },
  methods: {
    createMarqueeEffect (textGroup, forwardDirection) {
      const marquee = $(textGroup);
      const list = marquee.find('ul.list');
      const clonedList = list.clone();
      let listWidth = 5;

      list.find('li').each (function (i) {
        listWidth += $(this, i).outerWidth(true);
      });

      // const endPos = $tickerWrapper.width() - listWidth;

      list.add(clonedList).css({
        width: listWidth + 'px'
      });

      clonedList.addClass('cloned').appendTo(marquee);

      const infinite = new TimelineMax({ repeat: -1, paused: true });
      const time = 15;

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
        .set(list, { force3D: true, rotation: 0.01, x: forwardDirection? -listWidth : listWidth })
        .to(
          clonedList,
          time,
          { force3D: true, rotation: 0.01, x: !forwardDirection? -listWidth : listWidth, ease: Linear.easeNone },
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
        .play();

      marquee
        .on ('mouseenter', function() {
          infinite.pause();
        })
        .on ('mouseleave', function() {
          infinite.play();
        });
    },
    visibilityChanged (isVisible, entry) {
      if (isVisible) {
        if (entry.target.id == 'section__work') {
           $('body').css("color", "#15557c")
        }

        switch (entry.target.id) {
          case 'section__hero':
            $('body').css("color", "#15777c")
            $('body').css("-webkit-text-stroke-color", "#15777c")
            break;

          case 'section__work':
            $('body').css("color", "#15557c")
            $('body').css("-webkit-text-stroke-color", "#15557c")
            break;
        
          default:
            break;
        }
      }

      else if (!isVisible) {
        switch (entry.target.id) {
          case 'section__hero':
            $('body').css("color", "#15557c")
            $('body').css("-webkit-text-stroke-color", "#15557c")
            break;

          case 'section__work':
            $('body').css("color", "#15777c")
            $('body').css("-webkit-text-stroke-color", "#15777c")
            break;
            
          default:
            break;
        }
      }
    }
  }
};
</script>

<style lang="scss">
.container {
  .header,
  .outlined-text {
    -webkit-text-stroke-width: 2px;
  }

  .header {
    -webkit-text-stroke-color: black;
    text-transform: uppercase;
    font-size: 250px;
  }

  .outlined-text {
    color: transparent;
  }

  .section__hero {
    $main-color: #15777c;
    padding-top: 200px;

    .marquee {
      position: relative;
      top: 30px;
      left: 0%;
      width: 99.9%;
      overflow: hidden;
      cursor: pointer;
      font-size: 80px;
      text-transform: uppercase;
      color: transparent;
      -webkit-text-stroke-width: 1.6px;
      // -webkit-text-stroke-color: $main-color;

      .list {
        position: relative;
        display: inline-block;
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          float: left;
          padding-left: 20px;

          span {
            transition: 0.4s ease-in-out;

            &:hover {
              color: $main-color;
              -webkit-text-stroke-color: black;
              -webkit-text-stroke-width: 1.3px;
            }
          }
        }
      }

      .list.cloned {
        position: absolute;
        top: 0px;
        left: 0px;
      }
    }
  }

  .section__work {
    $main-color: #15557c;
    margin-top: 250px;
    padding: 0px 20px;
    font-size: 80px;
    width: 86%;

    .text {
      padding-left: 20px;
      -webkit-text-stroke-width: 1px;
    }

    .projects {
      margin-top: 50px;
      margin-bottom: 60px;
      text-transform: uppercase;
      font-size: 75px;
      // -webkit-text-stroke-color: $main-color;

      span {
        display: inline-block;
        margin-bottom: 30px;
        cursor: pointer;
        transition: 0.4s ease-in-out;

        &:last-child {
          margin-bottom: 0px;
        }

        &:hover {
          color: $main-color;
          -webkit-text-stroke-color: black;
          -webkit-text-stroke-width: 1.3px;
        }
      }
    }
  }
}
</style>
