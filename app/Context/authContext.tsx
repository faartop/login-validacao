import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, 'Usuario obrigatorio'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres')
});


export const authContext = ({ username, password }: { username: string; password: string }) => {
  try {
    loginSchema.parse({ username, password });

    if (password !== '123456') {
      return { isValid: false, message: 'Senha Incorreta.' };
    }

    return { isValid: true, message: '' };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => err.message);
      return { isValid: false, message: errorMessages.join(', ') };
    }
    return { isValid: false, message: 'Erro desconhecido' };
  }
};
