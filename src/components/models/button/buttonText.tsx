interface ButtonTextProps {
    text: string
}

export function ButtonText ({ text }: ButtonTextProps) {
    return (
        <p className='text-sm leading-relaxed text-zinc-600 dark:text-zinc-100'>
            {text}
        </p>
    )
}