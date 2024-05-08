import { createElement, HTMLAttributes, ReactNode } from 'react';

export const Typography = ({
  children,
  classes = '',
  component = 'span',
  variant,
  ...rest
}: TypographyProps) => {
  let fontProps = 'text-base';
  let variantClasses = '';

  switch (component) {
    case 'h1':
      fontProps = 'text-4xl font-semibold text-heading';
      break;
    case 'h2':
      fontProps = 'text-3xl font-semibold text-heading';
      break;
    case 'h3':
      fontProps = 'text-2xl font-semibold text-heading';
      break;
    case 'h4':
      fontProps = 'text-xl font-semibold text-heading';
      break;
    case 'h5':
      fontProps = 'text-lg font-semibold text-heading';
      break;
    case 'h6':
      fontProps = 'text-base font-semibold text-heading';
      break;
    case 'blockquote':
      fontProps = 'my-7 pl-4 font-medium italic text-layer-3 border-l-4 border-layer3';
      break;
    default:
      break;
  }

  if (variant !== undefined) {
    switch (variant) {
      case 'large':
        variantClasses = 'text-lg font-semibold';
        break;
      case 'small':
        variantClasses = 'text-sm font-medium leading-none';
        break;
      case 'muted':
        variantClasses = 'text-sm text-slate-400';
        break;
      default:
        break;
    }
  }

  return createElement(
    component,
    {
      className: `${fontProps} ${variantClasses} ${classes}`.trim(),
      ...rest,
    },
    children
  );
};

export type ComponentProps =
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'blockquote'
  | 'div';

export type VariantProps = 'large' | 'small' | 'muted';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  classes?: string;
  component?: ComponentProps;
  variant?: VariantProps;
}
