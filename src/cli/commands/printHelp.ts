const printHelp = () => {
  return console.log(
    `
  Usage
    $ npx svg-icon-review mySvgFile.svg anotherSvgFile.svg

  Usage with glob pattern
    $ npx svg-icon-review ./icons/*.svg

  Options
    --bigIcons, -b  Show big icons in front of the small icons
    --debug, -d  Show generated HTML
    --help, -h  Show help
    --silent, -s  Not showing any output
    --version, -v  Show version
    --noSandbox, -n  Run without using a sandbox
    `
  );
};

export { printHelp };
