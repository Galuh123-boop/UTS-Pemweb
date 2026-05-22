interface InputTextProps {
    label: string;
    name: string;
    error?: string;
    register: any;
    type?: string;
    placeholder?: string;
}

export const InputText: React.FC<InputTextProps> = ({
    label,
    name,
    error,
    register,
    type= "text",
    placeholder
}) => {
    return (
        <div className="flex flex-col gap-1 mb-3">
            <label className="font-medium">{label}</label>
            <input 
                type={type}
                {...register(name)}
                placeholder={placeholder} 
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};