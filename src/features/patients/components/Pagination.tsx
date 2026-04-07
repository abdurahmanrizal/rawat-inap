import { Button } from "@/components/common/Button";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function Pagination({
  page,
  totalPages,
  onPrevious,
  onNext,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-between gap-3 pt-4">
      <p className="text-sm text-slate-500">
        Halaman <span className="font-medium text-slate-800">{page}</span> dari{" "}
        {totalPages}
      </p>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          onClick={onPrevious}
          disabled={page === 1}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Sebelumnya
        </Button>
        <Button
          type="button"
          onClick={onNext}
          disabled={page === totalPages}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Berikutnya
        </Button>
      </div>
    </div>
  );
}
