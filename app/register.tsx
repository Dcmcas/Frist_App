import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useRouter } from "expo-router";

import { Button, FormField, Link, Title } from "@/src/components/ui";

import { globalStyles } from "@styles/global";
import { colors, spacing } from "@styles/theme";

const RegisterScreen = () => {
    const [registerForm, setRegisterForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const router = useRouter();

    const setFieldValue = (field: keyof typeof registerForm, value: string) => {
        setRegisterForm({
            ...registerForm,
            [field]: value,
        });
    };

    const handleSubmit = () => {
        if (registerForm.password !== registerForm.confirmPassword) {
            console.log("Las contraseñas no coinciden");
        } else {
            console.log(registerForm);
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={globalStyles.scrollScreen}
                overScrollMode="never"
            >
                <Title>
                    Registrarse
                </Title>

                <View style={{ flex: 1, gap: spacing.sm, marginTop: spacing.lg * 1 }}>
                    <FormField
                        label="Nombre:"
                        placeholder="Escribe tu nombre"
                        value={registerForm.firstName}
                        onChangeText={(text) => setFieldValue("firstName", text)}
                        placeholderTextColor={colors.gray}
                    />

                    <FormField
                        label="Apellido:"
                        placeholder="Escribe tu apellido"
                        value={registerForm.lastName}
                        onChangeText={(text) => setFieldValue("lastName", text)}
                        placeholderTextColor={colors.gray}
                    />

                    <FormField
                        label="Correo:"
                        placeholder="Escribe tu correo"
                        keyboardType="email-address"
                        value={registerForm.email}
                        onChangeText={(text) => setFieldValue("email", text)}
                        placeholderTextColor={colors.gray}
                    />

                    <FormField
                        label="Contraseña:"
                        placeholder="Escribe tu contraseña"
                        secureTextEntry
                        value={registerForm.password}
                        onChangeText={(text) => setFieldValue("password", text)}
                        placeholderTextColor={colors.gray}
                    />

                    <FormField
                        label="Confirmar contraseña:"
                        placeholder="Repite tu contraseña"
                        secureTextEntry
                        value={registerForm.confirmPassword}
                        onChangeText={(text) => setFieldValue("confirmPassword", text)}
                        placeholderTextColor={colors.gray}
                        style={{ marginBottom: spacing.md }}
                    />

                    <Button text="Registrarse" onPress={handleSubmit} />

                    <Link
                        actionText="aquí"
                        onPress={ () => router.navigate('/') }
                        text="¿Ya tienes cuenta? Ingresa"
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;
