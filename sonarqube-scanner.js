const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://localhost:9000',
    token: 'squ_21a811890e93f1b84f98c4ec0eac8c22745e080c', // 🔁 Replace with your actual token
    options: {
      'sonar.projectKey': 'first-react-app',
      'sonar.projectName': 'First React App',
      'sonar.sources': 'src',
      'sonar.tests': 'src',
      'sonar.test.inclusions': '**/*.test.js,**/*.test.jsx',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'coverage/test-report.xml',
      'sonar.sourceEncoding': 'UTF-8'
    },
  },
  () => process.exit()
);
