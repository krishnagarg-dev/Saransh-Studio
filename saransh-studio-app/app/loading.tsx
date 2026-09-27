export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-neutral-950">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="h-8 w-8 border-2 border-neutral-600 border-t-white rounded-full animate-spin"></div>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Saransh Studio</p>
      </div>
    </div>
  );
}
