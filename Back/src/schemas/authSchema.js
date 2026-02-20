import z from 'zod'

export const registerSchema = z.object({
    username: z.string().min(4).max(20),
    password: z.string().min(4).max(10),
})

export const loginSchema = z.object({
    username: z.string().min(4).max(20),
    password: z.string().min(4).max(10),
})
