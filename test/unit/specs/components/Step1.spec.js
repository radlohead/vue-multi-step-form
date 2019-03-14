import Vuex from 'vuex';
import { shallowMount, createLocalVue, } from '@vue/test-utils';
import Step1 from '@/components/Step1';
import input from '@/assets/input';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Step1 describe', () => {
	let store;

	beforeEach(() => {
		store = new Vuex.Store({
			state: {
				input
			}
		})
	});

	it('Step1 test', () => {
		const wrapper = shallowMount(Step1, { store, localVue });
		expect(wrapper.isVueInstance()).toBeTruthy();
	});
});