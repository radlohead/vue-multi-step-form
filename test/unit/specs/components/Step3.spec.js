import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Step3 from '@/components/Step3';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Step3 describe', () => {
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            state: {}
        })
    });

    it('Step3 test', () => {
        const wrapper = shallowMount(Step3, { store, localVue });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});