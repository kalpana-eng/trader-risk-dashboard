import Header from "../components/Header/Header";
import AccountOverview from "../components/AccountOverview/AccountOverview";

function Dashboard() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white">

      <div className="mx-auto max-w-7xl space-y-10 px-6 py-8">

        <Header />

        <AccountOverview />

      </div>

    </main>
  );
}

export default Dashboard;