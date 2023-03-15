import {describe, it, expect} from 'vitest'
import { mount } from '@vue/test-utils';

import AppInput from '../../base/AppInput.vue'

describe('AppInput', () => {
    const propsData = {
        value: [{ name: 'MasterCard (Standart)' }],
        type: 'parent',
        index: 0,
    }
    it('renders an input field', () => {
        const wrapper = mount(AppInput, {
            props: propsData,
        });
        expect(wrapper.find('input').exists()).toBe(true);
    });

    it('debounces the input change event', async () => {
        const wrapper = mount(AppInput, {
            props: propsData,
        });

        const input = wrapper.find('input');
        await input.setValue('MasterCard (Standart)');

        expect(wrapper.vm.model).toBe('MasterCard (Standart)');

        expect(wrapper.emitted('input')).toEqual([['MasterCard (Standart)']]);
    });
});
