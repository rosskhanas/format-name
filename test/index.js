import assert from 'assert';
import formatName, { FIRST_LAST, LAST_FIRST } from '../src';

const runTest = (inputFirstName, inputLastName, inputSortOrder, expectedResult) => {
  const formattedName = formatName(inputFirstName, inputLastName, inputSortOrder);
  assert.equal(formattedName, expectedResult);
};

describe('full names', () => {
  it('english, no sorting', () => runTest('Ross', 'Khanas', undefined, 'Ross Khanas'));
  it('english, first name, last name', () => runTest('Ross', 'Khanas', FIRST_LAST, 'Ross Khanas'));
  it('english, last name, first name', () => runTest('Ross', 'Khanas', LAST_FIRST, 'Khanas Ross'));
  it('chinese, no sorting', () => runTest('台綸', '曾', undefined, '曾台綸'));
  it('chinese, first name, last name', () => runTest('台綸', '曾', FIRST_LAST, '曾台綸'));
  it('chinese, last name, first name', () => runTest('台綸', '曾', LAST_FIRST, '曾台綸'));
  it('hiragana, no sorting', () => runTest('そうすけ', 'さがら', undefined, 'さがらそうすけ'));
  it('hiragana, first name, last name', () => runTest('そうすけ', 'さがら', FIRST_LAST, 'さがらそうすけ'));
  it('hiragana, last name, first name', () => runTest('そうすけ', 'さがら', LAST_FIRST, 'さがらそうすけ'));
});

describe('full names', () => {
  it('english, first name and undefined', () => runTest('Ross', undefined, undefined, 'Ross'));
  it('english, first name and empty', () => runTest('Ross', '', undefined, 'Ross'));
  it('english, first name and object', () => runTest('Ross', {}, undefined, 'Ross'));
  it('english, last name and undefined', () => runTest(undefined, 'Khanas', undefined, 'Khanas'));
  it('english, last name and empty', () => runTest('', 'Khanas', undefined, 'Khanas'));
  it('english, last name and object', () => runTest({}, 'Khanas', undefined, 'Khanas'));
  it('invalid, object and object', () => runTest({}, {}, undefined, ''));
  it('invalid, object and empty', () => runTest({}, '', undefined, ''));
  it('invalid, empty and object', () => runTest('', {}, undefined, ''));
  it('invalid, empty and empty', () => runTest('', '', undefined, ''));
});
