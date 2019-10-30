<template>
  <div>
    <Button @click="show = true">点我展示</Button>
    <Modal v-model="show">
      <div class="head" slot="head">我是头</div>
      <div class="body" slot="body">我是body</div>
      <div class="footer" slot="footer">
        <Button type="primary" @click="show = !show">确认</Button>
        <Button type="default" @click="show = !show">取消</Button>
      </div>
    </Modal>

    <Button @click="show2 = true">点我展示默认</Button>
     <Modal
      v-model="show2"
      title="这是标题"
      content="这是内容"
      >
      </Modal>
  </div>
</template>

<script>
import UI from '../main'
export default {
  data () {
    return {
      show: false,
      show2: false
    }
  }
}
</script>
