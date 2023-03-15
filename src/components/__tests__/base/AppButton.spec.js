import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'

import AppButton from '../../base/AppButton.vue'


describe('AppButton', () => {
    it('renders button text from slot', () => {
        const buttonText = 'Click me!'
        const wrapper = mount(AppButton, {
            slots: {
                default: buttonText
            }
        })
        expect(wrapper.text()).toMatch(buttonText)
    })

    it('emits onClick event when clicked', () => {
        const wrapper = mount(AppButton)
        wrapper.trigger('click')
        expect(wrapper.emitted('onClick')).toBeTruthy()
    })

    it('sets button to active when isActive prop is true', () => {
        const wrapper = mount(AppButton, {
            props: {
                isActive: true
            }
        })
        expect(wrapper.classes()).toContain('active')
    })

    it('sets button to disabled when isBtnDisabled prop is true', () => {
        const wrapper = mount(AppButton, {
            props: {
                isBtnDisabled: true
            }
        })
        expect(wrapper.classes()).toContain('disabled')
    })
})

