const input = ({className = "", ...props}) => {
    return (
        <input 
            className={`${className} rounded-md outline-none border border-slate-800 h-10 px-2`}
            {...props}
        />
    );
}

export default input;