
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <aside className="w-64 bg-white border-r h-screen hidden md:block">
          <div className="p-4 font-bold">Saransh Studio CMS</div>
          <nav className="mt-6">
            <a href="/admin/dashboard" className="block p-4 hover:bg-gray-100">Dashboard</a>
          </nav>
        </aside>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  )
}

