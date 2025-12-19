import clsx from 'clsx'

interface HeartIconProps {
  isFill?: boolean
}

export function HeartIcon({ isFill = false }: HeartIconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={clsx('stroke-neutral-900', isFill && 'stroke-red-500 fill-red-500')} d="M7 11.8125C7 11.8125 1.3125 8.75 1.3125 5.14062C1.3125 4.35741 1.62363 3.60627 2.17745 3.05245C2.73127 2.49863 3.48241 2.1875 4.26562 2.1875C5.50102 2.1875 6.55922 2.8607 7 3.9375C7.44078 2.8607 8.49898 2.1875 9.73438 2.1875C10.5176 2.1875 11.2687 2.49863 11.8225 3.05245C12.3764 3.60627 12.6875 4.35741 12.6875 5.14062C12.6875 8.75 7 11.8125 7 11.8125Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}
