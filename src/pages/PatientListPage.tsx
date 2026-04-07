import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmptyState } from "@/components/common/EmptyState";
import { LoadingState } from "@/components/common/LoadingState";
import { PageSection } from "@/components/common/PageSection";
import { Button } from "@/components/common/Button";
import { Pagination } from "@/features/patients/components/Pagination";
import { PatientListToolbar } from "@/features/patients/components/PatientListToolbar";
import { PatientTable } from "@/features/patients/components/PatientTable";
import { usePatients } from "@/features/patients/hooks/usePatients";
import type {
  Patient,
  PatientSortField,
  PatientSortOrder,
} from "@/features/patients/types/patient";
import { PlusIcon } from "lucide-react";

const PAGE_SIZE = 5;

function sortPatients(
  items: Patient[],
  field: PatientSortField,
  order: PatientSortOrder,
): Patient[] {
  const sorted = [...items].sort((left, right) => {
    if (field === "name") {
      return left.name.localeCompare(right.name, "id", { sensitivity: "base" });
    }

    return (
      new Date(left.admissionDate).getTime() -
      new Date(right.admissionDate).getTime()
    );
  });

  return order === "asc" ? sorted : sorted.reverse();
}

export function PatientListPage() {
  const navigate = useNavigate();
  const { patients, isLoading } = usePatients();
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [sortField, setSortField] = useState<PatientSortField>("admissionDate");
  const [sortOrder, setSortOrder] = useState<PatientSortOrder>("desc");

  const filteredPatients = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    const result = patients.filter((patient) => {
      if (!keyword) {
        return true;
      }

      return (
        patient.name.toLowerCase().includes(keyword) ||
        patient.nik.includes(keyword)
      );
    });

    return sortPatients(result, sortField, sortOrder);
  }, [patients, search, sortField, sortOrder]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPatients.length / PAGE_SIZE),
  );

  const paginatedPatients = useMemo(() => {
    const startIndex = (page - 1) * PAGE_SIZE;
    return filteredPatients.slice(startIndex, startIndex + PAGE_SIZE);
  }, [filteredPatients, page]);

  useEffect(() => {
    setPage(1);
  }, [search, sortField, sortOrder]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  function handleSortChange(field: PatientSortField): void {
    if (field === sortField) {
      setSortOrder((previous) => (previous === "asc" ? "desc" : "asc"));
      return;
    }

    setSortField(field);
    setSortOrder(field === "name" ? "asc" : "desc");
  }

  return (
    <PageSection
      title="Daftar Pasien Aktif"
      action={
        <Button
          onClick={() => navigate("/pasien-masuk")}
          className="flex gap-2 !bg-primary !text-white"
        >
          <div className="flex items-center">
            <PlusIcon className="h-4 w-4" />
          </div>
          Tambah Pasien
        </Button>
      }
    >
      <div className="space-y-6">
        <PatientListToolbar
          search={search}
          onSearchChange={setSearch}
          sortField={sortField}
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
        />

        {isLoading ? (
          <LoadingState message="Memuat data pasien..." />
        ) : filteredPatients.length === 0 ? (
          <EmptyState
            title="Data pasien tidak ditemukan"
            description="Coba ubah kata kunci pencarian atau tambahkan pasien baru melalui formulir pasien masuk."
          />
        ) : (
          <>
            <PatientTable patients={paginatedPatients} />
            <Pagination
              page={page}
              totalPages={totalPages}
              onPrevious={() =>
                setPage((previous) => Math.max(1, previous - 1))
              }
              onNext={() =>
                setPage((previous) => Math.min(totalPages, previous + 1))
              }
            />
          </>
        )}
      </div>
    </PageSection>
  );
}
