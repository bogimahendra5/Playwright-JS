const common = `
  --require-module ts-node/register
  --require tests/steps/*.cjs
  --require @babel/register
  `;

module.exports = {
    default: `${common} tests/features/*.feature`,
    serverModuleFormat: "cjs",
};
