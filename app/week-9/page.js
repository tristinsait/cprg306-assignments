"use client";

import { useUserAuth } from './_utils/auth-context';
import { useRouter } from 'next/navigation';
import Link from "next/link";

const Page = () => {
    const { user, gitHubSignIn } = useUserAuth();
    const router = useRouter();

    const handleLogin = async (signInMethod) => {
        await signInMethod();
        if (user) {
            router.push('/week-9/shopping-list');
        }
    };

    return (
        <div>
            {!user ? (
                <div>
                    <button onClick={() => handleLogin(gitHubSignIn)} className="btn btn-primary bg-pink-300 text-black font-bold rounded py-2 px-4 mb-1.5 mt-1.5 mr-1.5 hover:bg-pink-200 active:bg-pink-400 disabled:bg-purple-300">
                        Log in with GitHub
                    </button>
                </div>
            ) : (
                <div>
                    <p className='mb-2.5 font-bold text-3xl'>Welcome, {user.displayName} ({user.email})<br></br></p>
                    <Link href="week-9/shopping-list" className="bg-pink-300 text-black font-bold rounded py-2 px-4 mb-1.5 mt-1.5 mr-1.5 hover:bg-pink-200 active:bg-pink-400 disabled:bg-purple-300">Continue to shopping list</Link>
                </div>
            )}
        </div>
    );
};

export default Page;
