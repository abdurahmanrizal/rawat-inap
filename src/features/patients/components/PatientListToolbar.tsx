import { Input } from "@/components/common/Input";
import SortButton from "@/components/common/SortButton";
import type {
  PatientSortField,
  PatientSortOrder,
} from "@/features/patients/types/patient";
import { ArrowDownIcon, ArrowUpIcon, SearchIcon, XIcon } from "lucide-react";
import { useCallback, useMemo } from "react";

const SORT_OPTIONS = [
  { field: "name" as const, label: "Nama" },
  { field: "admissionDate" as const, label: "Tanggal" },
] as const;

interface PatientListToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  sortField: PatientSortField;
  sortOrder: PatientSortOrder;
  onSortChange: (field: PatientSortField) => void;
}

export function PatientListToolbar({
  search,
  onSearchChange,
  sortField,
  sortOrder,
  onSortChange,
}: PatientListToolbarProps) {
  const handleClearSearch = useCallback(() => {
    onSearchChange("");
  }, [onSearchChange]);

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onSearchChange(event.target.value);
    },
    [onSearchChange],
  );

  const sortIcon = useMemo(
    () =>
      sortOrder === "asc" ? (
        <ArrowDownIcon className="w-4 h-4" />
      ) : (
        <ArrowUpIcon className="w-4 h-4" />
      ),
    [sortOrder],
  );
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full lg:max-w-sm">
        <Input
          icon={<SearchIcon className="w-4 h-4" />}
          endIcon={search ? <XIcon className="w-4 h-4" /> : undefined}
          onEndIconClick={handleClearSearch}
          value={search}
          onChange={handleSearchChange}
          placeholder="Cari nama atau NIK..."
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {SORT_OPTIONS.map(({ field, label }) => (
          <SortButton
            key={field}
            active={sortField === field}
            onClick={() => onSortChange(field)}
            label={label}
            icon={sortField === field ? sortIcon : undefined}
          />
        ))}
      </div>
    </div>
  );
}
