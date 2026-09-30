export default function Paperclip({ className = "" }) {
  return (
    <svg className={`paperclip ${className}`} viewBox="-2 -2 24 64" width="22" height="60" aria-hidden="true">
      <path
        d="M6 18 V46 a4 4 0 0 0 8 0 V10 a7 7 0 0 0 -14 0 V48 a10 10 0 0 0 20 0 V16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
