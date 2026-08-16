import { MinersLogo } from "@/components/brand/logo";

export function AboutBridgeVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[500px] py-6 sm:py-8 lg:mr-0 lg:py-0" aria-label="Miners connects learning with real software experience">
      <div className="relative min-h-[350px] sm:min-h-[390px] lg:min-h-[430px]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 430" fill="none" aria-hidden="true">
          <path
            d="M45 159 C132 159 166 183 205 209"
            stroke="#5B3DF5"
            strokeOpacity="0.3"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <path
            d="M296 219 C338 244 372 270 456 270"
            stroke="#5B3DF5"
            strokeOpacity="0.3"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <path
            d="M86 197 L178 197"
            stroke="#5B3DF5"
            strokeOpacity="0.18"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M334 306 L442 306"
            stroke="#5B3DF5"
            strokeOpacity="0.18"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute left-0 top-[4.5rem] sm:left-3 sm:top-[5.25rem] lg:top-[6rem]">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-indigoElectric">01</p>
          <p className="mt-2 text-[0.95rem] font-semibold uppercase tracking-[0.18em] text-ink">Learning</p>
          <div className="mt-5 space-y-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ink/38">
            <p>Knowledge</p>
            <p>Practice</p>
          </div>
        </div>

        <div className="absolute left-1/2 top-[49%] grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-indigoElectric/14 bg-white/82 shadow-sm backdrop-blur-sm sm:h-40 sm:w-40">
          <div className="text-center">
            <MinersLogo variant="symbol" className="mx-auto h-24 w-24 sm:h-28 sm:w-28" />
            <p className="mt-2 text-[0.66rem] font-bold uppercase tracking-[0.22em] text-indigoElectric">Miners</p>
          </div>
        </div>

        <div className="absolute bottom-[4.25rem] right-0 text-right sm:right-2 sm:bottom-[4.75rem] lg:bottom-[5.25rem]">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-indigoElectric">02</p>
          <p className="mt-2 text-[0.95rem] font-semibold uppercase tracking-[0.18em] text-ink">Real Experience</p>
          <div className="mt-5 space-y-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ink/38">
            <p>Projects</p>
            <p>Collaboration</p>
            <p>Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}
