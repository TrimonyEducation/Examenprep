import z from 'zod';

// login validation schema
export const loginValidation = z.object({
    email: z.string().email({message: "Dit is geen geldig e-mailadres."}),
    password: z.string().min(6, {
        message: "Dit wachtwoord is te kort.",
    }),
});

// register validation schema
export const registerValidation = z.object({
    email: z.string().email({message: "Dit is geen geldig e-mailadres."}),
    password: z.string().min(6, {message: "Dit wachtwoord is te kort."}),
    password_confirmation: z.string().min(6 , {message: "Dit wachtwoord is te kort."}),
});

// reset password validation schema
export const resetPasswordValidation = z.object({
    password: z.string().min(6),
    password_confirmation: z.string().min(6),
});

// forgot password validation schema
export const forgotPasswordValidation = z.object({
    email: z.string().email(),
});
