const label = ({ children, className = "", ...props }) => {
    return (
        <label 
            className={`${className} block text-slate-800`}
            {...props}
        >
            {children}
        </label>
    );
}

export default label;