test('Parser as a string', () => {
  const css = require('../fixtures/style.sss')
  expect(css).toEqual('a {\n  color: black\n}\n')
})
