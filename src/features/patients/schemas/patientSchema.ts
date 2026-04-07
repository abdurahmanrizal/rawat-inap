import { z } from "zod";

export const patientSchema = z.object({
  name: z.string().trim().min(1, "Nama pasien wajib diisi."),
  nik: z
    .string()
    .trim()
    .min(1, "NIK wajib diisi.")
    .regex(/^\d{16}$/, "NIK harus terdiri dari 16 digit angka."),
  diagnosis: z.string().trim().min(1, "Diagnosa masuk wajib diisi."),
  admissionDate: z
    .string()
    .min(1, "Tanggal masuk wajib diisi.")
    .refine(
      (date) => new Date(date) <= new Date(),
      "Tanggal masuk maksimal hari ini.",
    ),
  doctor: z.string().trim().min(1, "Dokter penanggung jawab wajib diisi."),
  room: z.string().trim().min(1, "Ruangan wajib diisi."),
});

export type PatientSchemaValues = z.infer<typeof patientSchema>;
