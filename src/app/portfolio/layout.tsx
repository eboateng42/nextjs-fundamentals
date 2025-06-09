export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex">
        <aside className="w-64 border-r">
          <nav>
            <ul>
              <li>API Dev</li>
              <li>Backend Dev</li>
              <li>Software Dev</li>
            </ul>
          </nav>
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
