const { printResults, createJsonFile, validateChangeLog } = require('../src/utils')
const results = require('./__fixtures__/results')
const resultsPassed = require('./__fixtures__/results-passed')
const { createdInstances } = require('@octokit/rest')

const fs = require('fs')
jest.mock('fs')
fs.promises = { mkdir: jest.fn(), writeFile: jest.fn() }

const repository = 'repository'
const organization = 'organization'

test('should return a sum of all repositories without fail', () => {})
