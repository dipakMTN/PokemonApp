export interface FilterController {
    types: Array<{ name: string }>;
    selectedType: string;
    handleSelectType: (type: string) => void;
    handleCancelPressed: () => void;
  }
  