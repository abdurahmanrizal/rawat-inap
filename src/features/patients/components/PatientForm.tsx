import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  patientSchema,
  type PatientSchemaValues,
} from "@/features/patients/schemas/patientSchema";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { Field } from "@/components/common/Field";

interface PatientFormProps {
  onSubmit: (values: PatientSchemaValues) => Promise<void>;
  isSubmitting: boolean;
}

export function PatientForm({ onSubmit, isSubmitting }: PatientFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PatientSchemaValues>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      name: "",
      nik: "",
      diagnosis: "",
      admissionDate: "",
      doctor: "",
      room: "",
    },
  });

  async function submitHandler(values: PatientSchemaValues): Promise<void> {
    await onSubmit(values);
    reset();
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(event) => void handleSubmit(submitHandler)(event)}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nama Pasien" error={errors.name?.message}>
          <Input {...register("name")} placeholder="Contoh: Siti Aminah" />
        </Field>

        <Field label="NIK" error={errors.nik?.message}>
          <Input
            {...register("nik")}
            maxLength={16}
            placeholder="16 digit NIK"
          />
        </Field>

        <Field label="Diagnosa Masuk" error={errors.diagnosis?.message}>
          <Input
            {...register("diagnosis")}
            placeholder="Contoh: Pneumonia komunitas"
          />
        </Field>

        <Field label="Tanggal Masuk" error={errors.admissionDate?.message}>
          <Input {...register("admissionDate")} type="date" />
        </Field>

        <Field label="Dokter Penanggung Jawab" error={errors.doctor?.message}>
          <Input
            {...register("doctor")}
            placeholder="Contoh: dr. Ahmad, Sp.PD"
          />
        </Field>

        <Field label="Ruangan" error={errors.room?.message}>
          <Input {...register("room")} placeholder="Contoh: Mawar 201" />
        </Field>
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Menyimpan..." : "Simpan Pasien"}
        </button>
        <Button
          type="button"
          onClick={() => reset()}
          disabled={isSubmitting}
          className="disabled:cursor-not-allowed disabled:opacity-70"
        >
          Reset Form
        </Button>
      </div>
    </form>
  );
}
