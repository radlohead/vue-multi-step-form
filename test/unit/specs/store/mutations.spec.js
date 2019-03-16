import 'array-flat-polyfill';
import Vue from 'vue';
import mutations from '@/store/mutations';
import input from '@/assets/input';
import { items as itemOptions } from '@/assets/output';
import { alertMessage } from '../../setup';
import Step4 from '@/components/Step4';

const state = (stepCount, options) => {
    return {
        step: stepCount,
        form: {
            id: input.formId,
            items: options
        }
    }
}

const take = (n, iterable) => {
    let result = [];
    for(const a of iterable) {
        n--;
        result.push(a);
        if(n <= 0) return result;
    }
}

describe('mutations handleNext test', () => {
    it('step1 handleNext return null', () => {
        const step = 1;
        const mockState = state(step, take(1, itemOptions));
        const returnValue = mutations.handleNext(mockState);
        expect(returnValue).toBeNull();
    });

    it('step1 step increment', () => {
        const step = 1;
        const mockState = state(step, take(1, itemOptions));
        mutations.handleNext(mockState);
        expect(mockState.step).toBe(step + 1);
    });

    it('step2 handleNext return null', () => {
        const step = 2;
        const mockState = state(step, take(2, itemOptions));
        const returnValue = mutations.handleNext(mockState);
        expect(returnValue).toBeNull();
    });

    it('step2 step increment', () => {
        const step = 2;
        const mockState = state(step, take(2, itemOptions));
        mutations.handleNext(mockState);
        expect(mockState.step).toBe(step + 1);
    });

    it('step3 handleNext return null', () => {
        const step = 3;
        const mockState = state(step, take(3, itemOptions));
        const returnValue = mutations.handleNext(mockState);
        expect(returnValue).toBeNull();
    });

    it('step3 step increment', () => {
        const step = 3;
        const mockState = state(step, take(3, itemOptions));
        mutations.handleNext(mockState);
        expect(mockState.step).toBe(step + 1);
    });

    it('step4 handleNext return null', () => {
        const step = 4;
        const mockState = state(step, take(4, itemOptions));
        const returnValue = mutations.handleNext(mockState);
        expect(returnValue).toBeNull();
    });

    it('step4 step increment', () => {
        const step = 4;
        const mockState = state(step, take(4, itemOptions));
        mutations.handleNext(mockState);
        expect(mockState.step).toBe(step + 1);
    });
});

describe('mutations exception test', () => {
    it('step1 exception test', () => {
        const mockState = state(1, input.items[1].options);
        mutations.handleNext(mockState);
        expect(alertMessage).toBe('청소 스타일을 체크해 주세요.');
    });

    it('step2 exception test', () => {
        const mockState = state(2, input.items[1].options);
        mutations.handleNext(mockState);
        expect(alertMessage).toBe('청소 시간을 체크해 주세요.');
    });

    it('step3 exception test', () => {
        const mockState = state(3, input.items[1].options);
        mutations.handleNext(mockState);
        expect(alertMessage).toBe('원하는 청소 스타일을 추가로 입력해 주세요.');
    });

    it('step4 exception test', () => {
        const mockState = state(4, input.items[1].options);
        mutations.handleNext(mockState);
        expect(alertMessage).toBe('네번째 질문을 선택해 주세요.');
    });
})

describe('mutations handleBack test', () => {
    let step = 4;
    const mockState = state(step, take(3, itemOptions));

    beforeEach(() => {
        while(--step > 0) mutations.handleBack(mockState);
    });

    it('step4 ~ step1 test', () => {
        expect(mockState).toEqual(state(1, []));
    });
});

describe('mutations handleRestart test', () => {
    const mockState = state(5, take(4, itemOptions));
    const initialState = {
        step: 1,
        items: []
    }

    mutations.handleRestart(mockState);

    it('step test', () => {
        expect(mockState.step).toBe(initialState.step);
    });

    it('items test', () => {
        expect(mockState.form.items.length).toBe(initialState.items.length);
    });
});

describe('mutations updateCheckbox test', () => {
    const itemLength = 1;
    const mockState = state(1, take(itemLength, itemOptions));
    const mockItems = {
        id: 2,
        value: 'checked test',
        checked: true,
    }
    let index = null;

    mutations.updateCheckbox(mockState, mockItems);
    index = mockState.form.items.length - 1;

    it('items length test', () => {
        expect(index).toBe(itemLength);
    });

    it('items id test', () => {
        expect(mockState.form.items[index].id).toBe(mockItems.id);
    });

    it('items value test', () => {
        expect(mockState.form.items[index].answer).toBe(mockItems.value);
    });
});

describe('mutations updateRadio test', () => {
    const mockState = state(2, take(2, itemOptions));
    const mockItems = {
        id: 4,
        value: '1시간',
        checked: false,
    }

    const mockItems2 = {
        id: 5,
        value: '2시간',
        checked: true,
    }
    let index = null;

    mutations.updateCheckbox(mockState, mockItems);
    mutations.updateCheckbox(mockState, mockItems2);
    index = mockState.form.items.length - 1;

    it('items id test', () => {
        expect(mockState.form.items[index].id).toBe(mockItems2.id);
    });

    it('items value test', () => {
        expect(mockState.form.items[index].answer).toBe(mockItems2.value);
    });
});

describe('mutations updateText test', () => {
    const mockState = state(3, take(3, itemOptions));
    const mockItems = { value: 'input text test' };
    let index = null;

    mutations.updateText(mockState, mockItems);
    index = mockState.form.items.length - 1;

    it('answer test', () => {
        expect(mockState.form.items[index]).toEqual({ answer: mockItems.value });
    });
});

describe('mutations updateSelectbox test', () => {
    const Constructor = Vue.extend(Step4);
    const vm = new Constructor().$mount();
    let mockState = mockState = state(4, take(3, itemOptions));;
    let items = vm.$el.querySelector('select');;
    let index = null;

    it('selected option id', () => {
        const selectedIndex = 1;
        const seletedItemOptionId = Number(items.options[selectedIndex].id);
        
        items.options.selectedIndex = selectedIndex;
        mutations.updateSelect(mockState, items);
        index = mockState.form.items.length - 1;
        expect(mockState.form.items[index].id).toEqual(seletedItemOptionId);
    });

    it('selected option value', () => {
        const selectedIndex = 1;

        items.options.selectedIndex = selectedIndex;
        mutations.updateSelect(mockState, items);
        index = mockState.form.items.length - 1;
        expect(mockState.form.items[index].answer).toEqual(items.value);
    })
});