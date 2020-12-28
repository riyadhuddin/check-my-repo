const { printResults, createJsonFile, validateChangeLog } = require('../src/utils')
const results = require('./__fixtures__/results')
const resultsPassed = require('./__fixtures__/results-passed')
const { createdInstances } = require('@octokit/rest')

test('should return a sum of all repositories without fail', () => {
  const log = jest.fn()
  const hasFailures = 1
  let passingRepositories = 0
const fs = require('fs')
jest.mock('fs')
fs.promises = { mkdir: jest.fn(), writeFile: jest.fn() }

  expect(log.mock.calls).toMatchSnapshot()
})
const repository = 'repository'
const organization = 'organization'

test('should return a sum of all repositories without fail', () => {})
