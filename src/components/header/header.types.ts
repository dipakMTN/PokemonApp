/**
 * Props for the Header component.
 * 
 * @typedef {Object} HeaderProps
 * @property {string} title - The title text to display in the header.
 * @property {string} iconSymbol - The symbol name of the icon to display.
 * @property {() => void} onIconPress - Function to call when the icon is pressed.
 */

export default interface HeaderProps {
    title: string;
    iconSymbol: string;
    onIconPress: () => void
}