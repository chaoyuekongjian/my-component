// 测试用例 
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../src/button.vue';

describe('test Button', () => {
  it ('存在default type', () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain('kot-button--default');
    expect(wrapper.classes()).toContain('kot-button');
  })

  it('渲染按钮有正确的属性', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
        plain: true
      }
    });
    expect(wrapper.classes()).toContain('kot-button--primary');
    expect(wrapper.classes()).toContain('kot-button');
    expect(wrapper.classes()).toContain('is-plain');
  })

});