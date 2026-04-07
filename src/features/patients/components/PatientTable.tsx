import type { ReactNode } from "react";
import type { Patient } from "@/features/patients/types/patient";

interface PatientTableProps {
  patients: Patient[];
}

function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export function PatientTable({ patients }: PatientTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              <HeaderCell>Nama</HeaderCell>
              <HeaderCell>NIK</HeaderCell>
              <HeaderCell>Diagnosa Masuk</HeaderCell>
              <HeaderCell>Tanggal Masuk</HeaderCell>
              <HeaderCell>Dokter</HeaderCell>
              <HeaderCell>Ruangan</HeaderCell>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-slate-50">
                <BodyCell strong>{patient.name}</BodyCell>
                <BodyCell>{patient.nik}</BodyCell>
                <BodyCell>{patient.diagnosis}</BodyCell>
                <BodyCell>{formatDate(patient.admissionDate)}</BodyCell>
                <BodyCell>{patient.doctor}</BodyCell>
                <BodyCell>{patient.room}</BodyCell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function HeaderCell({ children }: { children: ReactNode }) {
  return (
    <th className="px-4 py-3 text-left font-semibold text-slate-600">
      {children}
    </th>
  );
}

function BodyCell({
  children,
  strong = false,
}: {
  children: ReactNode;
  strong?: boolean;
}) {
  return (
    <td
      className={`px-4 py-4 ${strong ? "font-medium text-slate-900" : "text-slate-600"}`}
    >
      {children}
    </td>
  );
}
