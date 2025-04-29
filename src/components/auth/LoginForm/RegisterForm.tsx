import { View } from 'react-native';
import { useRouter } from 'expo-router';

import { Button, FormField, Link, Title } from '../../ui';

import { useAuth } from '@hooks/auth';
import { useForm } from '@hooks/ui';

import { ContainerProps } from '@interfaces/ui';

import { colors, spacing } from '@styles/theme';
import { globalStyles } from '@styles/global';
import React from 'react';

export const RegisterForm = ({ style }: ContainerProps) => {
    const router = useRouter();

    const { form, isSubmitting, setFieldValue, asyncSubmit, clearForm } = useForm({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { signUp } = useAuth();
    const [error, setError] = React.useState<string | null>(null);

    const handleSubmit = async () => {
        setError(null);
        if (form.password !== form.confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }
        await asyncSubmit(async (values) => {
            // Modificación: signUp devuelve true si fue exitoso, false si hubo error
            const result = await signUp({ fullName: values.fullName, email: values.email, password: values.password });
            if (result === true) {
                clearForm();
                alert('Usuario registrado con éxito');
                router.replace('/auth/login');
            }
            // Si hubo error, el mensaje ya fue mostrado por signUp
        });
    }

    return (
        <View style={[globalStyles.formContainer, style]}>
            <FormField
                editable={!isSubmitting}
                label="Nombre completo:"
                placeholder="Escribe tu nombre completo"
                value={form.fullName}
                onChangeText={(text) => setFieldValue('fullName', text)}
                placeholderTextColor={colors.gray}
            />

            <FormField
                editable={!isSubmitting}
                label="Correo:"
                placeholder="Escribe tu correo"
                keyboardType="email-address"
                value={form.email}
                onChangeText={(text) => setFieldValue('email', text)}
                placeholderTextColor={colors.gray}
            />

            <FormField
                editable={!isSubmitting}
                label="Contraseña:"
                placeholder="Escribe tu contraseña"
                secureTextEntry
                value={form.password}
                onChangeText={(text) => setFieldValue('password', text)}
                placeholderTextColor={colors.gray}
            />

            <FormField
                editable={!isSubmitting}
                label="Confirmar contraseña:"
                placeholder="Repite tu contraseña"
                secureTextEntry
                value={form.confirmPassword}
                onChangeText={(text) => setFieldValue('confirmPassword', text)}
                placeholderTextColor={colors.gray}
                style={{ marginBottom: spacing.md }}
            />
            {error && (
                <View style={{ marginBottom: spacing.sm }}>
                    <Title style={{ color: colors.red, fontSize: 14, textAlign: 'center' }}>{error}</Title>
                </View>
            )}

            <Button
                isLoading={isSubmitting}
                disabled={isSubmitting}
                onPress={handleSubmit}
                text="Registrarse"
            />

            <Link
                actionText="aquí"
                onPress={() => router.push('/auth/login')}
                text="¿Ya tienes cuenta? Inicia sesión"
            />
        </View>
    );
}
