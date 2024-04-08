interface ButtonProps {
    cor?: 'green'|'blue'|'gray'
    className?: string
    children: any
    onClick?: () =>void

}



export default function Button(props: ButtonProps){

    const cor = props.cor ?? 'gray'

    return (
        <button 
        onClick={props.onClick}
        className={`
        bg-gradient-to-r from-${cor}-300 to-${cor}-600
        text-white rounded-md
        px-4 py-2
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}