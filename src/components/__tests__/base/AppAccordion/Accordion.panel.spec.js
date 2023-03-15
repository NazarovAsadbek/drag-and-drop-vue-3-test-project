import {beforeEach, describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils';
import AccordionPanel from '../../../base/AppAccordion/Accordion.panel.vue';
import {ProductList} from '@/data/product/productList'

describe('AccordionPanel', () => {
    let wrapper;

    const propsData = {
        items: new ProductList(),
        name: 'Accordion 1',
        index: 0,
        childIndex: 0,
        isContextMenuOpened: false,
        isCardEditable: true,
        contextMenuItems: [
            {label: 'Edit', value: 'edit'},
            {label: 'Delete', value: 'delete'}
        ]
    };

    beforeEach(() => {
        wrapper = mount(AccordionPanel, {
            propsData,
            global: {
                components: {
                    AppButton: {
                        template: '<button class="app-button"><slot></slot></button>',
                        props: ['onClick']
                    },
                    AppDropdownMenu: {
                        template: '<div class="app-dropdown-menu"><slot></slot></div>',
                        props: ['items', 'isCardEditable'],
                        emits: ['select']
                    },
                    AppInput: {
                        template: '<input class="app-input" v-model="value">',
                        props: ['value']
                    }
                }
            }
        });
    });

    it('renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
    });

    it('shows the child order number', () => {
        expect(wrapper.find('.accordion-panel__order + div + div p:last-child').text()).toBe('1');
    });
});
