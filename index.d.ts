import Promise = require('pinkie-promise');

declare function findUp(filename: string, options?: findUp.Options): Promise<string>;
declare namespace findUp {
  export function sync(filename: string, options?: Options): string;

  export interface Options {
    /**
     * Directory to start from.
     * Default to `process.cwd()`
     */
    cwd: string;
  }
}

export = findUp;
