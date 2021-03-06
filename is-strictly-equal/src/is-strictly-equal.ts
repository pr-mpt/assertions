interface Result {
  pass: boolean
  message: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isStrictlyEqual(expected: any, actual: any): Result {
  return {
    pass: actual === expected,
    message: `compared ${typeof actual} ${actual} to ${typeof expected} ${expected}`
  }
}

export = isStrictlyEqual
