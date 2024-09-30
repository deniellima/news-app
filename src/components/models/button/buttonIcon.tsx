import { ElementType } from "react"

interface ButtonIconProps {
    icon: ElementType
}

export function ButtonIcon ({ icon: Icon }: ButtonIconProps) {
    return (
        <Icon className='w-6 h-6 text-zinc-800 dark:text-zinc-200 mt-3' />
    )
}