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

            {/* 
                Aquí lo que falta es definir la propiedad disabled en el componente Button para 
                deshabilitarlo cuando el formulario se esta enviando.
            */}

            {/* 
                Voy mostrarte como subir los cambios a github se necesita de tres comandos:

                git add: este es para agregar los cambios, si se usa el . se puede agregar todos los cambios, si queremos hacerlo
                por grupos o carpetas en vez del . se agrega la ruta de la carpeta o archivo.

                git commit: este es para hacer el commit de los cambios, se le pasa un mensaje de lo que se hizo.

                git push: este es para subir los cambios a github.

                Ahora intenta hacer eso siguiendo esto que te explique.
            */}

            <Button 
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