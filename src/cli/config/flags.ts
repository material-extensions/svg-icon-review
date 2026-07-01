import minimist from 'minimist';
import { Config } from '../../core/index.js';

export type CliFlags = {
  version?: boolean;
  help?: boolean;
  debug?: boolean;
  silent?: boolean;
  bigIcon?: boolean;
  noSandbox?: boolean;
};

const flags: minimist.Opts | undefined = {
  boolean: [
    'version',
    'help',
    'debug',
    'silent',
    'bigIcon',
    'noSandbox',
  ] satisfies (keyof (CliFlags & Config))[],
  alias: {
    v: 'version',
    h: 'help',
    d: 'debug',
    s: 'silent',
    b: 'bigIcon',
    n: 'noSandbox',
  },
  unknown: (a) => true,
  default: { lang: 'en' },
  '--': true,
  stopEarly: true,
};

export { flags };
