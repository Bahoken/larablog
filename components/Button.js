const Button = ({ type="submit", className= "", ...props }) => {
    return (
        <button
            type={type}
            className={`${className} p-2 text-white font-semibold rounded-md bg-slate-800`}
            {...props}
        />
    );
}

export default Button;