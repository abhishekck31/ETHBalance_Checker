"use client"

export function GoogleTranslateIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>

      {/* Main green rounded rectangle */}
      <path
        d="M3 4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16V4Z"
        fill="url(#greenGradient)"
      />

      {/* White "G" letter */}
      <path
        d="M9.5 6C7.567 6 6 7.567 6 9.5C6 11.433 7.567 13 9.5 13C10.54 13 11.456 12.54 12.08 11.82H9.5V10.3H13.7C13.76 10.63 13.8 10.97 13.8 11.32C13.8 12.85 12.73 14.8 9.5 14.8C6.74 14.8 4.5 12.56 4.5 9.8C4.5 7.04 6.74 4.8 9.5 4.8C10.9 4.8 12.01 5.37 12.83 6.24L11.71 7.36C11.2 6.82 10.42 6.4 9.5 6.4V6Z"
        fill="white"
        transform="scale(0.8) translate(1.5, 1.5)"
      />

      {/* Gray document background */}
      <path
        d="M10 7C10 6.44772 10.4477 6 11 6H20C20.5523 6 21 6.44772 21 7V20C21 20.5523 20.5523 21 20 21H11C10.4477 21 10 20.5523 10 20V7Z"
        fill="#e5e7eb"
      />

      {/* Chinese/Japanese characters representation */}
      <g fill="#6b7280">
        {/* Character strokes */}
        <rect x="12" y="9" width="7" height="1" rx="0.5" />
        <rect x="12" y="11" width="5" height="1" rx="0.5" />
        <rect x="15" y="8" width="1" height="6" rx="0.5" />
        <rect x="12" y="13" width="7" height="1" rx="0.5" />

        {/* Second character */}
        <rect x="12" y="16" width="4" height="1" rx="0.5" />
        <rect x="17" y="16" width="2" height="1" rx="0.5" />
        <rect x="14" y="15" width="1" height="4" rx="0.5" />
        <rect x="12" y="18" width="7" height="1" rx="0.5" />
      </g>
    </svg>
  )
}
