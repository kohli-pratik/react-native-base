import Constants from '../utils/constants';

const sampleReducer = (state = '', { type, payload }) => {
    switch (type) {
    case Constants.UPDATE_TEST_ATTR:
        return payload.testAttr;
    default:
        return state;
    }
};

export default sampleReducer;