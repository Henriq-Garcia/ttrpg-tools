import { Plugin } from "obsidian";
import { ITTRPGTollsConfig } from "./interfaces/plugin-config";

export const DEFAULT_SETTINGS: ITTRPGTollsConfig = {
  defaultLanguage: "en",
  allowHomebrew: false
};

export default class TTRPGToolsPlugin extends Plugin {
  settings?: ITTRPGTollsConfig;

  async onload(): Promise<void> {
    await this.loadSettings();
  }

  async onunload(): Promise<void> {
  }

  async loadSettings(): Promise<void> {
    const loadedData = await this.loadData();
    this.settings = Object.assign({}, DEFAULT_SETTINGS, loadedData);
  }

  async saveSettings(): Promise<void> {
    await this.saveData(this.settings);
  }
}
