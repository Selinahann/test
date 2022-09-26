<template>
  <div class="cards-wrap">
    <div class="card">
      <nav>
        <ul>
          <li>
            <div></div>
            <div></div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-part'
}
</script>

<style lang="scss" scoped>
.cards-wrap{
  @include wh(100%, auto);
  padding: 0 30px;
  box-sizing: border-box;
  margin-top: 40px;
  .card{
    @include wh(100%, 342px);
    background: #FFFFFF;
    box-shadow: 0px 0px 17px -3px rgba(0,0,0,0.06);
    border-radius: 12px;
    border: 1px solid #F0F0F0;
  }
}
</style>
