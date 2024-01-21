<script setup>
import { ref } from "vue";
import { Form } from 'ant-design-vue';
const FormItemRest = Form.ItemRest; //正解
const { data: res } = await useFetch("/api/channl");
console.log(res);
const route = useRoute();
const selectedKeys2 = ref([1]);
const tabArr = ref([
  { id: 1, name: "首页", menu: true, path: "/" },
  {
    id: 2,
    name: "生活",
    menu: false,
    child: [
      { id: 21, name: "旅行", path: "/travel" },
      { id: 22, name: "彩蛋", path: "/easteregg" },
    ],
  },
  { id: 3, name: "关于", menu: true, path: "/about" },
]);
const switchTab = (url) => {
  console.log(url);
  return navigateTo(
    {
      path:url,
      // query: {
      //   id: 200
      // }
    },
    {
      replace: true, //是否替换当前的页面
    }
  );
};

</script>
<template>
  <div class="suyang">
    <div class="suyang_page"></div>
    <div class="suyang_page_hd">
      <div class="navigation">
        <div class="navigation_logo">
          <img src="/assets/images/logo.png" alt="">
        </div>
        <a-layout-sider width="190" style="margin-top: 80px">
          <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            :style="{ height: '100%', borderRight: 0 }"
          >
          <template v-for="item in tabArr" :key="item.id">
            <template  v-if="item.menu">
              <a-menu-item :key="item.id" @click="switchTab(item.path)"> <span>{{item.name}}</span></a-menu-item>
            </template>
            <template v-else>
              <a-sub-menu :key="item.id">
                <template #title>
                  <span>{{item.name}}</span>
                </template>
                <a-menu-item v-for="itemchild in item.child" :key="itemchild.id" @click="switchTab(itemchild.path)">{{itemchild.name}}</a-menu-item>
              </a-sub-menu>
            </template>
          </template>
          </a-menu>
        </a-layout-sider>
      </div>
      <div class="content">
       <Tab></Tab>
       
        <NuxtPage></NuxtPage>
      </div>
    </div>
  </div>
</template>



<style lang="less" scoped>
:deep(.ant-menu) {
  background: transparent !important;
}

:deep(.ant-menu :where(.css-dev-only-do-not-override-19yxfbp).ant-menu-light
  .ant-menu-item-selected) {
  background: #e3e3e3 !important;
}
:deep( :where(.css-dev-only-do-not-override-19yxfbp).ant-menu-light
  .ant-menu-item-selected){
    font-size: 18px !important;
  font-family: Roboto, Roboto;
  font-weight: 700 !important;
  color: #000000 !important;
  }
  :deep(:where(.css-dev-only-do-not-override-19yxfbp).ant-menu-light
  .ant-menu-item-selected
  :hover){
 
}

:deep(:where(.css-dev-only-do-not-override-19yxfbp).ant-menu-light .ant-menu-submenu-selected >.ant-menu-submenu-title ){
  color:#000000 !important;
}
.suyang {
  position: relative;
  background-image: linear-gradient(
    270deg,
    rgba(225, 234, 255, 0.64) 0,
    rgba(245, 135, 255, 0.64) 100%
  );
  .suyang_page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: url("assets/images/Groupbg.png") 100% no-repeat;
    background-size: 100% 100%;
    filter: blur(65px);
  }
  .suyang_page_hd {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .navigation {
      width: 190px;
      height: 100vh;
      padding: 0 16px;
      // background: rgba(242,246,249,0.1);
      box-shadow: 4px 0px 50px 0px rgba(172, 211, 241, 0.44);
      border-radius: 0px 0px 0px 0px;
      // opacity: 1;
    }
    .navigation_logo{
      margin-top:10px;
      width: 86px;
      height: 60px;
      animation:move 2s linear 0s infinite alternate;
      img {
        width: 100%;
        height: 100%;
      }
    }
    @keyframes move {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(0px, 10px);
    }
   
}

    .content {
      flex: 1;
      height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>