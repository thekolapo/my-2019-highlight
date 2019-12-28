<template>
  <div class="container">
    <div class="section__hero">
      <div class="header">
        Kolapo Oni
      </div>
      <div class="marquee">
        <ul class="list">
          <li class="listitem">
            <span>2019 YEAR IN REVIEW</span>
          </li>
          <li class="listitem">
            <span>2019 YEAR IN REVIEW</span>
          </li>
          <li class="listitem">
            <span>2019 YEAR IN REVIEW</span>
          </li>
          <li class="listitem">
            <span>2019 YEAR IN REVIEW</span>
          </li>
          <li class="listitem">
            <span>2019 YEAR IN REVIEW</span>
          </li>
        </ul>
      </div>
      <div class="marquee">
        <ul class="list">
          <li class="listitem">
            <span>2019 HIGHLIGHTS</span>
          </li>
          <li class="listitem">
            <span>2019 HIGHLIGHTS</span>
          </li>
          <li class="listitem">
            <span>2019 HIGHLIGHTS</span>
          </li>
          <li class="listitem">
            <span>2019 HIGHLIGHTS</span>
          </li>
          <li class="listitem">
            <span>2019 HIGHLIGHTS</span>
          </li>
        </ul>
      </div>
      <div class="marquee">
        <ul class="list">
          <li class="listitem">
            <span>2019 HAPPENINGS</span>
          </li>
          <li class="listitem">
            <span>2019 HAPPENINGS</span>
          </li>
          <li class="listitem">
            <span>2019 HAPPENINGS</span>
          </li>
          <li class="listitem">
            <span>2019 HAPPENINGS</span>
          </li>
          <li class="listitem">
            <span>2019 HAPPENINGS</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint semi: "error" */
/* eslint-disable */
import $ from 'jquery';

export default {
  components: {},
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
      }
  }
};
</script>

<style lang="scss">
.container {
  .header {
    text-transform: uppercase;
    font-size: 250px;
  }

  .section__hero {
    $main-color: #15777c;
    padding-top: 200px;

    .header {
      color: #15557c;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: black;
      color: $main-color;
    }

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
      -webkit-text-stroke-color: $main-color;

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
}
</style>
