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

describe('mutations handleNext test', () => {
    it('handleNext step1 test', () => {
        expect(mutations.handleNext(state(
            1,
            [
                itemOptions[0]
            ]
        ))).toBeNull();
    });

    it('handleNext step2 test', () => {
        expect(mutations.handleNext(state(
            2,
            [
                itemOptions[0],
                itemOptions[1]
            ]
        ))).toBeNull();
    });

    it('handleNext step3 test', () => {
        expect(mutations.handleNext(state(
            3,
            [
                itemOptions[0],
                itemOptions[1],
                itemOptions[2]
            ]
        ))).toBeNull();
    });

    it('handleNext step4 test', () => {
        expect(mutations.handleNext(state(
            4,
            [
                itemOptions[0],
                itemOptions[1],
                itemOptions[2],
                itemOptions[3]
            ]
        ))).toBeNull();
    });

    it('handleNext step1 exception test', () => {
        mutations.handleNext(state(
            1,
            input.items[1].options
        ));
        expect(alertMessage).toBe('청소 스타일을 체크해 주세요.');
    });

    it('handleNext step2 exception test', () => {
        mutations.handleNext(state(
            2,
            input.items[1].options
        ));
        expect(alertMessage).toBe('청소 시간을 체크해 주세요.');
    });

    it('handleNext step2 exception test', () => {
        mutations.handleNext(state(
            3,
            input.items[1].options
        ));
        expect(alertMessage).toBe('원하는 청소 스타일을 추가로 입력해 주세요.');
    });

    it('handleNext step2 exception test', () => {
        mutations.handleNext(state(
            4,
            input.items[1].options
        ));
        expect(alertMessage).toBe('네번째 질문을 선택해 주세요.');
    });
});

describe('mutations handleBack test', () => {
    const mockState = state(
        4,
        [
            itemOptions[0],
            itemOptions[1],
            itemOptions[2],
            itemOptions[3]
        ]
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
        [
            itemOptions[0],
            itemOptions[1],
            itemOptions[2],
            itemOptions[3]
        ]
    );

    mutations.handleRestart(mockState);

    it('handleRestart step test', () => {
        expect(mockState.step).toBe(1);
    });

    it('handleRestart items test', () => {
        expect(mockState.form.items.length).toBe(0);
    });
});