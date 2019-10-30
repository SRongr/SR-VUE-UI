<template>
  <div>
    <Button @click="show = true">点我展示</Button>
    <Modal v-if="show">
      <div class="head" slot="head">我是头</div>
      <div class="body" slot="body">我是body</div>
      <div class="footer" slot="footer">
        <Button type="primary" @click="show = !show">确认</Button>
        <Button type="default" @click="show = !show">取消</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleCancle () {
      this.show = false
    },
    handleBtn () {
      this.show = true
    }
  }
}
</script>
