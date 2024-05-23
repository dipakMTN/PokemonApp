import { useCallback } from "react";
import { FilterController } from "./filter.types";
import { useNavigation } from "@react-navigation/native";

export const useFilterController = (): FilterController => {
    const navigation = useNavigation<any>();

    const handleCancelPressed = useCallback(() => {
        navigation.goBack();
    }, [navigation])

    return {handleCancelPressed}
}