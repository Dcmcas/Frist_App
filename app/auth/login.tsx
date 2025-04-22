import React from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

import { LoginForm } from "@/src/components/auth";
import { Title } from "@/src/components/ui";

import { globalStyles } from "@styles/global";

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={ globalStyles.scrollScreen }
                overScrollMode="never"
            >
                 <Title style={{ textAlign: 'center', marginTop: 100 }}>
                    Iniciar Sesión
                </Title>

                <LoginForm style={{ marginTop: 50 }} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;