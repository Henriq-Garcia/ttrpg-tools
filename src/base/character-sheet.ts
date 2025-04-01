export abstract class CharacterSheet {
    abstract systemName(): string;
    abstract render(): HTMLElement;
}