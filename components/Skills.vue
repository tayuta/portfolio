<template>
  <div class="skills">
    <div class="skills-inner">
      <h3 class="title">Skills</h3>
      <div class="contents">
        <div
          v-for="(skill, key, index) in skills"
          :key="index"
          v-scroll="handleScroll"
          class="fade-in skill"
          :class="addSkillClass(key)"
        >
          <div
            class="skill-diamond"
            :class="{ active: selectedSkill === key }"
            @click="changeSelectedSkill(key)"
          >
            <div class="inner">{{ skill.name }}</div>
          </div>
        </div>
      </div>
      <div v-scroll="handleScroll" class="fade-in detail">
        <div v-for="(skill, key, index) in skills" :key="index">
          <transition>
            <div v-show="selectedSkill === key" class="detail-area">
              <div class="skill-name">{{ skill.name }}</div>
              <div class="skill-detail">{{ skill.detail }}</div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from './mixin'
export default {
  mixins: [mixin],
  data: function() {
    return {
      selectedSkill: 0,
      skills: [
        {
          name: 'Java',
          detail:
            '社会人になって一番慣れ親しんでいる言語です。stream使いたい欲が常にありますが、使わないとすぐ忘れます。'
        },
        {
          name: 'JavaScript',
          detail:
            '書き方がたくさんあって難しいです。最近、async/awaitを理解しました。'
        },
        {
          name: 'CSS',
          detail:
            '難しいです。思った通りにならない上に、整理するのが難しいです。あまり好きじゃないです。SCSS や BEM 記法を身につけたいです。'
        },
        {
          name: 'C#',
          detail: '業務で少しだけ利用しました。０から作り出すことはできません。'
        },
        {
          name: 'Vue.js / Nuxt.js',
          detail: 'ポートフォリオを作るために初めて勉強しました。'
        },
        {
          name: 'etc...',
          detail: 'HTML / monaca / GitHub など、日々勉強中です。'
        }
      ]
    }
  },
  methods: {
    changeSelectedSkill: function(type) {
      this.selectedSkill = type
    },
    addSkillClass: function(key) {
      return 'skill' + key
    }
  }
}
</script>

<style scoped lang="scss">
.skills {
  -webkit-transform: rotate(10deg) translate3d(0, 0, 0);
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
  background-color: #ffdadf;
  height: 1250px;
  width: 160%;
  margin-left: -160px;

  .skills-inner {
    -webkit-transform: rotate(-10deg) translate3d(0, 0, 0);
    max-width: 65%;
    margin-left: 130px;

    .title {
      font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
      font-weight: 600;
      font-size: 50px;
      color: #35495e;
      letter-spacing: 1px;
      padding: 100px 0px 0px;
    }
    .contents {
      margin: auto;
    }
    @media screen and (max-width: 767px) {
      .contents {
        max-width: 500px;
      }
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
      .contents {
        max-width: 700px;
      }
    }
    @media screen and (min-width: 992px) {
      .contents {
        max-width: 800px;
      }
    }
  }
}

.skill {
  display: inline-block;
}

.skill-diamond.active {
  transition: all 0.75s 0.15s;
  background: #ffada0;
}
.skill-diamond {
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  width: 140px;
  height: 140px;
  background: #fffaf9;
  border: 3px dotted #35495e;
  transform: rotate(45deg);
  margin: 55px 31px 4px 27px;
  display: inline-block;

  .inner {
    white-space: nowrap;
    font-size: 22px;
    line-height: 45px;
    color: #35495e;
    background: transparent;
    transform: rotate(-45deg);
    text-align: center;
    margin-top: 50px;
  }
}

.detail {
  animation-delay: 1s;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.08);
  border: 3px dotted #35495e;
  position: relative;
  margin: 80px auto 0;
  width: 480px;
  height: 170px;
  background: #fffaf9;

  .detail-area {
    position: absolute;

    .skill-name {
      color: #35495e;
      text-align: left;
      font-size: 22px;
      margin: 15px 20px;
    }
    .skill-detail {
      color: #35495e;
      text-align: left;
      font-size: 18px;
      margin: 10px 20px;
    }
  }
}

.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter-active {
  transition: opacity 0.5s 0.5s;
}

/* 表示アニメーション */
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}

/* 非表示アニメーション */
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}

.skill0 {
  animation-delay: 0s;
}
.skill1 {
  animation-delay: 0.2s;
}
.skill2 {
  animation-delay: 0.4s;
}
.skill3 {
  animation-delay: 0.6s;
}
.skill4 {
  animation-delay: 0.8s;
}
.skill5 {
  animation-delay: 1s;
}
.fade-in {
  opacity: 0;
}
.fade-in.isView {
  animation-name: fade-in;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
  }
}
</style>
