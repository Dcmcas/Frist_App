import { View } from 'react-native';
import { useRouter } from 'expo-router';

import { Button, FormField, Link } from '../../ui';

import { useAuth } from '@hooks/auth';
import { useForm } from '@hooks/ui';

import { ContainerProps } from '@interfaces/ui';

import { colors, spacing } from '@styles/theme';
import { globalStyles } from '@styles/global';

export const LoginForm = ({ style }: ContainerProps) => {
    const router = useRouter();

    const { form, isSubmitting, setFieldValue, asyncSubmit } = useForm({ email: '', password: '' });
    const { signIn } = useAuth();

    const handleSubmit = () => {
        asyncSubmit(signIn);
    }

    return (
        <View style={[ globalStyles.formContainer, style ]}>
            <FormField 
                editable={ !isSubmitting }
                label="Correo:"
                placeholder="Escribe su correo"
                keyboardType="email-address"
                value={ form.email }
                onChangeText={ (text) => setFieldValue('email', text) }
                placeholderTextColor={ colors.gray }
            />

            <FormField
                editable={ !isSubmitting }
                label="Contraseña:"
                placeholder="Escriba su contraseña"
                secureTextEntry
                value={ form.password }
                onChangeText={ (text) => setFieldValue('password', text) }
                placeholderTextColor={ colors.gray }
                style={{ marginBottom: spacing.md }}
            />

            <Button 
                isLoading={ isSubmitting }
                disabled={ isSubmitting }
                onPress={ handleSubmit }
                text="Iniciar Sesión"
            />

            <Link 
                actionText="aquí"
                onPress={ () => router.push('/auth/register') }
                text="¿No tienes cuenta? Crea una"
            />
        </View>
    );
}