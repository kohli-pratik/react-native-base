import Constants from '../../utils/constants';

const updateTestAttr = newVal => ({
    type: Constants.UPDATE_TEST_ATTR,
    payload: {
        testAttr: newVal,
    },
});

export default updateTestAttr;