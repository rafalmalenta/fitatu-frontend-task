import { mount, shallowMount } from '@vue/test-utils'

import EditButton from '@/components/EditButton.vue'

describe('EditButton.vue', () => {
  it('zawiera button', () => {    
    const wrapper = shallowMount(EditButton, {})
    expect(wrapper.contains('button')).toBe(true)
  })
})

describe('EditButton.vue', () => {
  it('button na click emituje wlasciwe propsy', () => {    
    const wrapper = mount(EditButton, {
      propsData:{
        id: 2
      }
    })    
    wrapper.find('button').trigger('click')    
    expect(wrapper.emitted().editEmployee[0]).toEqual([2])
  })
})



