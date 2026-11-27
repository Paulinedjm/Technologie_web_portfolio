"use server"

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import {hash, compare} from "bcryptjs";
import { cookies, headers } from 'next/headers'
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

const secret = process.env.SECRET

export async function register(form: FormData) {
    const login = form.get("login")?.toString();
    const password = form.get("password")?.toString();
    if (login && password) {
        await db
        .insert(usersTable)   // ajoute une ligne dans users de ma database 
        .values({ login, password: await hash(password, 10) })
        redirect("/login")
    }
}

export async function login(form: FormData) {
    const login = form.get("login")?.toString();
    const password = form.get("password")?.toString();
    if (login && password) {
        const user = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.login, login));
        if (user && (await compare(password, user[0].password))) {
            const signature = await hash(secret + login, 10)
            const cookieStore = await cookies()
            cookieStore.set('session', `${login};${signature}`)
            redirect((await headers()).get('referer') ?? '/')
        }
    }
}


export async function getCurrentUser() {
  // Get the session cookie
  const cookieStore = await cookies()
  const session = cookieStore.get('session')
  if (!session) return null

  // Check the signature
  const [login, signature] = session.value.split(';')
  const correct = await compare(secret + login, signature)

  return correct ? login : null
}



