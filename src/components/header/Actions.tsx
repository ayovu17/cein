import { BagIcon, Button, HeartIcon, SearchIcon, Typography, UserIcon } from '@/components'

export function Actions() {
  return (
    <div className="flex gap-2.5 lg:gap-4.5">
      <Button variant="icon" icon={SearchIcon} />
      <Button variant="text" size="sm" to="/" className="hidden lg:flex">Stores</Button>
      <Button variant="icon" icon={UserIcon} className="hidden lg:flex" />
      <div className="flex items-center">
        <Button variant="icon" icon={HeartIcon} />
        <Typography variant="text-300" tag="span" className="pt-0.5 pointer-events-none">0</Typography>
      </div>
      <div className="flex items-center">
        <Button variant="icon" icon={BagIcon} />
        <Typography variant="text-300" tag="span" className="pt-0.5 pointer-events-none">2</Typography>
      </div>
    </div>
  )
}
