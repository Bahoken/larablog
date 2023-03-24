import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import Label from "@/components/label";
import Button from "@/components/Button";
import Input from "@/components/input";
import { useState } from "react";
import { useAuth } from "../hooks/auth";
import Errors from "@/components/Errors";

const login = () => {

    // states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    // Auth hook 
    const { login, isLoading, user } = useAuth({ middleware: "guest" });

    //check loading and user 
    if(isLoading || user) {
        return (
            <>Loading ...</>
        )
    }

    //submit form action
    const submitForm = async (e) => {
        
        e.preventDefault();

        login({ email, password, setErrors });

    }

    return (
        <>
            <Head>
                <title>Larablog | Login</title>
            </Head>

            <div className="w-2/4 mx-auto p-2 bg-white shadow">
                
                <Errors errors={errors} />

                <form onSubmit={submitForm} autoComplete="off">
                    
                    <div className="">
                        <Label htmlFor="email">Email</Label>
                            
                            <Input 
                                id="email"
                                type="email"
                                value={email}
                                className="w-96"
                                required
                                autoFocus
                                autoComplete="off"
                                onChange={ e => setEmail(e.target.value) }
                            />
                    </div>

                    <div className="mt-2">
                        <Label htmlFor="email">Password</Label>
                            
                            <Input 
                                id="password"
                                type="password"
                                value={password}
                                className="w-96"
                                required
                                autoFocus
                                autoComplete="off"
                                onChange={ e => setPassword(e.target.value) }
                            />
                            
                    </div>

                    <div className="my-2">
                        <Button>Login</Button>
                    </div>
                </form>
            </div>

        </>
    );
}

export default login;

login.getLayout = function getLayout(page) {
    return (
      <MainLayout>
          { page }
      </MainLayout>
     )
  }
  