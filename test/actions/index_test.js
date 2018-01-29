import { expect } from '../test_helper';
import { CHANGE_AUTH } from '../../src/actions/types'
import  { authenticate } from '../../src/actions'

describe('actions', () => {
  describe('authenticate', () => {
    it('has the correct type', () => {
      const action = authenticate()
      expect(action.type).to.equal(CHANGE_AUTH);
    });

    it('has the correct payload', () => {
      const action = authenticate(true)
      expect(action.payload).to.equal(true)
    });
  });
});
