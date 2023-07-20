import * as React from 'react';
import { render } from '@testing-library/react';
import 'jest-canvas-mock';
import { DateRangePicker } from '..';

describe('Common render', () => {
    it('renders without crashing', () => {
        render(<DateRangePicker onChange={() => { }} />)
    })
})