import { Redirect } from 'expo-router';

const RootScreen = () => {
    return (
        <Redirect href="/auth/login" />
    );
}

export default RootScreen;