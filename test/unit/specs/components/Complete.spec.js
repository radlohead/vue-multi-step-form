import Vue from 'vue';
import Complete from '@/components/Complete';

describe('Complete describe', () => {
    it('Complete name test', () => {
        expect(Complete.name).toBe('Complete');
    });

    it('Complete snapShot test', () => {
        const Constructor = Vue.extend(Complete);
        const vm = new Constructor().$mount();

        expect(vm).toMatchSnapshot();
    });
});