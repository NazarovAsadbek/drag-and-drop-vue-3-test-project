import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'

import AccordionHeader from '../../../base/AppAccordion/Accordion.header.vue'
import {ProductList} from '@/data/product/productList'

describe('AccordionHeader', () => {
    const propsData = {
        items: new ProductList(),
        index: 0,
        childrenLength: 0,
        name: 'Mastercard',
        children: [],
        isPanelOpened: false,
        isContextMenuOpened: false,
        isCardEditable: false,
        isBtnDisabled: false,
        contextMenuItems: [],
    }

    const wrapper = mount(AccordionHeader, {propsData})

    it('renders the correct order number', () => {
        expect(wrapper.vm.getCurrentOrderNumber).toBe(1)
    })

    it('renders the correct children string', () => {
        expect(wrapper.vm.getChildrenString).toBe('-')
    })
})

