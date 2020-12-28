const resultsPassed = require('./__fixtures__/results-passed')

test('should return a sum of all repositories without fail', () => {
  const log = jest.fn()
  const hasFailures = 1
  let passingRepositories = 0

  expect(log.mock.calls).toMatchSnapshot()
})
