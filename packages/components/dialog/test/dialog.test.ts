// 测试用例 
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Dialog from '../src/dialog.vue';

describe('test Button', () => {
  it ('存在default type', () => {
    const wrapper = mount(Dialog, {
      props: {
        title: '自定义标题'
      }
    })
    expect(wrapper.find('.kot-dialog_title').text()).toBe('自定义标题')
  })

});