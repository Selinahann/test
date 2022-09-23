<template>
  <div class="product-wrap">
    <router-link
    v-for="(item, index) in product"
    :key="index"
    :to="`/detail/${item.id}`"
    tag="dl"
    >
      <dt class="image">
        <img :src="item.img" alt="">
      </dt>
      <dd>
        <header>
          <h3 class="title">{{item.name}}</h3>
        </header>
        <footer>
          <div class="price-wrap">
            <span class="price">
              <i>￥</i>
              <i class="num">{{item.price | formatPrice}}</i>
            </span>
            <span class="subprice">
              <i>￥</i>
              <i class="num">{{item.price | formatPrice}}</i>
            </span>
          </div>
          <div class="add-btn">
            <i class="iconfont">&#xe70b;</i>
          </div>
        </footer>
      </dd>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'product-list',
  props: {
    product: Array
  },
  filters: {
    formatPrice (price) {
      return price / 100
    }
  }
}
</script>

<style lang="scss" scoped>
.product-wrap{
  @include wh(100%, auto);
  background-color: #fff;
  dl{
    @include wh(100%, auto);
    @include flex(row, flex-start, flex-start);
    padding: 33px 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #E2E2E2;
    dt{
      @include wh(240px, 240px);
      margin-right: 30px;
      img{
        @include wh(240px, 240px);
      }
    }
    dd{
      height: 240px;
      @include flex(column, space-between, flex-start);
      header{
        h3{
          font-size: 32px;
          margin-bottom: 12px;
        }
      }
      footer{
        width: 100%;
        @include flex(row, space-between, center);
        .price-wrap{
          i{
            font-style: normal;
          }
          .price{
            color: $color-primary;
            i{
              font-size: 22px;
            }
            .num{
              font-size: 36px;
            }
          }
          .subprice{
            text-decoration: line-through;
            color: #C0C0C0;
          }
        }
        .add-btn{
          @include wh(66px, 66px);
          border-radius: 50%;
          background-color: $color-primary;
          text-align: center;
          line-height: 66px;
          color: #fff;
          i{
            font-size: 40px;
          }
        }
      }
    }
  }
}
</style>
