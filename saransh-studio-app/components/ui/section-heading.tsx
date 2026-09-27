
export default function SectionHeading({ label, title }: { label: string, title: string }) {
  return (
    <div className='text-center mb-16'>
      <p className='text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4'>{label}</p>
      <h2 className='text-3xl md:text-5xl font-serif font-light text-neutral-100'>{title}</h2>
    </div>
  )
}
