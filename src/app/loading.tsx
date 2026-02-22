export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-warmgray-50">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Logo */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-warmgray-200" />
          <div className="absolute inset-0 rounded-full border-4 border-t-saffron-500 animate-spin" />
        </div>
        <p className="font-heading text-xl text-charcoal">Anubhav</p>
        <p className="text-sm text-warmgray-500 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
