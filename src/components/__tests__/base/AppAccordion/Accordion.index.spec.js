import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'

import Accordion from '../../../base/AppAccordion/index.vue'
import AccordionHeader from '../../../base/AppAccordion/Accordion.header.vue'
import AccordionPanel from '../../../base/AppAccordion/Accordion.panel.vue'
import {ProductList} from '@/data/product/productList'

describe('Accordion', () => {
    it('renders the header and panel components', () => {
        const wrapper = mount(Accordion, {
            props: {
                items: new ProductList(),
                name: 'Accordion Name',
                children: new ProductList()[0].children,
                index: 0,
                isPanelOpened: true,
                isBtnDisabled: true,
                activeContextIndex: null,
                editableCardId: null,
            },
            global: {
                components: {
                    AccordionHeader,
                    AccordionPanel,
                },
            },
        })

        const headerComponent = wrapper.findComponent(AccordionHeader)
        expect(headerComponent.exists()).toBe(true)

        const panelComponent = wrapper.findComponent(AccordionPanel)
        expect(panelComponent.exists()).toBe(true)
    })
})
