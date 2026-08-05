function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">

      {/* Header */}
      <div className="h-10 w-64 rounded-lg bg-slate-700" />

      {/* Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-36 rounded-2xl bg-slate-800"
          />
        ))}
      </div>

      {/* Large Sections */}
      <div className="h-80 rounded-2xl bg-slate-800" />

      <div className="h-80 rounded-2xl bg-slate-800" />

      <div className="h-96 rounded-2xl bg-slate-800" />

    </div>
  );
}

export default LoadingSkeleton;