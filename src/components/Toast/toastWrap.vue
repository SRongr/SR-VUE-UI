<template>
  <div class="kui-toast-wrap">
    <!-- <Toast
      v-for="toast in toasts"
      :key="toast.id">

    </Toast> -->
    <!-- <Toast v-if="show"></Toast> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      toasts: [],
      show: false
    }
  },
  methods: {
    add (notice) {
      // const name = notice.name || getUuid();

      let _notice = Object.assign({
        styles: {
          // right: '50%'
        },
        content: '',
        duration: 1.5,
        closable: false,
        name: name
      }, notice);
      // try {
      //   console.log(notice)
      // console.log(this.notices)
      
      // this.toasts.push(_notice);
      // } catch (error) {
      //   console.log(error)
      // }
      
      // this.tIndex = this.handleGetIndex();
    },
  }
}
</script>
ˆ
<style lang="less" scoped>
  .kui-toast-wrap {
    position: fixed;
    width: 100%;
  }
</style>