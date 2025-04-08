import { Redirect } from 'expo-router';

const RootScreen = () => {
    return (
        <Redirect href="/products" />
    );
}

export default RootScreen;