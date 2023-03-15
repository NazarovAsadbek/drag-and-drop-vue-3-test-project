import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'

import AppDropdownMenu from '../../base/AppDropdownMenu.vue'
import {MenuContext} from "@/data/product/menu-context";

describe('AppDropdownMenu.vue', () => {
    const items = new MenuContext();

    it('renders the context menu button and menu items correctly', () => {
        const wrapper = mount(AppDropdownMenu, {
            propsData: {
                items
            }
        });

        expect(wrapper.find('.context-menu').exists()).toBe(true);
        expect(wrapper.findAll('.context-menu-list__item')).toHaveLength(items.length);
    });

    it('emits the "onClick" event when the context menu button is clicked', () => {
        const wrapper = mount(AppDropdownMenu, {
            propsData: {
                items
            }
        });

        wrapper.find('.context-menu').trigger('click');
        expect(wrapper.emitted('onClick')).toBeTruthy();
    });

    it('emits the "select" event with the action value when a menu item is clicked', () => {
        const wrapper = mount(AppDropdownMenu, {
            propsData: {
                items
            }
        });

        wrapper.findAll('.context-menu-list__item').at(0).trigger('click');
        expect(wrapper.emitted('select')[0][0]).toBe(items[0].action);

        wrapper.findAll('.context-menu-list__item').at(1).trigger('click');
        expect(wrapper.emitted('select')[1][0]).toBe(items[1].action);
    });
});
