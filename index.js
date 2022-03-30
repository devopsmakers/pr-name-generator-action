const core = require('@actions/core');
const github = require('@actions/github');
const {uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
  names} = require('unique-names-generator');

try {
  const context = github.context;

  const config = {
    dictionaries: [adjectives, colors, animals, names],
    separator: '-',
    length: 2,
    style: 'lowerCase',
    seed: `${context.issue}`,
  };

  const output = uniqueNamesGenerator(config);
  
  core.info(`Unique name: ${output}`);
  core.setOutput('name', output);
} catch (error) {
  core.setFailed(error.message);
}
