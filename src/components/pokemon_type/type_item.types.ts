
/**
 * Props for the TypeItem component.
 * 
 * @typedef {Object} TypeItemProps
 * @property {string} name - The name of the pokemon type.
 * @property {boolean} isSelected - Determines whether the pokemon type is selected.
 * @property {(name: string) => void} onSelect - Function to call when new pokemon type is selected.
 */

export interface TypeItemProps {
    name: string;
    isSelected: boolean;
    onSelect: (name: string) => void;
}