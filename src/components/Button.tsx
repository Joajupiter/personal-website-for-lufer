import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  className?: string;
}

export function Button({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  icon,
  className = '' 
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-[#4D0C28]
        text-white 
        font-['Urbanist'] 
        font-extrabold 
        rounded-[18px]
        px-8 
        py-5 
        flex 
        items-center 
        justify-center 
        gap-4
        transition-all 
        duration-300
        hover:opacity-90
        hover:scale-[1.03]
        shadow-md
        ${className}
      `}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}