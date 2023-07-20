import * as React from 'react';
import { render } from '@testing-library/react';
import 'jest-canvas-mock';
import { DateRangePicker } from '../src';
describe('Common render', function () {
    it('renders without crashing', function () {
        render(React.createElement(DateRangePicker, { onChange: function () { } }));
    });
});
//# sourceMappingURL=common.test.js.map