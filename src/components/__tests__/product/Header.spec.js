import {describe, it, expect} from 'vitest'
import { mount } from '@vue/test-utils';

import Heading from '../../product/Header.vue';

describe('Heading', () => {
    it('displays the correct number of products found', () => {
        const findProducts = 42;
        const wrapper = mount(Heading, {
            propsData: { findProducts }
        });
        const chip = wrapper.find('.wrapper-heading__chip span');
        expect(chip.text()).toBe(`Найдено: ${findProducts}`);
    });

    it('defaults to zero if no products found prop is provided', () => {
        const findProducts = 0;
        const wrapper = mount(Heading, {
            propsData: { findProducts }
        });
        const chip = wrapper.find('.wrapper-heading__chip span');
        expect(chip.text()).toBe('Найдено: 0');
    });
});

