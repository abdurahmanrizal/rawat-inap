import { getPatientsFromDb, insertPatient } from '@/mocks/patientDb';
import type { Patient, PatientFormInput } from '@/features/patients/types/patient';

const API_DELAY_MS = 500;

function delay<T>(value: T, duration = API_DELAY_MS): Promise<T> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(value), duration);
  });
}

function buildPatientId(currentLength: number): string {
  return `P${String(currentLength + 1).padStart(3, '0')}`;
}

export async function fetchPatients(): Promise<Patient[]> {
  return delay(getPatientsFromDb());
}

export async function createPatient(payload: PatientFormInput): Promise<Patient> {
  const existingPatients = getPatientsFromDb();
  const newPatient: Patient = {
    id: buildPatientId(existingPatients.length),
    name: payload.name.trim(),
    nik: payload.nik.trim(),
    diagnosis: payload.diagnosis.trim(),
    admissionDate: payload.admissionDate,
    doctor: payload.doctor.trim(),
    room: payload.room.trim(),
    createdAt: Date.now(),
  };

  insertPatient(newPatient);
  return delay(newPatient);
}
