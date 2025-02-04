/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Arguments} from 'yargs';
import {ReportOptions} from 'istanbul-reports';

export type Path = string;

export type Glob = string;

export type HasteConfig = {
  computeSha1?: boolean;
  defaultPlatform?: string | null | undefined;
  hasteImplModulePath?: string;
  platforms?: Array<string>;
  providesModuleNodeModules: Array<string>;
  throwOnModuleCollision?: boolean;
};

export type ReporterConfig = [string, Record<string, unknown>];
export type TransformerConfig = [string, Record<string, unknown>];

export type ConfigGlobals = Record<string, any>;

export type DefaultOptions = {
  automock: boolean;
  bail: number;
  browser: boolean;
  cache: boolean;
  cacheDirectory: Path;
  changedFilesWithAncestor: boolean;
  clearMocks: boolean;
  collectCoverage: boolean;
  collectCoverageFrom: Array<string> | null | undefined;
  coverageDirectory: string | null | undefined;
  coveragePathIgnorePatterns: Array<string>;
  coverageReporters: Array<string>;
  coverageThreshold:
    | {
        global: {
          [key: string]: number;
        };
      }
    | null
    | undefined;
  dependencyExtractor: string | null | undefined;
  errorOnDeprecated: boolean;
  expand: boolean;
  filter: Path | null | undefined;
  forceCoverageMatch: Array<Glob>;
  globals: ConfigGlobals;
  globalSetup: string | null | undefined;
  globalTeardown: string | null | undefined;
  haste: HasteConfig;
  maxWorkers: number | string;
  maxConcurrency: number;
  moduleDirectories: Array<string>;
  moduleFileExtensions: Array<string>;
  moduleNameMapper: {
    [key: string]: string;
  };
  modulePathIgnorePatterns: Array<string>;
  noStackTrace: boolean;
  notify: boolean;
  notifyMode: string;
  preset: string | null | undefined;
  prettierPath: string | null | undefined;
  projects: Array<string | ProjectConfig> | null | undefined;
  resetMocks: boolean;
  resetModules: boolean;
  resolver: Path | null | undefined;
  restoreMocks: boolean;
  rootDir: Path | null | undefined;
  roots: Array<Path> | null | undefined;
  runner: string;
  runTestsByPath: boolean;
  setupFiles: Array<Path>;
  setupFilesAfterEnv: Array<Path>;
  skipFilter: boolean;
  snapshotSerializers: Array<Path>;
  testEnvironment: string;
  testEnvironmentOptions: Record<string, any>;
  testFailureExitCode: string | number;
  testLocationInResults: boolean;
  testMatch: Array<Glob>;
  testPathIgnorePatterns: Array<string>;
  testRegex: Array<string>;
  testResultsProcessor: string | null | undefined;
  testRunner: string | null | undefined;
  testSequencer: string;
  testURL: string;
  timers: 'real' | 'fake';
  transform:
    | {
        [regex: string]: Path | TransformerConfig;
      }
    | null
    | undefined;
  transformIgnorePatterns: Array<Glob>;
  watchPathIgnorePatterns: Array<string>;
  useStderr: boolean;
  verbose: boolean | null | undefined;
  watch: boolean;
  watchman: boolean;
};

export type DisplayName =
  | string
  | {
      name: string;
      color: DisplayNameColor;
    };

export type InitialOptions = {
  shouldMapperReturnString?: Boolean
  automock?: boolean;
  bail?: boolean | number;
  browser?: boolean;
  cache?: boolean;
  cacheDirectory?: Path;
  clearMocks?: boolean;
  changedFilesWithAncestor?: boolean;
  changedSince?: string;
  collectCoverage?: boolean;
  collectCoverageFrom?: Array<Glob>;
  collectCoverageOnlyFrom?: {
    [key: string]: boolean;
  };
  coverageDirectory?: string;
  coveragePathIgnorePatterns?: Array<string>;
  coverageReporters?: Array<string>;
  coverageThreshold?: {
    global: {
      [key: string]: number;
    };
  };
  dependencyExtractor?: string;
  detectLeaks?: boolean;
  detectOpenHandles?: boolean;
  displayName?: DisplayName;
  expand?: boolean;
  extraGlobals?: Array<string>;
  filter?: Path;
  findRelatedTests?: boolean;
  forceCoverageMatch?: Array<Glob>;
  forceExit?: boolean;
  json?: boolean;
  globals?: ConfigGlobals;
  globalSetup?: string | null | undefined;
  globalTeardown?: string | null | undefined;
  haste?: HasteConfig;
  reporters?: Array<string | ReporterConfig>;
  logHeapUsage?: boolean;
  lastCommit?: boolean;
  listTests?: boolean;
  mapCoverage?: boolean;
  maxConcurrency?: number;
  maxWorkers: number | string;
  moduleDirectories?: Array<string>;
  moduleFileExtensions?: Array<string>;
  moduleLoader?: Path;
  moduleNameMapper?: {
    [key: string]: string;
  };
  modulePathIgnorePatterns?: Array<string>;
  modulePaths?: Array<string>;
  name?: string;
  noStackTrace?: boolean;
  notify?: boolean;
  notifyMode?: string;
  onlyChanged?: boolean;
  outputFile?: Path;
  passWithNoTests?: boolean;
  preprocessorIgnorePatterns?: Array<Glob>;
  preset?: string | null | undefined;
  prettierPath?: string | null | undefined;
  projects?: Array<Glob>;
  replname?: string | null | undefined;
  resetMocks?: boolean;
  resetModules?: boolean;
  resolver?: Path | null | undefined;
  restoreMocks?: boolean;
  rootDir: Path;
  roots?: Array<Path>;
  runner?: string;
  runTestsByPath?: boolean;
  scriptPreprocessor?: string;
  setupFiles?: Array<Path>;
  setupTestFrameworkScriptFile?: Path;
  setupFilesAfterEnv?: Array<Path>;
  silent?: boolean;
  skipFilter?: boolean;
  skipNodeResolution?: boolean;
  snapshotResolver?: Path;
  snapshotSerializers?: Array<Path>;
  errorOnDeprecated?: boolean;
  testEnvironment?: string;
  testEnvironmentOptions?: Record<string, any>;
  testFailureExitCode?: string | number;
  testLocationInResults?: boolean;
  testMatch?: Array<Glob>;
  testNamePattern?: string;
  testPathDirs?: Array<Path>;
  testPathIgnorePatterns?: Array<string>;
  testRegex?: string | Array<string>;
  testResultsProcessor?: string | null | undefined;
  testRunner?: string;
  testSequencer?: string;
  testURL?: string;
  testTimeout?: number;
  timers?: 'real' | 'fake';
  transform?: {
    [regex: string]: Path | TransformerConfig;
  };
  transformIgnorePatterns?: Array<Glob>;
  watchPathIgnorePatterns?: Array<string>;
  unmockedModulePathPatterns?: Array<string>;
  updateSnapshot?: boolean;
  useStderr?: boolean;
  verbose?: boolean | null | undefined;
  watch?: boolean;
  watchAll?: boolean;
  watchman?: boolean;
  watchPlugins?: Array<string | [string, Record<string, any>]>;
};

export type SnapshotUpdateState = 'all' | 'new' | 'none';

type NotifyMode =
  | 'always'
  | 'failure'
  | 'success'
  | 'change'
  | 'success-change'
  | 'failure-change';

/**
 * Hard coding this until
 * https://github.com/chalk/chalk/pull/336
 * gets merged
 */
type DisplayNameColor =
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'white'
  | 'gray'
  | 'grey'
  | 'blackBright'
  | 'redBright'
  | 'greenBright'
  | 'yellowBright'
  | 'blueBright'
  | 'magentaBright'
  | 'cyanBright'
  | 'whiteBright'
  | 'bgBlack'
  | 'bgRed'
  | 'bgGreen'
  | 'bgYellow'
  | 'bgBlue'
  | 'bgMagenta'
  | 'bgCyan'
  | 'bgWhite'
  | 'bgBlackBright'
  | 'bgRedBright'
  | 'bgGreenBright'
  | 'bgYellowBright'
  | 'bgBlueBright'
  | 'bgMagentaBright'
  | 'bgCyanBright'
  | 'bgWhiteBright';

type CoverageThreshold = {
  [path: string]: {
    [key: string]: number;
  };
  global: {
    [key: string]: number;
  };
};

export type GlobalConfig = {
  bail: number;
  changedSince: string;
  changedFilesWithAncestor: boolean;
  collectCoverage: boolean;
  collectCoverageFrom: Array<Glob>;
  collectCoverageOnlyFrom:
    | {
        [key: string]: boolean;
      }
    | null
    | undefined;
  coverageDirectory: string;
  coveragePathIgnorePatterns?: Array<string>;
  coverageReporters: Array<keyof ReportOptions>;
  coverageThreshold: CoverageThreshold;
  detectLeaks: boolean;
  detectOpenHandles: boolean;
  enabledTestsMap:
    | {
        [key: string]: {
          [key: string]: boolean;
        };
      }
    | null
    | undefined;
  expand: boolean;
  extraGlobals: Array<string>;
  filter: Path | null | undefined;
  findRelatedTests: boolean;
  forceExit: boolean;
  json: boolean;
  globalSetup: string | null | undefined;
  globalTeardown: string | null | undefined;
  lastCommit: boolean;
  logHeapUsage: boolean;
  listTests: boolean;
  maxConcurrency: number;
  maxWorkers: number;
  noStackTrace: boolean;
  nonFlagArgs: Array<string>;
  noSCM: boolean | null | undefined;
  notify: boolean;
  notifyMode: NotifyMode;
  outputFile: Path | null | undefined;
  onlyChanged: boolean;
  onlyFailures: boolean;
  passWithNoTests: boolean;
  projects: Array<Glob>;
  replname: string | null | undefined;
  reporters: Array<string | ReporterConfig>;
  runTestsByPath: boolean;
  rootDir: Path;
  silent: boolean;
  skipFilter: boolean;
  errorOnDeprecated: boolean;
  testFailureExitCode: number;
  testNamePattern: string;
  testPathPattern: string;
  testResultsProcessor: string | null | undefined;
  testSequencer: string;
  testTimeout: number;
  updateSnapshot: SnapshotUpdateState;
  useStderr: boolean;
  verbose: boolean | null | undefined;
  watch: boolean;
  watchAll: boolean;
  watchman: boolean;
  watchPlugins:
    | Array<{
        path: string;
        config: Record<string, any>;
      }>
    | null
    | undefined;
};

export type ProjectConfig = {
  automock: boolean;
  browser: boolean;
  cache: boolean;
  cacheDirectory: Path;
  clearMocks: boolean;
  coveragePathIgnorePatterns: Array<string>;
  cwd: Path;
  dependencyExtractor?: string;
  detectLeaks: boolean;
  detectOpenHandles: boolean;
  displayName?: DisplayName;
  errorOnDeprecated: boolean;
  extraGlobals: Array<keyof NodeJS.Global>;
  filter: Path | null | undefined;
  forceCoverageMatch: Array<Glob>;
  globalSetup: string | null | undefined;
  globalTeardown: string | null | undefined;
  globals: ConfigGlobals;
  haste: HasteConfig;
  moduleDirectories: Array<string>;
  moduleFileExtensions: Array<string>;
  moduleLoader: Path;
  moduleNameMapper: Array<[string, string]>;
  modulePathIgnorePatterns: Array<string>;
  modulePaths: Array<string>;
  name: string;
  prettierPath: string;
  resetMocks: boolean;
  resetModules: boolean;
  resolver: Path | null | undefined;
  restoreMocks: boolean;
  rootDir: Path;
  roots: Array<Path>;
  runner: string;
  setupFiles: Array<Path>;
  setupFilesAfterEnv: Array<Path>;
  skipFilter: boolean;
  skipNodeResolution: boolean;
  snapshotResolver: Path | null | undefined;
  snapshotSerializers: Array<Path>;
  testEnvironment: string;
  testEnvironmentOptions: Record<string, any>;
  testMatch: Array<Glob>;
  testLocationInResults: boolean;
  testPathIgnorePatterns: Array<string>;
  testRegex: Array<string>;
  testRunner: string;
  testURL: string;
  timers: 'real' | 'fake';
  transform: Array<[string, Path, Record<string, unknown>]>;
  transformIgnorePatterns: Array<Glob>;
  watchPathIgnorePatterns: Array<string>;
  unmockedModulePathPatterns: Array<string> | null | undefined;
  shouldMapperReturnString: Boolean;
};

export type Argv = Arguments<
  Partial<{
    all: boolean;
    automock: boolean;
    bail: boolean | number;
    browser: boolean;
    cache: boolean;
    cacheDirectory: string;
    changedFilesWithAncestor: boolean;
    changedSince: string;
    ci: boolean;
    clearCache: boolean;
    clearMocks: boolean;
    collectCoverage: boolean;
    collectCoverageFrom: string;
    collectCoverageOnlyFrom: Array<string>;
    color: boolean;
    colors: boolean;
    config: string;
    coverage: boolean;
    coverageDirectory: string;
    coveragePathIgnorePatterns: Array<string>;
    coverageReporters: Array<string>;
    coverageThreshold: string;
    debug: boolean;
    env: string;
    expand: boolean;
    findRelatedTests: boolean;
    forceExit: boolean;
    globals: string;
    globalSetup: string | null | undefined;
    globalTeardown: string | null | undefined;
    haste: string;
    init: boolean;
    json: boolean;
    lastCommit: boolean;
    logHeapUsage: boolean;
    maxWorkers: number | string;
    moduleDirectories: Array<string>;
    moduleFileExtensions: Array<string>;
    moduleNameMapper: string;
    modulePathIgnorePatterns: Array<string>;
    modulePaths: Array<string>;
    noStackTrace: boolean;
    notify: boolean;
    notifyMode: string;
    onlyChanged: boolean;
    outputFile: string;
    preset: string | null | undefined;
    projects: Array<string>;
    prettierPath: string | null | undefined;
    resetMocks: boolean;
    resetModules: boolean;
    resolver: string | null | undefined;
    restoreMocks: boolean;
    rootDir: string;
    roots: Array<string>;
    runInBand: boolean;
    setupFiles: Array<string>;
    setupFilesAfterEnv: Array<string>;
    showConfig: boolean;
    silent: boolean;
    snapshotSerializers: Array<string>;
    testEnvironment: string;
    testFailureExitCode: string | null | undefined;
    testMatch: Array<string>;
    testNamePattern: string;
    testPathIgnorePatterns: Array<string>;
    testPathPattern: Array<string>;
    testRegex: string | Array<string>;
    testResultsProcessor: string | null | undefined;
    testRunner: string;
    testSequencer: string;
    testURL: string;
    testTimeout: number | null | undefined;
    timers: string;
    transform: string;
    transformIgnorePatterns: Array<string>;
    unmockedModulePathPatterns: Array<string> | null | undefined;
    updateSnapshot: boolean;
    useStderr: boolean;
    verbose: boolean | null | undefined;
    version: boolean;
    watch: boolean;
    watchAll: boolean;
    watchman: boolean;
    watchPathIgnorePatterns: Array<string>;
  }>
>;
