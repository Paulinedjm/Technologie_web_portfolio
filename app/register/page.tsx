import Link from "next/link";
import { register } from "@/lib/auth";

export default function RegisterPage() {
    return (
        <section className="flex items-center justify-center min-h-[80vh] px-4">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Create an account
                </h1>
                <p className="text-sm text-slate-500 mt-1 mb-6">
                    Choose a username and a password.
                </p>

                <form action={register} className="flex flex-col gap-4">
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
                        Sign up
                    </button>
                </form>

                <p className="text-sm text-slate-500 text-center mt-6">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-800 font-medium hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </section>
    );
}
