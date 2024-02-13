import React from 'react'

const MarketingLayout = ({
    children
}: {
    children : React.ReactNode;
}) => {
  return (
    <div className='h-screen bg-slate-100'>
        {/* Navbar */}
        <main className='pt-40 pb-20 bg-slate-100'>
            {children}
        </main>
        {/* Footer */}
    </div>
  )
}

export default MarketingLayout