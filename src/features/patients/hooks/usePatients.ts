import { useCallback, useEffect, useState } from 'react';
import { createPatient, fetchPatients } from '@/features/patients/api/patientApi';
import type { Patient, PatientFormInput } from '@/features/patients/types/patient';

interface UsePatientsResult {
  patients: Patient[];
  isLoading: boolean;
  isSubmitting: boolean;
  createNewPatient: (payload: PatientFormInput) => Promise<Patient>;
  reloadPatients: () => Promise<void>;
}

export function usePatients(): UsePatientsResult {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const reloadPatients = useCallback(async () => {
    setIsLoading(true);
    const response = await fetchPatients();
    setPatients(response);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    void reloadPatients();
  }, [reloadPatients]);

  const createNewPatient = useCallback(async (payload: PatientFormInput) => {
    setIsSubmitting(true);
    const createdPatient = await createPatient(payload);
    setPatients((prev) => [createdPatient, ...prev]);
    setIsSubmitting(false);
    return createdPatient;
  }, []);

  return {
    patients,
    isLoading,
    isSubmitting,
    createNewPatient,
    reloadPatients,
  };
}
