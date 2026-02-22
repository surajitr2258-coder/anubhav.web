import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center max-w-lg">
        <h1 className="font-heading text-[120px] md:text-[180px] font-bold leading-none text-warmgray-200">
          404
        </h1>
        <h2 className="font-heading text-heading-lg text-charcoal mt-4">
          Page Not Found
        </h2>
        <p className="text-body-lg text-warmgray-600 mt-4 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
