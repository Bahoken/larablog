import Link from "next/link";
import { useAuth } from "@/hooks/auth";

const Nav = () => {
    
    const { user, logout } = useAuth();

    return (
        <nav>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/Services">Services</Link>
            </ul>

            <div className="">
                { user ?
                    <a
                      href="#"
                      className="hover:font-bold"
                      onClick={logout}
                    >SIGNOUT</a>
                :
                    <Link
                      href={"/login"}>
                        SIGN IN
                    </Link>
                }
            </div>
        </nav>
    );
}

export default Nav;