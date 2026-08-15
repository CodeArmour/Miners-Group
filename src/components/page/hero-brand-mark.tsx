import { MinersSymbol } from "@/components/brand/logo";

export function HeroBrandMark() {
  return (
    <>
      <div className="absolute -right-[24vw] bottom-[-11rem] z-0 sm:-right-[16vw] lg:-right-[10vw] lg:bottom-[-16rem]" aria-hidden="true">
        <MinersSymbol className="h-[26rem] w-[26rem] opacity-[0.035] sm:h-[38rem] sm:w-[38rem] lg:h-[52rem] lg:w-[52rem]" title="Decorative Miners symbol" />
      </div>
      <div className="absolute -right-[22vw] bottom-[-9rem] z-0 sm:-right-[14vw] lg:-right-[8vw] lg:bottom-[-14rem]" aria-hidden="true">
        <svg className="h-[26rem] w-[26rem] sm:h-[38rem] sm:w-[38rem] lg:h-[52rem] lg:w-[52rem]" viewBox="0 0 100 100" fill="none">
          <path d="M14 35c0-2.2 1.8-4 4-4h5.2c1.2 0 2.4.5 3.2 1.3l13.7 13.7c1.2 1.2 1.9 2.8 1.9 4.5V88c0 2.2-1.8 4-4 4H18c-2.2 0-4-1.8-4-4V35Z" stroke="#5B3DF5" strokeOpacity="0.08" strokeWidth="1.2" />
          <path d="M86 35c0-2.2-1.8-4-4-4h-5.2c-1.2 0-2.4.5-3.2 1.3L59.9 46c-1.2 1.2-1.9 2.8-1.9 4.5V88c0 2.2 1.8 4 4 4h20c2.2 0 4-1.8 4-4V35Z" stroke="#5B3DF5" strokeOpacity="0.08" strokeWidth="1.2" />
          <path d="M18 8h20.8c1.4 0 2.8.6 3.8 1.6l22.1 22.1c1.5 1.5 1.5 4 0 5.5L53.1 48.8c-1.5 1.5-4 1.5-5.5 0L15.2 16.4C12.8 14 14.5 8 18 8Z" stroke="#5B3DF5" strokeOpacity="0.08" strokeWidth="1.2" />
          <path d="M82 8H61.2c-1.4 0-2.8.6-3.8 1.6L42.9 24.1c-1.5 1.5-1.5 4 0 5.5l11.6 11.6c1.5 1.5 4 1.5 5.5 0l24.8-24.8C87.2 14 85.5 8 82 8Z" stroke="#5B3DF5" strokeOpacity="0.08" strokeWidth="1.2" />
          <path d="M52.8 43.8c1.5-1.5 3.9-1.5 5.4 0l10.6 10.6c1.5 1.5 1.5 3.9 0 5.4L53.4 75.2c-1.9 1.9-4.9 1.9-6.8 0L31.2 59.8c-1.5-1.5-1.5-3.9 0-5.4l10.6-10.6c1.5-1.5 3.9-1.5 5.4 0L50 46.6l2.8-2.8Z" stroke="#5B3DF5" strokeOpacity="0.08" strokeWidth="1.2" />
        </svg>
      </div>
    </>
  );
}
