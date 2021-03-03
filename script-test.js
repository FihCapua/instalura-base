// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require('shelljs');

const result = shell.exec('git diff --name-only branch-scripts-test..main', { silent: true });

// eslint-disable-next-line no-console
console.log(result.stdout.split('\n'));
