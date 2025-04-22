import { View } from 'react-native';
import { useRouter } from 'expo-router';

import { Button, FormField, Link } from '../../ui';

import { useAuth } from '@hooks/auth';
import { useForm } from '@hooks/ui';

import { ContainerProps } from '@interfaces/ui';

import { colors, spacing } from '@styles/theme';
import { globalStyles } from '@styles/global';

export const RegisterForm = ({ style }: ContainerProps) => {
    const router = useRouter();

    const { form, isSubmitting, setFieldValue, asyncSubmit } = useForm({
        name: '',
        email: '',
        password: ''
    });
    const { signUp } = useAuth();

    const handleSubmit = () => {
        asyncSubmit(signUp);
    }

    return (
        <View style={[globalStyles.formContainer, style]}>
            <FormField
                editable={!isSubmitting}
                label="Nombre completo:"
                placeholder="Escribe tu nombre"
                value={form.name}
                onChangeText={(text) => setFieldValue('name', text)}
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
                style={{ marginBottom: spacing.md }}
            />

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
