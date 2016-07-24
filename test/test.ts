import test = require('blue-tape');

import findUp = require('find-up');

test('findUp', t => {
  return findUp('package.json').then(actual => {
    t.true(actual);
  });
});

test('findUp', t => {
  return findUp('package.json', { cwd: process.cwd()}).then(actual => {
    t.true(actual);
  });
});

test('findUp.sync', t => {
  t.true(findUp.sync('package.json'));
  t.end();
});

test('findUp.sync', t => {
  t.true(findUp.sync('package.json', { cwd: process.cwd()}));
  t.end();
});
