import { CharacterSheet } from "../../base/character-sheet";

export class DnDCharacterSheet extends CharacterSheet {
    sheet: {}

    constructor(data: any) {
        super();
        this.sheet = {}
    }

    render(): HTMLElement {
        const element = document.createElement('div');
        return element;
    }
    
    systemName(): string {
        return 'D&D 5E';
    }
}