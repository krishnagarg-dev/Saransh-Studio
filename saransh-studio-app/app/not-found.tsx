import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">404 Error</p>
      <h1 className="text-5xl font-serif mb-6">Page Not Found</h1>
      <p className="text-neutral-400 text-sm max-w-md mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Button href="/">Return Home</Button>
    </div>
  );
}
