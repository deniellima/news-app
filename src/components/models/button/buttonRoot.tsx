import { ReactNode } from "react"

interface ButtonRootProps {
    children: ReactNode
}

export function ButtonRoot({ children }: ButtonRootProps) {
    return (
        <button className='px-4 h-12 rounded bg-violet-700 hover:bg-violet-800'>
            {children}
        </button>
    )
}