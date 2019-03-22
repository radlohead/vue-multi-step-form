import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Home from '@/components/Home';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Home describe', () => {
    let store;
    
    beforeEach(() => {
        store = new Vuex.Store({
            state: {},
            getters: {
                homeTitle(){},
                step(){}
            }
        })
    });

    it('Home test', () => {
        const wrapper = shallowMount(Home, { store, localVue });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});