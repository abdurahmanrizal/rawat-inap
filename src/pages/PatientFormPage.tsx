import { useNavigate } from "react-router-dom";
import { PageSection } from "@/components/common/PageSection";
import { Button } from "@/components/common/Button";
import { PatientForm } from "@/features/patients/components/PatientForm";
import { usePatients } from "@/features/patients/hooks/usePatients";
import type { PatientSchemaValues } from "@/features/patients/schemas/patientSchema";

export function PatientFormPage() {
  const navigate = useNavigate();
  const { createNewPatient, isSubmitting } = usePatients();

  async function handleSubmit(values: PatientSchemaValues): Promise<void> {
    await createNewPatient(values);
    navigate("/pasien-aktif");
  }

  return (
    <PageSection
      title="Formulir Pasien Masuk"
      action={
        <Button onClick={() => navigate("/pasien-aktif")}>
          Lihat Daftar Pasien
        </Button>
      }
    >
      <PatientForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </PageSection>
  );
}
