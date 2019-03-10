import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Step4 from '@/components/Step4';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Step4 describe', () => {
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            state: {}
        })
    });

    it('Step4 test', () => {
        const wrapper = shallowMount(Step4, { store, localVue });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});