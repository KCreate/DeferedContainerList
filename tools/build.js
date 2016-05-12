const rimraf = require('rimraf-promise');
const colors = require('colors');
const exec = require('child-process-promise').exec;

console.log('building lib'.green);

rimraf('./lib')
.then((error) => {
    const babelCli = 'babel --optional es7.objectRestSpread ./src --out-dir ./lib';
    return exec(babelCli).fail((error) => {
        console.log(colors.red(error));
    });
})
.then(() => console.log('lib built'.green));
