export interface Patient {
  id: string;
  name: string;
  nik: string;
  diagnosis: string;
  admissionDate: string;
  doctor: string;
  room: string;
  createdAt: number;
}

export interface PatientFormInput {
  name: string;
  nik: string;
  diagnosis: string;
  admissionDate: string;
  doctor: string;
  room: string;
}

export type PatientSortField = 'name' | 'admissionDate';
export type PatientSortOrder = 'asc' | 'desc';
