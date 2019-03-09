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

import Vuex from 'vuex';
import { shallowMount, createLocalVue, } from '@vue/test-utils';
import Step1 from '@/components/Step1';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Step1 describe', () => {
	let store;

	beforeEach(() => {
		store = new Vuex.Store({
			state: {}
		})
	});

	it('Step1 test', () => {
		const wrapper = shallowMount(Step1, { store, localVue });
		expect(wrapper.isVueInstance()).toBeTruthy();
	});
});