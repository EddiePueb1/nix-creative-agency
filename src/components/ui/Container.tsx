import { ReactNode, ElementType } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Container({ 
  children, 
  className = "", 
  as: Component = "div" 
}: ContainerProps) {
  return (
    <Component className={`max-w-7xl mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </Component>
  );
}
