import { expect } from 'chai';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils Test Suite', function () {
  describe('Tests - getFullYear', function () {
    const currentYear = new Date().getFullYear();

    it('should return the current year', function () {
      expect(getFullYear()).to.be.equal(currentYear);
    });
  });

  describe('Tests - getFooterCopy', function () {
    const trueString = 'Holberton School';
    const falseString = 'Holberton School main dashboard';

    it('should return the expected string (true)', function () {
      expect(getFooterCopy(false)).to.be.equal(falseString);
    });

    it('should return the expected string (false)', function () {
      expect(getFooterCopy(true)).to.be.equal(trueString);
    });
  });

  describe('Tests - getLatestNotification', function () {
    const htmlString = '<strong>Urgent requirement</strong> - complete by EOD';

    it('should return the expected string', function () {
      expect(getLatestNotification()).to.be.equal(htmlString);
    });
  });
});
