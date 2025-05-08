import { StyleProp, ViewStyle } from 'react-native';

export interface ContainerProps {
    style?: StyleProp<ViewStyle>;
}

export interface LoadOptions {
    refresh?: boolean;
}