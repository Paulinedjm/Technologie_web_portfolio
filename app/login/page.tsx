import Link from "next/link";
import { login } from "@/lib/auth";

export default function LoginPage() {
    return (
        <section className="flex items-center justify-center min-h-[80vh] px-4">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Welcome back
                </h1>
                <p className="text-sm text-slate-500 mt-1 mb-6">
                    Log in to access your account.
                </p>

                <form action={login} className="flex flex-col gap-4">
                    <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
                        Username
                        <input
                            name="login"
                            placeholder="your_username"
                            required
                            className="border border-slate-300 rounded-lg px-3 py-2 text-base font-normal
                                       focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
                        Password
                        <input
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            required
                            className="border border-slate-300 rounded-lg px-3 py-2 text-base font-normal
                                       focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                        />
                    </label>

                    <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg py-2.5 transition-colors">
                        Log in
                    </button>
                </form>

                <p className="text-sm text-slate-500 text-center mt-6">
                    Don't have an account yet?{" "}
                    <Link href="/register" className="text-blue-800 font-medium hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </section>
    );
}
