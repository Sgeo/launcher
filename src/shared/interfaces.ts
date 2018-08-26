import { IAppConfigData } from "./config/IAppConfigData";
import { IGameInfo } from "./game/interfaces";

export interface IMainWindowExternal {
  /**
   * Launch a LaunchBox Game (using its settings)
   * (WARNING: This will run an arbitrary program file with arbitrary arguments)
   * @param game
   */
  launchGameSync(game: IGameInfo): void;

  /** Get the config object (sync) */
  getConfigSync(): IAppConfigData;

  /** ask the main to resend the log-data-update event */
  resendLogDataUpdate(): void;

  /** Get the OS name */
  platform: NodeJS.Platform;

  // -- Window functions --

  /** Minimize the window */
  minimize(): void;

  /** Maximize the window (or un-maximize if already maximized) */
  maximize(): void;

  /** Close the window */
  close(): void;

  /** Wrapper of Electron.dialog.showOpenDialog() */
  showOpenDialog(options: Electron.OpenDialogOptions, callback?: ElectronOpenDialogCallback): string[]|undefined;
  
  /** Wrapper of fs.existsSync() */
  existsSync(path: string): boolean;
}

/** Callback for Electron.dialog.showOpenDialog */
export type ElectronOpenDialogCallback = (filePaths?: string[], bookmarks?: string[]) => void;
