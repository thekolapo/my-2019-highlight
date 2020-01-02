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
          <a href="https://early-access.gomoney.global" target="blank">
            - Gomoney early access site
          </a>
          <a href="https://blog.gomoney.global" target="blank">
            - Gomoney blog
          </a>
          <br>
          <a href="https://thekolapo.com" target="blank">
            - My portfolio redesign
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
          I didn't read as many books as I did in 2018.
          Two nice books I read this year are Ask The Dust by John Fante
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
          I visited four countries this year &
          took a lot of great pictures.
        </div>
      </div>
      <div class="marquee">
        <ul class="list">
          <li
            v-for="index in 7"
            :key="index"
            class="listitem"
          >
            <span>Portugal 🇵🇹</span>
          </li>
        </ul>
      </div>
      <div class="marquee">
        <ul class="list">
          <li
            v-for="index in 7"
            :key="index"
            class="listitem"
          >
            <span>ITALY 🇮🇹</span>
          </li>
        </ul>
      </div>
      <div class="marquee">
        <ul class="list">
          <li
            v-for="index in 7"
            :key="index"
            class="listitem"
          >
            <span>SPAIN 🇪🇸</span>
          </li>
        </ul>
      </div>
      <div class="marquee">
        <ul class="list">
          <li
            v-for="index in 7"
            :key="index"
            class="listitem"
          >
            <span>Benin 🇧🇯</span>
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
            <img src="@/assets/images/hendrick's-gin.jpg" alt="hendrick's-gin">
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
            <img src="@/assets/images/cup.jpg" alt="kolapo">
            <div class="desc">
              Cup | Casablanca 🇲🇦
            </div>
          </div>
        </div>
        <div class="text">
          You can also check my
          <a href="https://vsco.co/thekolapo" target="blank">
            VSCO
          </a>
          to see a lot more pictures I've taken.
        </div>
      </div>
    </div>
    <div
      id="section__review"
      class="section"
    >
      <div class="content">
        <div class="text">
          I won't lie 2019 has been a rollercoaster of highs and lows.
          I achieved some of my goals, didn't achieve some.
          Sometimes I struggled, other times, I felt like a god.
          I got less scared of the future, met my sugar mami; Tomiwa.
          Did a lot of faaji because life is too short & na only one life dey.
          Took really mad shots too.
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
            <img src="@/assets/images/anike.jpg" alt="Anike">
            <div class="desc">
              Anike
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
            <img src="@/assets/images/iniye.jpg" alt="iniye">
            <div class="desc">
              Iniye
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
              Gelato | Rome 🇮🇹
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="section__extra"
      class="section"
    >
      <div class="content">
        <div class="text">
          To
          <a href="https://twitter.com/_molara" target="blank">
            Lara
            <i class="fas fa-heart" />
            <i class="fas fa-heart" />
          </a>,
          <a href="https://twitter.com/fauxxbella" target="blank">
            Tomiwa
          </a>,
          <a href="https://twitter.com/Gbemss_" target="blank">
            Gbemi
          </a>,
          <a href="https://twitter.com/onykchi" target="blank">
            Kachi
          </a>
          & everyone that was part of my 2019,
          thanks for making it a good year.
          To 2020 - A new year to make cool $hit
          & sweet memories.
        </div>
      </div>
    </div>
    <div
      id="section__footer"
      class="section"
    >
      <div class="content">
        <div class="text">
          Made in Lagos, Nigeria by
          <a href="https://twitter.com/kolapo_" target="blank">
            the cool kid Kp
          </a>
          🤘🏾.
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
    const forwardDirection = [false, true, false, false, true, false, true]

    for (let index = 0; index < marquees.length; index++) {
      this.createMarqueeEffect(marquees[index], forwardDirection[index]);
    }

    window.addEventListener('resize', function () {
      // this.infinite.kill;
    });
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
        switch (entry.target.id) {
          case 'section__hero':
            $('body').css("color", "#15777c")
            $('body').css("-webkit-text-stroke-color", "#15777c")
            $('body').css('background-color', "#E4B0A0")
            break;

          case 'section__work':
            $('body').css("color", "#15557c")
            $('body').css("-webkit-text-stroke-color", "#15557c")
            $('body').css('background-color', "#E4B0A0")
            break;

          case 'section__reading':
            $('body').css({
              'color': '#5660B7',
              '-webkit-text-stroke-color': '#5660B7',
              'background-color': '#FFD9D8'
            })
            break;

          case 'section__travel':
            $('body').css({
              'color': '#E79292',
              '-webkit-text-stroke-color': '#E79292',
              'background-color': '#DCF3E8'
            })
            break;

          default:
            break;
        }
      }else if (!isVisible) {
        switch (entry.target.id) {
          case 'section__hero':
            $('body').css("color", "#15557c")
            $('body').css("-webkit-text-stroke-color", "#15557c")
            break;

          case 'section__work':
            $('body').css("color", "#15777c")
            $('body').css("-webkit-text-stroke-color", "#15777c")
            break;
            
          case 'section__reading':
            $('body').css({
              'color': '#E79292',
              '-webkit-text-stroke-color': '#E79292',
              'background-color': '#DCF3E8'
            })
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
  // font-size: 80px;
  font-size: 4.762vw;
  padding-bottom: 100px;

  a,
  .header {
    -webkit-text-stroke-width: 2px;
  }

  .header {
    -webkit-text-stroke-color: black;
    text-transform: uppercase;
    // font-size: 250px;
    font-size: 14.8881vw;
  }

  a {
    color: transparent;
    text-decoration: none;
    transition: 0.2s ease-in-out;

    &:hover {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black !important;
    }
  }

  .marquee {
    position: relative;
    top: 30px;
    left: 0%;
    width: 99.9%;
    overflow: hidden;
    cursor: pointer;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke-width: 1.6px;

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
            -webkit-text-stroke-color: black;
            -webkit-text-stroke-width: 1px;
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

  .section__hero {
    $main-color: #15777c;
    padding-top: 200px;

    .marquee .list {
      li span {
        &:hover {
          color: $main-color;
        }
      }
    }
  }

  .section {
    $main-color: #15557c;
    margin-top: 250px;
    // margin-top: 14.881vw;
    box-sizing: border-box;

    .header {
      // padding-left: 20px;
      padding-left: 1.191vw;
    }

    .content {
      // padding: 0px 40px;
      padding: 0px 2.381vw;
      width: 99%;
      box-sizing: border-box;

      .pictures-group {
        margin-top: 120px;
        margin-bottom: 5px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 150vw;
        padding-left: 38px;
        box-sizing: border-box;

        & > div {
          width: 31%;
          margin-bottom: 80px;
          display: flex;
          flex-direction: column;
          position: relative;

          &:nth-child(3),
          &:nth-child(6),
          &:nth-child(9) {
            margin-bottom: 0px;
          }
          
          img {
            width: 100%;
            height: auto;
            object-position: center;
            object-fit: contain;
          }

          .desc {
            font-size: 18px;
            text-transform: uppercase;
            margin-top: 10px;
            position: absolute;
            bottom: -40px;
            -webkit-text-stroke-width: 0.12px;
            -webkit-text-stroke-color: black;
          }
        }
      }
    }

    .text {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }

    .projects {
      margin-top: 50px;
      margin-bottom: 60px;
      text-transform: uppercase;
      // font-size: 75px;
      font-size: 5.769vw;
      // -webkit-text-stroke-color: $main-color;

      a {
        -webkit-text-stroke-color: inherit;
        display: inline-block;
        margin-bottom: 30px;
        transition: 0.2s ease-in-out;

        &:last-child {
          margin-bottom: 0px;
        }

        &:hover {
          color: $main-color;
          -webkit-text-stroke-width: 1.2px;
          transition: 0.4s ease-in-out;
        }
      }
    }
  }

  .section__reading {
    $main-color: #15557c;
  }

  #section__travel {
    $main-color: #E79292;

    .content {
      margin-bottom: 30px;
      width: 100%;

      a {
        -webkit-text-stroke-color: $main-color;

        &:hover {
          color: $main-color;
        }
      }
    }

    .marquee {
      margin-top: 25px;

      .list {
        li span {
          &:hover {
            color: $main-color;
          }
        }
      }
    }
  }

  #section__review {
    .content .pictures-group { 
      // background-color: bisque;
      height: 153vw;
    }
  }

  #section__footer,
  #section__extra {
    $main-color: #E79292;
    margin-top: 230px;
    // margin-top: 13.691vw;

    a {
      -webkit-text-stroke-color: $main-color;

      &:hover {
        color: $main-color;
      }
    }
  }

  #section__footer {
   font-size: 4.167vw;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    .section {
      .content .pictures-group {
        padding-left: 20px;
        height: 155vw;

        & > div {
          width: 31%;
          
          .desc {
            font-size: 16px;
            bottom: -35px;
          }
        }
      } 
    }

    #section__review {
      .content .pictures-group {
        height: 160vw;
      }
    }
  }
}

@media screen and (max-width: 812px) {
  .container {
    .section {
      .content .pictures-group {
        padding-left: 20px;
        height: 155vw;

        & > div {
          .desc {
            font-size: 15px;
            bottom: -33px;
          }
        }
      } 
    }
  }
}

@media screen and (max-width: 768px) {
  .container {
    a,
    .header {
      -webkit-text-stroke-width: 1.5px;
    }

    .marquee {
       -webkit-text-stroke-width: 1.2px;
    }

    .section {
      margin-top: 200px;
      .content .pictures-group {
        flex-direction: row;
        height: auto !important;
        align-items: flex-start;
        padding-left: 0px;
        justify-content: space-between;

        & > div {
          width: 48%;
          margin-bottom: 40px !important;

          .desc {
            font-size: 16px;
            position: relative;
            bottom: 0px;
          }
        }
      } 

      .text {
        -webkit-text-stroke-width: 0.6px;
      }
    }

    #section__footer,
    #section__extra {
      margin-top: 150px;
    }
  }
}

@media screen and (max-width: 620px) {
  .container {
    .section {
      .content .pictures-group {
        justify-content: center;

        & > div {
          width: 95%;
          margin-bottom: 45px !important;

          .desc {
            font-size: 17px;
          }
        }
      } 
    }

    #section__footer,
    #section__extra {
      margin-top: 130px;
    }
  }
}

@media screen and (max-width: 480px) {
  .container {
    font-size: 30px;

    a,
    .marquee,
    .header {
      -webkit-text-stroke-width: 1px;
    }

    .section__hero {
      padding-top: 150px;

      .header {
        margin-bottom: -10px;
      }

      .marquee {
        margin-top: 10px;
      }
    }

    #section__footer {
      font-size: 26px;
    }

    .section {
      margin-top: 150px;
    
      .content {
        width: 100%;
        
        .text {
          -webkit-text-stroke-width: 0.4px;
        }
      }

      .projects {
        font-size: 23.2px;
      }
    }

    #section__footer {
      margin-top: 100px;
    }

    #section__extra {
      margin-top: 70px;
    }
  }
}

@media screen and (max-width: 360px) {
  .container {
    .section {
      .content .pictures-group {
        & > div {
          .desc {
            font-size: 16px;
          }
        }
      } 
    }
  }
}
</style>
