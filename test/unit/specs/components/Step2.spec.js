import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Step2 from '@/components/Step2'

const localVue = createLocalVue();
let store;
localVue.use(Vuex);

describe('Step2 describe', () => {
    let wrapper;

    beforeEach(() => {
        store = new Vuex.Store({
            state: {}
        })
    });

    it('Step2 test', () => {
        wrapper = shallowMount(Step2, { store, localVue });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});