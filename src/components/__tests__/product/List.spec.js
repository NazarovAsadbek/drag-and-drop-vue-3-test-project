import {describe, it, expect} from 'vitest'
import { mount } from '@vue/test-utils';

import AccordionList from '../../product/List.vue'
import {ProductList} from '@/data/product/productList'

describe('AccordionListList', () => {
    it('renders the component with the given props', () => {
        const items = new ProductList()
        const wrapper = mount(AccordionList, {
            props: {
                items,
                activePanelIndex: 0,
                activeContextIndex: null,
                editableCardId: null,
                draggedIndex: null
            }
        })

        expect(wrapper.props('items')).toEqual(items)
        expect(wrapper.props('activePanelIndex')).toBe(0)
        expect(wrapper.props('activeContextIndex')).toBe(null)
        expect(wrapper.props('editableCardId')).toBe(null)
        expect(wrapper.props('draggedIndex')).toBe(null)
    })

    it('sets the model property when the items prop is updated', async () => {
        const wrapper = mount(AccordionList, {
            props: {
                items: [],
                activePanelIndex: 0,
                activeContextIndex: null,
                editableCardId: null,
                draggedIndex: null
            }
        })

        const newItems = new ProductList()

        await wrapper.setProps({ items: newItems })

        expect(wrapper.vm.model).toEqual(newItems)
    })
})
