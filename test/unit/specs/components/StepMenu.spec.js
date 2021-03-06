import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import StepMenu from '@/components/StepMenu';
import input from '@/assets/input';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('StepMenu describe', () => {
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            state: {
                input
            },
            getters: {
                firstStep(){},
                lastStep(){},
                secondToLastStep(){}
            }
        })
    });

    it('StepMenu test', () => {
        const wrapper = shallowMount(StepMenu, { store, localVue });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});