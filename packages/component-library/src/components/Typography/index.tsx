import { createElement, HTMLAttributes, ReactNode } from 'react';

export const Typography = ({
  children,
  classes = '',
  component = 'span',
  variant,
  ...rest
}: TypographyProps) => {
  let fontSize = 'text-base';
  let variantClasses = '';

  switch (component) {
    case 'h1':
      fontSize = 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl';
      break;
    case 'h2':
      fontSize = 'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0';
      break;
    case 'h3':
      fontSize = 'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight';
      break;
    case 'h4':
      fontSize = 'scroll-m-20 text-xl font-semibold tracking-tight';
      break;
    case 'h5':
      fontSize = 'scroll-m-20 text-lg font-semibold tracking-tight';
      break;
    case 'h6':
      fontSize = 'scroll-m-20 text-md font-semibold tracking-tight';
      break;
    case 'p':
      fontSize = 'leading-7 [&:not(:first-child)]:mt-6';
      break;
    case 'blockquote':
      fontSize = 'mt-6 border-l-2 pl-6 italic';
      break;
    case 'span':
      fontSize = 'leading-7 [&:not(:first-child)]:mt-6';
      break;
    case 'div':
      fontSize = 'leading-7 [&:not(:first-child)]:mt-6';
      break;
    default:
      fontSize = 'leading-7 [&:not(:first-child)]:mt-6';
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
      className: `${fontSize} ${variantClasses} ${classes}`,
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
