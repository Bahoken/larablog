import Nav from "./Nav";

const Layouts = ({ children }) => {
    return (
        <div className="bg-blue-500">
            <div className="max-w-x px-8 mx-auto">
                <Nav />
            </div>
            <div className="mt-8">
                { children }
            </div>
        </div>
    );
}

export default Layouts;