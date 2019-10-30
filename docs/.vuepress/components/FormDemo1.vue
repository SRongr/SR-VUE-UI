<template>
  <div>
    <Form ref="form" :model="formValidateData" :labelWidth="100" :rules="ruleValidate">
      <FormItem label="账号" prop="username" :label-width="60">
        <Input v-model="formValidateData.username"/>
      </FormItem>
      <FormItem label="password" prop="password">
        <Input v-model="formValidateData.password"/>
      </FormItem>
      <FormItem label="email" prop="email">
        <Input v-model="formValidateData.email"/>
      </FormItem>
      <FormItem label="tel" prop="tel"
        :rules="[{ validator: telValidate, message: '请输入正确手机号', trigger: 'change'}]">
        <Input v-model="formValidateData.tel"/>
      </FormItem>
    </Form>
    <Button type="primary" @click="validate">validate</Button>
  </div>
</template>

<script>
import UI from '../main'
export default {
  data () {
    return {
      formValidateData: {
        username: 'SRongr',
        password: 'demo',
        email: '',
        tel: ''
      },
      ruleValidate: {
        username: [{ required: true, message: '必填', trigger: 'change' }, { type:'string', min: 10, trigger: 'change'}],
        password: { required: true, message: '必填', trigger: 'change'},
        email: [{ type: 'email', message: 'email 格式不正确', trigger: 'change' }, {required: true, message: '请输入邮箱', trigger:'change'}],

      }
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$Toast.success("校验通过")
        } else {
          this.$Toast.warning({
            content: '请填写完整信息'
          })
        }
      })
    },
    telValidate (rule, value, callback) {
      if (value.length < 11) {
        return callback(new Error())
      } else {
        return true
      }
    }
  }
}
</script>