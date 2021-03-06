const fs = require('mock-fs')
const directoryExists: any = require('../src/directory-exists')

beforeEach(function () {
  fs({
    'workspace/directory-exists': {},
    'workspace/file-exists': 'Hello, World!'
  })
})

afterEach(fs.restore)

describe('directory exists assertion', () => {
  it('does not pass when path is not found', () => {
    expect(directoryExists('workspace/does-not-exist').pass).toBe(false)
  })

  it('passes when directory is found at path', () => {
    expect(directoryExists('workspace/directory-exists').pass).toBe(true)
  })

  it('does not pass when path is to a file', () => {
    expect(directoryExists('workspace/file-exists').pass).toBe(false)
  })

  it('passes when directory is an absolute path', () => {
    expect(
      directoryExists(`${process.cwd()}/workspace/directory-exists`).pass
    ).toBe(true)
  })

  it('throws error when actual is provided', () => {
    expect(() => {directoryExists('expected', 'actual')}).toThrow(RangeError)
  })
})
