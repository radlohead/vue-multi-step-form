import { 
    CHECKBOX,
    RADIO,
    TEXT,
    SELECTBOX,
    FORM_TYPE_NAME,
    STEP1,
    STEP2,
    STEP3,
    STEP4,
    FORM_ITEM_ID,
    stepExceptionAlertMessage
} from '@/store/constants';

describe('constants formType test', () => {
    it('CHECKBOX', () => {
        expect(CHECKBOX).toBe('CHECKBOX');
    });
    it('RADIO', () => {
        expect(RADIO).toBe('RADIO');
    });
    it('TEXT', () => {
        expect(TEXT).toBe('TEXT');
    });
    it('SELECTBOX', () => {
        expect(SELECTBOX).toBe('SELECTBOX');
    });
});

describe('constants formType number test', () => {
    it('CHECKBOX number', () => {
        expect(FORM_TYPE_NAME[CHECKBOX]).toBe(1);
    });
    it('RADIO number', () => {
        expect(FORM_TYPE_NAME[RADIO]).toBe(2);
    });
    it('TEXT number', () => {
        expect(FORM_TYPE_NAME[TEXT]).toBe(3);
    });
    it('SELECTBOX number', () => {
        expect(FORM_TYPE_NAME[SELECTBOX]).toBe(4);
    });
});

describe('constants STEP1 ~ 4 test', () => {
    it('STEP1', () => {
        expect(STEP1).toBe('STEP1');
    });
    it('STEP2', () => {
        expect(STEP2).toBe('STEP2');
    });
    it('STEP3', () => {
        expect(STEP3).toBe('STEP3');
    });
    it('STEP4', () => {
        expect(STEP4).toBe('STEP4');
    });
});

describe('constants FORM_ITEM_ID test', () => {
    it('STEP1', () => {
        expect(FORM_ITEM_ID[STEP1]).toBe(1);
    });
    it('STEP2', () => {
        expect(FORM_ITEM_ID[STEP2]).toBe(2);
    });
    it('STEP3', () => {
        expect(FORM_ITEM_ID[STEP3]).toBe(3);
    });
    it('STEP4', () => {
        expect(FORM_ITEM_ID[STEP4]).toBe(4);
    });
});

describe('stepExceptionAlertMessage test', () => {
    if('checkbox alert message', () => {
        expect(stepExceptionAlertMessage[CHECKBOX]).toBe('청소 스타일을 체크해 주세요.');
    });
    if('radio alert message', () => {
        expect(stepExceptionAlertMessage[CHECKBOX]).toBe('청소 시간을 체크해 주세요.');
    });
    if('text alert message', () => {
        expect(stepExceptionAlertMessage[CHECKBOX]).toBe('원하는 청소 스타일을 추가로 입력해 주세요.');
    });
    if('selectbox alert message', () => {
        expect(stepExceptionAlertMessage[CHECKBOX]).toBe('네번째 질문을 선택해 주세요.');
    });
});