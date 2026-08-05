function Header() {
  return (
    <header className="mb-10">
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            Trader Risk Dashboard
          </h1>

          <p className="mt-2 text-gray-400">
            Monitor your account health and trading performance.
          </p>
        </div>

        <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-5 py-3">
          <p className="text-sm text-green-400">
            Account Status
          </p>

          <h2 className="text-2xl font-bold text-green-300">
            SAFE
          </h2>
        </div>

      </div>
    </header>
  );
}

export default Header;