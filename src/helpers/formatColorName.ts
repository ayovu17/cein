export function formatColorName(name: string) {
  return name?.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ') ?? ''
}
