import type { InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

const inputClassName =
  'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100';

const inputWithIconClassName = 'pl-12';

const wrapperClassName = 'relative';

const iconWrapperClassName = 'absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none';

const inputWithEndIconClassName = 'pr-12';

const endIconWrapperClassName = 'absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  endIcon?: ReactNode;
  onEndIconClick?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ icon, endIcon, onEndIconClick, className, ...props }, ref) => {
  const inputClasses = `${inputClassName}${icon ? ` ${inputWithIconClassName}` : ''}${endIcon ? ` ${inputWithEndIconClassName}` : ''}${className ? ` ${className}` : ''}`;

  if (icon || endIcon) {
    return (
      <div className={wrapperClassName}>
        {icon && <span className={iconWrapperClassName}>{icon}</span>}
        <input ref={ref} className={inputClasses} {...props} />
        {endIcon && (
          <span className={endIconWrapperClassName} onClick={onEndIconClick} role="button" tabIndex={0}>
            {endIcon}
          </span>
        )}
      </div>
    );
  }

  return <input ref={ref} className={inputClasses} {...props} />;
});

Input.displayName = 'Input';
