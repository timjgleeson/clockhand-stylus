



//  Shorthand Omissions Test Runner
//  -------------------------------


var testRunnerConfig = {
  describe: 'Clockhand',
  stylus: {
    use: require('./index')(),
    import: 'clockhand'
  }
}

require('stylus-test-runner')(testRunnerConfig)
