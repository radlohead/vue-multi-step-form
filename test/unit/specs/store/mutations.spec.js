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