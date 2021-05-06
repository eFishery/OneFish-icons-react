import * as Icons from '..';
import { Icon } from '..';

import React from 'react';
import { render, getByTestId } from '@testing-library/react';

const isIcon = (candidate: any): candidate is Icon => 'displayName' in candidate;

describe('all icons exist', () => {
  Object.entries(Icons).forEach(([name, TestIcon]) => {
    if (!isIcon(TestIcon)) return;
    it(`${name} is truthy`, () => {
      expect(TestIcon).toBeTruthy();
    });
    it(`${name} is properly named`, () => {
      expect(name).toEqual(TestIcon.displayName);
    });
  });
});

describe('all icons render content', () => {
  Object.entries(Icons).forEach(([name, TestIcon]) => {
    if (!isIcon(TestIcon)) return;
    it(`${name} renders`, () => {
      const result = render(<TestIcon data-testid="test" />);
      expect(getByTestId(result.container, 'test')).toBeTruthy();
    });
  });
});

describe('all icon weights render', () => {
  Object.entries(Icons).forEach(([name, TestIcon]) => {
    if (!isIcon(TestIcon)) return;
    it(`${name} [regular] renders`, () => {
      const result = render(<TestIcon weight="regular" data-testid="test" />);
      expect(getByTestId(result.container, 'test')).toBeTruthy();
    });
    it(`${name} [fill] renders`, () => {
      const result = render(<TestIcon weight="fill" data-testid="test" />);
      expect(getByTestId(result.container, 'test')).toBeTruthy();
    });
  });
});
