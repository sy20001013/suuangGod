<template>
  <div class="sy_everyday">
    <div class="sy_everyday_item">
      <a-carousel arrows :dots="false" :autoplay="true" >
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
           <LeftOutlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <RightOutlined />
          </div>
        </template>
        <div class="sy_carousel" v-for="item in 4" :key="item">
          <div class="sy_carousel_item"></div>
          <div class="sy_carousel_text">
            <div class="sy_label">游戏</div>
            <div class="sy_carousel_title">5 2021年奥运会开幕式,5 2021年奥运会开幕式,5 2021年奥运会开幕式,5 2021年奥运会开幕式,5 2021年奥运会开幕式,5 2021年奥运会开幕式,5 2021年奥运会开幕式</div>
            <div class="sy_carousel_information">
              <div class="sy_carousel_avatar"></div>
              <div class="sy_carousel_hend">
                <div class="sy_carousel_top">管理员SuYangLing</div>
                <div class="sy_carousel_but">2021年8月1日</div>
              </div>
            </div>
            <div class="browse">阅读</div>
          </div>
        </div>
        
      </a-carousel>
    </div>
    <div class="sy_terbaru">
      <div class="sy_terbaru_title">最近文章</div>
      <div class="sy_terbaru_artike">
        <div class="sy_artike_item" v-for="item in 2" :key="item">
          <div class="sy_artikel_chart"></div>
          <div class="sy_artikel_content">
            <div class="sy_artikel_title">5 2021年奥运会开幕式,5 2021年奥运会开幕式</div>
            <div class="sy_author">
              <div class="sy_author_name">管理员SuYangLing</div>
              <div class="sy_author_time">2021年8月1日</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="less" scoped>
  .sy_everyday {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:  37px 35px 0 35px;
    .sy_everyday_item {
      width: 680px;
      height: 246px;
      .sy_carousel {
        display: flex !important;
        width: 100%;
        height: 100%;
        padding: 15px;
        box-sizing: border-box;
        .sy_carousel_item {
          width: 229px;
          height: 212px;
          background: #FCDEC2;
          border-radius: 15px 15px 15px 15px;
        }
        .sy_carousel_text {
          position: relative;
          flex: 1;
          margin-left: 17px;
          .sy_label {
            font-size: 14px;
            font-family: Roboto, Roboto;
            color: #727272;
          }
          .sy_carousel_title{
            margin-top: 10px;
            font-size: 18px;
            font-family: Roboto, Roboto;
            font-weight: 500;
            color: #000000;
            line-height: 26px;
          }
          .sy_carousel_information {  
            position: absolute;
            left: 0;
            bottom: 0;        
            display: flex;
            align-items: center;
            margin-top: 5px;
            .sy_carousel_avatar {
              width: 38px;
              height: 38px;
              background: #fcdec2;
              border-radius: 50%;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .sy_carousel_hend {
              display: flex;
              flex-direction:column;
              margin-left: 7px;
              .sy_carousel_top {
                font-size: 14px;
                font-family: Roboto, Roboto;
                color: #000000;
              }
              .sy_carousel_but {
                font-size: 12px;
                font-family: Roboto, Roboto;
                color: #848484;
              }
            }
          }
          .browse {
              position: absolute;
              right: 0;
              bottom: 0;
              width: 60px;
              height: 24px;
              text-align: center;
              line-height: 24px;
              background: #D074D8;
              border-radius: 19px 19px 19px 19px;
              font-size: 6px;
              font-family: Roboto, Roboto;
              font-weight: 500;
              color: #FFFFFF;
              cursor: pointer;
            }
        }
      }
    }
    .sy_terbaru {
      width: 508px;
      height: 246px;
      background: rgba(242,246,249,0.4);
      box-shadow: 0px 3 25px 0px rgba(147,195,232,0.7);
      border-radius: 15px 15px 15px 15px;
      padding: 14px 17px;
      box-sizing: border-box;
      .sy_terbaru_title {
        font-size: 16px;
        font-family: Roboto, Roboto;
        font-weight: 400;
        color: #000000;
      }
      .sy_terbaru_artike {
        margin-top: 10px;
        .sy_artike_item {
          display: flex;
          align-items: center;
          width: 100%;
          height: 85px;
          background: rgba(255,255,255,0.7);
          border-radius: 8px 8px 8px 8px;
          opacity: 1;
          padding: 4px 5px;
          box-sizing: border-box;
          margin-bottom: 15px;
          &:last-child {
            margin-bottom: 0;
          }
          .sy_artikel_chart {
            width: 102px;
            height: 74px;
            background: #FCDEC2;
            border-radius: 8px 8px 8px 8px;
            img {
              width: 100%;
              height: 10%;
            }
          } 
          .sy_artikel_content {
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            .sy_artikel_title {
              font-size: 18px;
              font-family: Roboto, Roboto;
              font-weight: 500;
              color: #000000;
            }
            .sy_author {
              display: flex;
              align-items: center;
               margin-top: 10px;
              .sy_author_name {
                font-size: 12px;
                font-family: Roboto, Roboto;
                font-weight: 400;
                color: #676767;
              }
              .sy_author_time {
                font-size: 12px;
                font-family: Roboto, Roboto;
                font-weight: 300;
                color: #848484;
                margin-left: 10px;
              }
            }
          }
        }
       
      }
    }
  }
  :deep(.slick-slide) {
    display: flex;
    width: 450px;
    height: 246px;
    background: rgba(242,246,249,0.4);
    box-shadow: 0px 3 25px 0px rgba(147,195,232,0.7);
    border-radius: 15px 15px 15px 15px;
}
// :deep(.slick-arrow.custom-slick-arrow) {
//   width: 25px;
//   height: 25px;
//   font-size: 25px;
//   color: #fff;
//   background-color: rgba(31, 45, 61, 0.11);
//   transition: ease all 0.3s;
//   opacity: 0.3;
//   z-index: 1;
//   border-radius: 15px 15px 15px 15px;
// }
/deep/ :where(.css-dev-only-do-not-override-19yxfbp).ant-carousel .slick-prev {
  left: -20px !important;
  font-size: 15px !important;
}
/deep/ :where(.css-dev-only-do-not-override-19yxfbp).ant-carousel .slick-next {
  right: -25px !important;
  font-size: 15px !important;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}
/deep/ .slick-arrow.custom-slick-arrow {
  background: transparent;
  color:  #000000 !important;
  // color:  #871010 !important;
  &:hove {
    color:  #000000 !important;
  }
}
:deep(.slick-slide h3) {
  color: #841616;
}
</style>