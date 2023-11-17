import type { ExtractPropTypes } from "vue"
// ExtractPropTypes是vue3的一个工具类型

export const buttonProps = {
  type: {
    type: String,
    default: 'default',
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'normal'
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>