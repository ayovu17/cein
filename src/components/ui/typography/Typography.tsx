import clsx from 'clsx'

type TypographyVariant
  = 'text-900'
    | 'text-600'
    | 'text-500'
    | 'text-400'
    | 'text-300'
    | 'text-100'
    | 'text-100cap'
type TypographyColor = 'white' | 'black' | 'gray'
type TypographyTag = 'h1' | 'h2' | 'div' | 'p' | 'span'

type TypographyProps = React.ComponentProps<Exclude<TypographyTag, 'span'>> & {
  variant: TypographyVariant
  color?: TypographyColor
  tag?: TypographyTag
  children: React.ReactNode
}

export function Typography({
  variant,
  color = 'black',
  tag: Tag = 'div',
  className,
  children,
  ...props
}: TypographyProps) {
  const variantClass = clsx(
    variant === 'text-900' && 'text-(length:--text900) leading-(--leading900)',
    variant === 'text-600' && 'text-(length:--text600) leading-(--leading600)',
    variant === 'text-500' && 'text-(length:--text500) leading-(--leading500)',
    variant === 'text-400' && 'text-(length:--text400) leading-(--leading400)',
    variant === 'text-300' && 'text-(length:--text300) leading-(--leading300)',
    variant === 'text-100' && 'text-(length:--text100) leading-(--leading100)',
    variant === 'text-100cap' && 'text-(length:--text100cap) leading-(--leading100cap)',
  )
  const colorClass = clsx(
    color === 'white' && 'text-neutral-100',
    color === 'black' && 'text-neutral-900',
    color === 'gray' && 'text-neutral-500',
  )
  const cn = clsx(
    variantClass,
    colorClass,
    className,
  )

  return (
    <Tag className={cn} {...props}>
      {children}
    </Tag>
  )
}
