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
    STEP_EXCEPTION_ALERT_MESSAGE
} from '@/store/actions';

describe('constants formType test', () => {
    const mockFormType = {
        CHECKBOX: 'CHECKBOX',
        RADIO: 'RADIO',
        TEXT: 'TEXT',
        SELECTBOX: 'SELECTBOX'
    }
    it('CHECKBOX', () => {
        expect(CHECKBOX).toBe(mockFormType[CHECKBOX]);
    });
    it('RADIO', () => {
        expect(RADIO).toBe(mockFormType[RADIO]);
    });
    it('TEXT', () => {
        expect(TEXT).toBe(mockFormType[TEXT]);
    });
    it('SELECTBOX', () => {
        expect(SELECTBOX).toBe(mockFormType[SELECTBOX]);
    });
});

describe('constants formType number test', () => {
    const mockFormTypeIndex = {
        CHECKBOX: 1,
        RADIO: 2,
        TEXT: 3,
        SELECTBOX: 4
    }

    it('CHECKBOX number', () => {
        expect(FORM_TYPE_NAME[CHECKBOX]).toBe(mockFormTypeIndex[CHECKBOX]);
    });
    it('RADIO number', () => {
        expect(FORM_TYPE_NAME[RADIO]).toBe(mockFormTypeIndex[RADIO]);
    });
    it('TEXT number', () => {
        expect(FORM_TYPE_NAME[TEXT]).toBe(mockFormTypeIndex[TEXT]);
    });
    it('SELECTBOX number', () => {
        expect(FORM_TYPE_NAME[SELECTBOX]).toBe(mockFormTypeIndex[SELECTBOX]);
    });
});

describe('constants STEP1 ~ 4 test', () => {
    const mockSteps = {
        STEP1: 'STEP1',
        STEP2: 'STEP2',
        STEP3: 'STEP3',
        STEP4: 'STEP4'
    }

    it('STEP1', () => {
        expect(STEP1).toBe(mockSteps[STEP1]);
    });
    it('STEP2', () => {
        expect(STEP2).toBe(mockSteps[STEP2]);
    });
    it('STEP3', () => {
        expect(STEP3).toBe(mockSteps[STEP3]);
    });
    it('STEP4', () => {
        expect(STEP4).toBe(mockSteps[STEP4]);
    });
});

describe('constants FORM_ITEM_ID test', () => {
    const mockFormTypeId = {
        STEP1: 1,
        STEP2: 2,
        STEP3: 3,
        STEP4: 4
    }

    it('STEP1', () => {
        expect(FORM_ITEM_ID[STEP1]).toBe(mockFormTypeId[STEP1]);
    });
    it('STEP2', () => {
        expect(FORM_ITEM_ID[STEP2]).toBe(mockFormTypeId[STEP2]);
    });
    it('STEP3', () => {
        expect(FORM_ITEM_ID[STEP3]).toBe(mockFormTypeId[STEP3]);
    });
    it('STEP4', () => {
        expect(FORM_ITEM_ID[STEP4]).toBe(mockFormTypeId[STEP4]);
    });
});

describe('STEP_EXCEPTION_ALERT_MESSAGE test', () => {
    const mockStepExceptionAlertMessage = {
        CHECKBOX: '청소 스타일을 체크해 주세요.',
        RADIO: '청소 시간을 체크해 주세요.',
        TEXT: '원하는 청소 스타일을 추가로 입력해 주세요.',
        SELECTBOX: '네번째 질문을 선택해 주세요.'
    }
    
    it('checkbox alert message', () => {
        expect(STEP_EXCEPTION_ALERT_MESSAGE[CHECKBOX]).toBe('청소 스타일을 체크해 주세요.');
    });
    it('radio alert message', () => {
        expect(STEP_EXCEPTION_ALERT_MESSAGE[RADIO]).toBe('청소 시간을 체크해 주세요.');
    });
    it('text alert message', () => {
        expect(STEP_EXCEPTION_ALERT_MESSAGE[TEXT]).toBe('원하는 청소 스타일을 추가로 입력해 주세요.');
    });
    it('selectbox alert message', () => {
        expect(STEP_EXCEPTION_ALERT_MESSAGE[SELECTBOX]).toBe('네번째 질문을 선택해 주세요.');
    });
});