// 测试用例 
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Card from '../src/card.vue';

describe('test Button', () => {
  it ('存在default type', () => {
    const wrapper = mount(Card)
    expect(wrapper.classes()).toContain('kot-card');
  })

});