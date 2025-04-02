import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useRouter } from 'expo-router';

import { Button, FormField, Link, Title } from "@/src/components/ui";

import { globalStyles } from "@styles/global";
import { colors, spacing } from "@styles/theme";

const HomeScreen = () => {
    const [ loginForm, setLoginForm ] = useState({ email: '', password: '' });
    const router = useRouter();

    const setFieldValue = (field: keyof typeof loginForm, value: string) => {
        setLoginForm({
            ...loginForm,
            [field]: value
        });
    }

    const handleSubmit = () => {
        console.log(loginForm);
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={ globalStyles.scrollScreen }
                overScrollMode="never"
            >
                <Title>
                    Iniciar Sesión
                </Title>

                <View style={{ flex: 1, gap: spacing.sm, marginTop: spacing.lg * 2 }}>
                    <FormField 
                        label="Correo:"
                        placeholder="Escribe su correo"
                        keyboardType="email-address"
                        value={ loginForm.email }
                        onChangeText={ (text) => setFieldValue('email', text) }
                        placeholderTextColor={ colors.gray }
                    />

                    <FormField 
                        label="Contraseña:"
                        placeholder="Escriba su contraseña"
                        secureTextEntry
                        value={ loginForm.password }
                        onChangeText={ (text) => setFieldValue('password', text) }
                        placeholderTextColor={ colors.gray }
                        style={{ marginBottom: spacing.md }}
                    />

                    <Button 
                        text="Iniciar Sesión"
                        onPress={ handleSubmit }
                    />

                    <Link 
                        actionText="aquí"
                        onPress={ () => router.push('/register') }
                        text="¿No tienes cuenta? Crea una"
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default HomeScreen;