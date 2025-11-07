// components/page-shell.tsx (class-based width version)
type PageShellProps = {
  children: React.ReactNode;
  right?: React.ReactNode;
  left?: React.ReactNode;
  maxWidthClass?: string; // defaults to 1100px
};

export default function PageShell({
  children,
  right,
  left,
  maxWidthClass = "max-w-[1100px]",
}: PageShellProps) {
  return (
    <div className="w-full">
      <div className={`grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,1fr)_1fr] gap-x-8`}>
        <div className="hidden lg:block">{left}</div>
        <div className={`px-4 sm:px-5 md:px-6 mx-auto w-full ${maxWidthClass}`}>{children}</div>
        <div className="hidden lg:block">{right}</div>
      </div>
    </div>
  );
}
