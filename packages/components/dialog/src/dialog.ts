import type { ExtractPropTypes } from "vue"
// ExtractPropTypes是vue3的一个工具类型

export const dialogProps = {
  title: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '50%'
  },
  top: {
    type: String,
    default: '15vh'
  },
  visible: {
    type: Boolean,
    default: false
  }
}

export type DialogProps = ExtractPropTypes<typeof dialogProps>