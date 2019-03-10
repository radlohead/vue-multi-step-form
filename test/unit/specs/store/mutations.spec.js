import mutations from '@/store/mutations';
import input from '@/assets/input';
import { items as itemOptions } from '@/assets/output';
import { alertMessage } from '../../setup';

const state = (stepIndex, options) => {
    return {
        step: stepIndex,
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
    it('step1 test', () => {
        expect(mutations.handleNext(state(
            1,
            take(1, itemOptions)
        ))).toBeNull();
    });

    it('step2 test', () => {
        expect(mutations.handleNext(state(
            2,
            take(2, itemOptions)
        ))).toBeNull();
    });

    it('step3 test', () => {
        expect(mutations.handleNext(state(
            3,
            take(3, itemOptions)
        ))).toBeNull();
    });

    it('step4 test', () => {
        expect(mutations.handleNext(state(
            4,
            take(4, itemOptions)
        ))).toBeNull();
    });
});

describe('mutations exception test', () => {
    it('step1 exception test', () => {
        mutations.handleNext(state(
            1,
            input.items[1].options
        ));
        expect(alertMessage).toBe('청소 스타일을 체크해 주세요.');
    });

    it('step2 exception test', () => {
        mutations.handleNext(state(
            2,
            input.items[1].options
        ));
        expect(alertMessage).toBe('청소 시간을 체크해 주세요.');
    });

    it('step2 exception test', () => {
        mutations.handleNext(state(
            3,
            input.items[1].options
        ));
        expect(alertMessage).toBe('원하는 청소 스타일을 추가로 입력해 주세요.');
    });

    it('step2 exception test', () => {
        mutations.handleNext(state(
            4,
            input.items[1].options
        ));
        expect(alertMessage).toBe('네번째 질문을 선택해 주세요.');
    });
})

describe('mutations handleBack test', () => {
    const mockState = state(
        4,
        take(4, itemOptions)
    );

    beforeEach(() => {
        mutations.handleBack(mockState);
        mutations.handleBack(mockState);
        mutations.handleBack(mockState);
        mutations.handleBack(mockState);
    });
    
    it('step4 ~ step1 test', () => {
        expect(mockState.form.items.length).toBe(1);
    });
});

describe('mutations handleRestart test', () => {
    const mockState = state(
        5,
        take(4, itemOptions)
    );

    mutations.handleRestart(mockState);

    it('step test', () => {
        expect(mockState.step).toBe(1);
    });

    it('items test', () => {
        expect(mockState.form.items.length).toBe(0);
    });
});

describe('mutations updateCheckbox test', () => {
    const mockState = state(
        1,
        take(1, itemOptions)
    );

    const mockItems = {
        id: 2,
        value: 'checked test',
        checked: true,
    }

    mutations.updateCheckbox(mockState, mockItems);

    it('items length test', () => {
        expect(mockState.form.items.length).toBe(2);
    });

    it('items id test', () => {
        expect(mockState.form.items[1].id).toBe(mockItems.id);
    });

    it('items value test', () => {
        expect(mockState.form.items[1].answer).toBe(mockItems.value);
    });
});

describe('mutations updateRadio test', () => {
    const mockState = state(
        2,
        take(2, itemOptions)
    );

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

    mutations.updateCheckbox(mockState, mockItems);
    mutations.updateCheckbox(mockState, mockItems2);

    it('items id test', () => {
        expect(mockState.form.items[2].id).toBe(mockItems2.id);
    });

    it('items value test', () => {
        expect(mockState.form.items[2].answer).toBe(mockItems2.value);
    });
});

describe('mutations updateText test', () => {
    const mockState = state(
        3,
        take(3, itemOptions)
    );

    const mockItems = {
        value: 'input text test'
    }

    mutations.updateText(mockState, mockItems);

    it('answer test', () => {
        const index = mockState.form.items.length - 1;
        expect(mockState.form.items[index]).toEqual({ answer: mockItems.value });
    });
});

describe('mutations updateSelect test', () => {
    const div = document.createElement('div');
    const selectbox = `<select name="selectbox" selected="selected"><option disabled="disabled" selected="selected">질문을 선택해 주세요</option> <option id="6">React 좋아하시나요?</option> <option id="7">Vue 좋아하시나요?</option> <option id="8">React VS Vue 과연 승자는?</option></select>`;
    let items = null;
    let index = null;
    let mockState = null;

    div.innerHTML = selectbox;
    items = div.querySelector('select');
    mockState = state(
        4,
        take(3, itemOptions)
    );

    items.options.selectedIndex = 1;
    mutations.updateSelect(mockState, items);
    index = mockState.form.items.length - 1;

    it('answer test', () => {
        expect(mockState.form.items[index].answer).toEqual(items.value);
    });
});