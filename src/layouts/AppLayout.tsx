import { ListIcon, PlusIcon } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  {
    to: "/pasien-masuk",
    label: "Pasien Masuk",
    icon: <PlusIcon className="w-4 h-4" />,
  },
  {
    to: "/pasien-aktif",
    label: "Pasien Aktif",
    icon: <ListIcon className="w-4 h-4" />,
  },
];

export function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-8">
        <header className="rounded-3xl bg-[#4f8800] px-6 py-8 text-white shadow-soft md:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                <img
                  src="https://nuha.care/images/svg/logo.svg"
                  alt="nuha care logo"
                  className="h-6 w-[100px] object-contain"
                />
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Rawat Inap
              </h1>
            </div>

            <nav className="flex flex-wrap gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "rounded-2xl px-4 py-3 text-sm font-medium transition flex gap-2",
                      isActive
                        ? "bg-white text-slate-900 shadow-sm"
                        : "bg-white/10 text-white hover:bg-white/15",
                    ].join(" ")
                  }
                >
                  {item.icon && (
                    <div className="flex items-center">{item.icon}</div>
                  )}
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        <main className="mt-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
