import { mount, shallowMount } from '@vue/test-utils'

import EditButton from '@/components/EditButton.vue'
import EmployeeStore from '../../EmployeeStore';

describe('EditButton.vue', () => {
  it('zawiera button', () => {    
    const wrapper = mount(EditButton, {
      propsData:{
        employee:{
          "id": 1,          
          },        
        rowOrForm:"row",        
        }
    })
    expect(wrapper.contains('button')).toBe(true)
  })
  
  it('button na click emituje wlasciwe propsy', () => {    
    const wrapper = mount(EditButton, {
      propsData:{
        employee:{
          id: 2
        },
        rowOrForm:'row',
      }
    })    
    wrapper.find('button').trigger('click')    
    expect(wrapper.emitted().editEmployee[0]).toEqual([2])
  })
  it('button na click emituje wlasciwy object', () => {    
    const wrapper = mount(EditButton, {
      propsData:{
        employee:{
          id: 2
        },
        rowOrForm:'form',
      }
    })
    
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted().form[0]).toEqual( [{id: 2}])
  })

})


