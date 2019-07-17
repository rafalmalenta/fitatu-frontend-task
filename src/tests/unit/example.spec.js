import { shallowMount } from '@vue/test-utils'
import EditButton from '@/components/EditButton.vue'

describe('EditButton.vue', () => {
  it('zawiera button', () => {    
    const wrapper = shallowMount(EditButton, {      
    })
    expect(wrapper.contains('button')).toBe(true)
  })
})
