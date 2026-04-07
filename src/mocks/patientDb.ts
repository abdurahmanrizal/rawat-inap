import type { Patient } from '@/features/patients/types/patient';

let patients: Patient[] = [
  {
    id: 'P001',
    name: 'Andi Saputra',
    nik: '3174012301900001',
    diagnosis: 'Demam Berdarah',
    admissionDate: '2026-04-03',
    doctor: 'dr. Rina Maharani, Sp.PD',
    room: 'Mawar 101',
    createdAt: 171246000001,
  },
  {
    id: 'P002',
    name: 'Budi Hartono',
    nik: '3174011402880002',
    diagnosis: 'Pneumonia',
    admissionDate: '2026-04-05',
    doctor: 'dr. Fajar Nugroho, Sp.P',
    room: 'Anggrek 203',
    createdAt: 171246000002,
  },
  {
    id: 'P003',
    name: 'Citra Lestari',
    nik: '3174012709950003',
    diagnosis: 'Typhoid Fever',
    admissionDate: '2026-04-02',
    doctor: 'dr. Siska Rahmawati, Sp.PD',
    room: 'Tulip 110',
    createdAt: 171246000003,
  },
  {
    id: 'P004',
    name: 'Dewi Ananda',
    nik: '3174011811990004',
    diagnosis: 'Gastroenteritis',
    admissionDate: '2026-04-06',
    doctor: 'dr. Hendra Kurniawan, Sp.PD',
    room: 'Melati 305',
    createdAt: 171246000004,
  },
  {
    id: 'P005',
    name: 'Eko Prasetyo',
    nik: '3174010903870005',
    diagnosis: 'Vertigo',
    admissionDate: '2026-04-01',
    doctor: 'dr. Nadia Permata, Sp.S',
    room: 'Kenanga 208',
    createdAt: 171246000005,
  },
  {
    id: 'P006',
    name: 'Farah Nabila',
    nik: '3174011112940006',
    diagnosis: 'Asma Eksaserbasi',
    admissionDate: '2026-04-04',
    doctor: 'dr. Yoga Pranata, Sp.P',
    room: 'Mawar 102',
    createdAt: 171246000006,
  },
];

export function getPatientsFromDb(): Patient[] {
  return [...patients];
}

export function insertPatient(patient: Patient): Patient {
  patients = [patient, ...patients];
  return patient;
}
