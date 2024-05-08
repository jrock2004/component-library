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
    case 'p':
      fontProps = 'leading-7 [&:not(:first-child)]:mt-6';
      break;
    case 'blockquote':
      fontProps = 'mt-6 border-l-2 pl-6 italic';
      break;
    case 'span':
      fontProps = 'leading-7 [&:not(:first-child)]:mt-6';
      break;
    case 'div':
      fontProps = 'leading-7 [&:not(:first-child)]:mt-6';
      break;
    default:
      fontProps = 'leading-7 [&:not(:first-child)]:mt-6';
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
        variantClasses = '';
    }
  }

  return createElement(
    component,
    {
      className: `${fontProps} ${variantClasses} ${classes}`,
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
