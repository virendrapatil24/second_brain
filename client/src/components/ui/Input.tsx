interface InputProps {
    placeholder?: string;
    reference?: any;
}

const Input = ({ placeholder, reference }: InputProps) => {
    return (
        <div className="px-2">
            <input
                placeholder={placeholder}
                ref={reference}
                type="text"
                className="w-full my-2 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent">
            </input>
        </div>
    )
}

export default Input