import type { Command } from 'commander';

import { applyAsyncActionProjectDir } from './utils/applyAsyncAction';

export default function (program: Command) {
  applyAsyncActionProjectDir(
    program
      .command('bundle [path]')
      .description('Experimental: Bundle the JavaScript and assets for offline usage')
      .helpGroup('internal')
      // .helpGroup('core')
      .option('-c, --clear', 'Clear the bundler cache')
      .option(
        '--bundle-output <path>',
        'File path to generate the JS bundle. Ex: ./dist/ios/index.jsbundle'
      )
      .option(
        '--sourcemap-output <path>',
        'Folder path to store sourcemaps referenced in the bundle'
      )
      .option('--assets-output <path>', 'Folder path to store assets referenced in the bundle')
      .option('-p, --platform <ios|android>', 'Platform [ios|android]')
      .option('--dev', 'Bundle in development mode')
      .option(
        '--entry-file <path>',
        'Path to the initial file, either absolute or relative to project root'
      )
      .option(
        '--max-workers <number>',
        'Maximum number of tasks to allow the bundler to spawn.',
        parseInt
      ),

    () => import('./bundleAsync')
  );
}
