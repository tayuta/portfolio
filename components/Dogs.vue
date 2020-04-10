<template>
  <div class="dogs">
    <div class="inner">
      <h3 class="title"><span>Dogs</span></h3>
      <div
        v-for="(dog, index) in dogs"
        :key="index"
        class="card"
        style="width: 23rem;"
      >
        <swiper ref="mySwiper1" :options="swiperOption">
          <swiper-slide v-for="(img, index2) in dog.imgs" :key="index2">
            <img :src="img.img" class="card-img" alt="..." />
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
        <div class="card-body">
          <h5 class="card-title">{{ dog.name }}</h5>
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
      dogs: [
        {
          name: 'ハッピィ',
          imgs: [
            {
              title: '1',
              img: require('~/static/dogs/happy_1.jpg')
            },
            {
              title: '2',
              img: require('~/static/dogs/happy_2.jpg')
            }
          ]
        },
        {
          name: 'さくら',
          imgs: [
            {
              title: '1',
              img: require('~/static/dogs/sakura_1.jpg')
            },
            {
              title: '2',
              img: require('~/static/dogs/sakura_2.jpg')
            },
            {
              title: '3',
              img: require('~/static/dogs/sakura_3.jpg')
            }
          ]
        },
        {
          name: '吹雪',
          imgs: [
            {
              title: '1',
              img: require('~/static/dogs/fubuki_1.jpg')
            },
            {
              title: '2',
              img: require('~/static/dogs/fubuki_2.jpg')
            },
            {
              title: '3',
              img: require('~/static/dogs/fubuki_3.jpg')
            }
          ]
        }
      ],
      swiperOption: {
        effect: 'fade',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.swiper-container {
  height: 250px;
  width: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
h3 span {
  display: block;
  margin: 11px 0 17px 0;
  font-size: 80px;
  line-height: 80px;
  text-shadow: 0 13.36px 8.896px #c4b59d, 0 -2px 1px #c4b59d;
  letter-spacing: -2px;
}
.dogs {
  -webkit-transform: rotate(-6deg) translate3d(0, 0, 0);
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff7e6;
  width: 200%;
  margin-left: -180px;
  padding-bottom: 170px;
  color: #443319;

  .inner {
    -webkit-transform: rotate(6deg) translate3d(0, 0, 0);
    max-width: 51%;
    margin-left: 173px;
    padding: 0 70px;
    @media screen and (max-width: 767px) {
      padding: 0;
    }
    .title {
      padding: 80px 0px 10px;
    }
    .card {
      margin: 20px;
      border: 3px dashed #443319;
      display: inline-block;

      .card-body {
        border-top: 3px dashed #443319;
        background: #fffaf9;
      }
    }
  }
}
</style>
