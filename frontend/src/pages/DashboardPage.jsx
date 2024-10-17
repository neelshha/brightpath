import React from 'react'

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
  {/* Sidebar */}
  <Sidebar />

  {/* Main content */}
  <div className="flex-1 flex flex-col">
    <Header />
    <main className="flex-1 p-6 bg-gray-100 overflow-auto">
      {/* This will render the selected page content */}
      <PageContent />
    </main>
    <Footer />
  </div>
</div>

  )
}

export default DashboardPage