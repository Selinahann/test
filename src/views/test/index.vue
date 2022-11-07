<template>
    <div>
      <div ref="msgDiv">{{msg}}</div>
      <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
      <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
      <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
      <button @click="changeMsg">
        Change the Message
      </button>
    </div>
</template>
<script type="text/javascript">
export default {
  name: 'test-use',
  data () {
    return {
      msg: 10,
      msg1: 0,
      msg2: 0,
      msg3: 0
    }
  },
  methods: {
    changeMsg () {
      this.msg += 1
      this.msg1 = this.$refs.msgDiv.innerHTML
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
      })
      this.msg3 = this.$refs.msgDiv.innerHTML
    }
  },
  mounted () {
    this.msg = '我是测试'
    console.log(this.$refs.msgDiv.offsetHeight)
  }
}
</script>
