import { LoadingSpinner } from "@/components/LoadingSpinner";

export default function Loading() {
  return (
    <div className="grid w-full h-screen bg-very-dark-grey place-content-center">
      <LoadingSpinner />
    </div>
  );
}
