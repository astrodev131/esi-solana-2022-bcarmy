import * as React from "react"

export const NavigationMenu = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <div className={`hidden md:flex items-center justify-center ${className}`} ref={ref} {...props}>
        {children}
      </div>
    )
  },
)
NavigationMenu.displayName = "NavigationMenu"

export const NavigationMenuItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <li className={`inline-flex items-center justify-center ${className}`} ref={ref} {...props}>
        {children}
      </li>
    )
  },
)
NavigationMenuItem.displayName = "NavigationMenuItem"

export const NavigationMenuList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <ul className={`flex space-x-2 ${className}`} ref={ref} {...props}>
        {children}
      </ul>
    )
  },
)
NavigationMenuList.displayName = "NavigationMenuList"

