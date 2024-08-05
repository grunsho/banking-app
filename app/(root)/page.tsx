import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Álvaro', lastName: 'Manterola', email: 'alvaro.manterola@gmail.com' }

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Bienvenido,"
            user={loggedIn?.firstName || "Guest"}
            subtext="Accede y gestiona tus cuentas y transacciones de manera eficiente.
"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={75250}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123400 }, { currentBalance: 0 }]}
      />
    </section>
  )
}

export default Home