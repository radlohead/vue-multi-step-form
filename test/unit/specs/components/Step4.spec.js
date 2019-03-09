import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Step4 from '@/components/Step4';

const localVue = createLocalVue();
let store;
localVue.use(Vuex);

describe('Step4 describe', () => {
    let wrapper;

    beforeEach(() => {
        store = new Vuex.Store({
            state: {}
        })
    });

    it('Step4 test', () => {
        wrapper = shallowMount(Step4, { store, localVue });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});