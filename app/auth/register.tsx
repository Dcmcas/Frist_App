import { KeyboardAvoidingView, ScrollView } from 'react-native';

import { Title } from '@/src/components/ui';
import {  } from '@/src/components/auth';   
import { RegisterForm } from '@/src/components/auth';
import { globalStyles } from '@styles/global';

const RegisterScreen = () => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={globalStyles.scrollScreen}
                overScrollMode="never"
            >
                <Title>
                    Crear Cuenta
                </Title>

                <RegisterForm style={{ marginTop: '40%' }} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;
