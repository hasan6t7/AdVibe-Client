import { Link} from "react-router";

export default function FourOFour() {
  
  return (
    <>
      <section className="grid min-h-screen place-items-center  px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-[#ed3849]">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance  sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-[#ed3849] sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-[#ed3849] px-3.5 py-2.5 text-sm font-semibold  shadow-xs hover:bg-[#d23141] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d23141] text-white"
            >
              Go back home
            </Link>
            <Link href="/contact" className="text-sm font-semibold ">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
