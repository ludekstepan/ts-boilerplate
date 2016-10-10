
import Hello from './Hello';
import { expect } from 'chai';

describe('Hello', () => {
  it('loads', () => {
    expect(Hello).not.to.be.null;
  });
});
