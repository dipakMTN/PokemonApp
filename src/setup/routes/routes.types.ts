import { StackNavigationProp } from "@react-navigation/stack";
import { RouteNames } from "@/utils/route_names";
import { RouteProp } from "@react-navigation/native";

export type NavigatorParamsList = {
    [RouteNames.HomeScreen]: undefined;
    [RouteNames.FilterScreen]: undefined;
  };
  
  export type NavigationProps = StackNavigationProp<NavigatorParamsList>;
  
  export type AuthRouteProp<T extends keyof NavigatorParamsList> = RouteProp<
    NavigatorParamsList,
    T
  >;
  