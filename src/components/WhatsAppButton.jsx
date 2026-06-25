export default function WhatsAppButton({ wa, message, children, className, target = '_blank' }) {
  const href = wa ? `https://wa.me/${wa}?text=${encodeURIComponent(message)}` : '#'
  return (
    <a href={href} target={target} rel="noopener" className={className}>
      {children}
    </a>
  )
}
