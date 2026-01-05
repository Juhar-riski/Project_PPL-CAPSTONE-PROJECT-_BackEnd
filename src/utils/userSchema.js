import { z } from "zod";

// REGISTER
export const registerSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  nim: z
  .string()
  .regex(/^\d+$/, "NIM harus berupa angka")
  .min(8, "NIM minimal 8 digit"),
  email: z.string().email("Email tidak valid"),

  numberPhone: z
    .string()
    .regex(/^[0-9]+$/, "Nomor HP hanya boleh angka")
    .min(10, "Nomor HP minimal 10 digit")
    .max(15, "Nomor HP maksimal 15 digit"),

  password: z.string().min(4, "Password minimal 4 karakter"),
});

// LOGIN
export const loginSchema = z.object({
  nim: z.coerce.number().int(),
  password: z.string().min(4),
});
