import type { ExtractPropTypes } from "vue"
// ExtractPropTypes是vue3的一个工具类型

export const cardProps = {
  width: {
    type: [String, Number],
    default: '0'
  },
  imgSrc: {
    type: String,
    default: '',
    required: true
  },
  imgHeight: {
    type: Number,
    default: 0
  },
  summary: {
    type: String,
    default: ''
  }
}

export type CardProps = ExtractPropTypes<typeof cardProps>