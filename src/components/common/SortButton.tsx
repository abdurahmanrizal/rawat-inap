interface SortButtonProps {
  active: boolean;
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

function SortButton({ active, label, onClick, icon }: SortButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-xl border px-3 py-2 text-sm transition flex gap-2",
        active
          ? "border-slate-900 bg-slate-900 text-white"
          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
      ].join(" ")}
    >
      {label}
      {icon && <div className="flex items-center">{icon}</div>}
    </button>
  );
}

export default SortButton;
