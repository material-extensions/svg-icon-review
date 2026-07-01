import { glob } from 'glob';
import isGlob from 'is-glob';
import { Config, generatePreview } from '../../core/index.js';
import { printHelp } from './printHelp.js';

const printResults = async (filePatterns: string[], config: Config) => {
  const iconFileNames = [];
  for (const filePattern of filePatterns) {
    const globFiles = isGlob(filePattern)
      ? await glob(filePattern)
      : [filePattern];

    iconFileNames.push(...globFiles);
  }

  if (iconFileNames.length === 0) {
    console.error('⚠️ No files found. Please check your file pattern.');
    printHelp();
    return;
  }

  await generatePreview(iconFileNames, config);
};

export { printResults };
