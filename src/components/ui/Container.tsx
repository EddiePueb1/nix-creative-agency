import { ReactNode, ElementType } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
}

export function Container({ 
  children, 
  className = "", 
  as: Component = "div",
  id
}: ContainerProps) {
  return (
    <Component id={id} className={`max-w-7xl mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </Component>
  );
}
