interface ButtonProps {
    label: string;
    type?: "button" | "submit";
    variant?: "primary" | "outline";
    isLoading?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    label,
    type = "submit",
    variant = "primary",
    isLoading = false
}) => {
    const base= "px-4 py-2 rounded font-medium"

    const styles = {
        primary: "bg-red-900 text-white",
        outline: "border border-red-950 text-red-900"
    };

    return (
        <button 
        type = {type}
        disabled = {isLoading}
        className={`${base} ${styles[variant]}`}
        >
        {isLoading ? "Loading..." : label}
        </button>
    );
};