import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Step2 from '@/components/Step2'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Step2 describe', () => {
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            state: {}
        })
    });

    it('Step2 test', () => {
        const wrapper = shallowMount(Step2, { store, localVue });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});