import minimist from 'minimist';
import { Config } from '../core/index.js';
import { printHelp } from './commands/printHelp.js';
import { printResults } from './commands/printResults.js';
import { printVersion } from './commands/printVersion.js';
import { CliFlags, flags } from './config/flags.js';

const run = async () => {
  const args = minimist<Partial<CliFlags & Config>>(
    process.argv.slice(2),
    flags
  );

  if (args.version) {
    printVersion();
    return;
  }
  if (args.help) {
    printHelp();
    return;
  }

  await printResults(args._, {
    debug: args.debug ?? false,
    silent: args.silent ?? false,
    bigIcon: args.bigIcon ?? false,
    noSandbox: args.noSandbox ?? false,
  });
};

try {
  run();
} catch (error) {
  console.log(error);
  throw error;
}
