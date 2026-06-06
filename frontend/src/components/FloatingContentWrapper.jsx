export default function FloatingContentWrapper({ children, className = "" }) {
  return <div className={`floating-content-wrapper w-full ${className}`.trim()}>{children}</div>;
}
