<template>
  <div>
    <Input clearable v-model="model" @onClear="handleClear" @onFocus="handleFocues" style="width: 300px" placeholder="haloo" @onChange="handleChange"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: '231'
    }
  },
  methods: {
    handleFocues (e) {
      console.log('focus', e)
      console.log(this.model)
    },
    handleChange (e) {
      console.log('change', e)
      console.log(this.model)
    },
    handleInput (e) {
      console.log('input', e)
      console.log(this.model)
    },
    handleClear (e) {
      console.log('clear', e)
      console.log(this.model)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
