import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  PropsWithChildren,
  ReactElement
} from 'react'

export type Rainbow = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet'

type AsProp<C extends ElementType> = {
  as?: C
}

type PropsToOmit<C extends ElementType, Props> = keyof (AsProp<C> & Props)

type TextProps = {
  color?: Rainbow | 'black'
}

type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref']
type Props<C extends ElementType, P> = PolymorphicComponentPropsWithoutRef<C, P>

type PolymorphicComponentPropsWithoutRef<C extends ElementType, Props = {}> =
  PropsWithChildren<Props & AsProp<C>>
  & Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

type PolymorphicComponentPropsWithRef<C extends ElementType, P> =
  PolymorphicComponentPropsWithoutRef<C, P>
  & { ref?: PolymorphicRef<C> }

type TextComponent = <C extends ElementType> (props: Props<C, PolymorphicComponentPropsWithRef<C, TextProps>>) => ReactElement | null

export const Text: TextComponent = forwardRef(<C extends ElementType = 'span'>({
  as, color, children, style, ...restProps
}: Props<C, TextProps>, ref?: PolymorphicRef<C>) => {
  const Component = as ?? 'span'
  const internalStyles = color ? { style: { ...style, color } } : {}

  return <Component {...restProps} {...internalStyles} ref={ref}>{children}</Component>
})

