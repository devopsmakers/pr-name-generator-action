const process = require('process');
const cp = require('child_process');
const path = require('path');

test('test runs', () => {
  process.env['GITHUB_EVENT_PATH'] = './fixtures/event.json';
  const ip = path.join(__dirname, 'index.js');
  const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
  expect(result).toContain('::set-output name=generated_name::mute-moccasin');
});
