// import Vue from 'vue'
// import HelloWorld from '@/components/HelloWorld'
// describe('HelloWorld.vue', () => {
//   it('should render correct contents', () => {
//     const Constructor = Vue.extend(HelloWorld)
//     const vm = new Constructor().$mount()
//     expect(vm.$el.querySelector('.hello h1').textContent)
//       .toEqual('Welcome to Your Vue.js App')
//   })
// })

import Vue from 'vue'
import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import Step1 from '@/components/Step1'

// const localVue = createLocalVue()
// localVue.use(Vuex)

// const storeOptions = {}
// const mockStore = new Vuex.Store(storeOptions)

// describe('Step1 mock', () => {
//   let wrapper
//   beforeEach(() => {
//     const mountOptions = {
//       localVue,
//       store: mockStore
//     }
//     wrapper = mount(Step1, mountOptions)
//   })
  
//   test('Step1 test', () => {
//     expect(wrapper.isVueInstance()).toBeTruthy()
//   })
// })


describe('Step1.vue', () => {
  it('Step1 test', () => {
    

    // const Constructor = Vue.extend(Step1)
    // const vm = new Constructor().$mount()
    // expect(vm.updateCheckbox()).toEqual(1)
  })
})