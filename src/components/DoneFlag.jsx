export default function DoneFlag({ size = 'md' }) {
  const isLarge = size === 'lg'

  return (
    <div
      className={`absolute top-0 left-0 overflow-hidden pointer-events-none z-30 ${
        isLarge ? 'w-[128px] h-[128px] rounded-tl-none' : 'w-[92px] h-[92px] rounded-tl-xl'
      }`}
      aria-label="Ride completed"
    >
      <span
        className={`absolute block text-center font-display text-white rotate-[-45deg] ${
          isLarge
            ? 'top-[28px] -left-[38px] w-[168px] py-1.5 text-sm tracking-[0.32em]'
            : 'top-[20px] -left-[32px] w-[128px] py-1 text-[10px] tracking-[0.28em]'
        }`}
        style={{
          background: 'linear-gradient(180deg, var(--accent-light) 0%, var(--accent) 100%)',
          boxShadow: '0 6px 14px color-mix(in srgb, var(--accent) 45%, transparent)',
        }}
      >
        DONE
      </span>
      <span
        className="absolute top-0 left-0 w-2 h-2 opacity-40"
        style={{ backgroundColor: 'color-mix(in srgb, black 35%, var(--accent))' }}
      />
    </div>
  )
}
