"use client";

import { FormEvent, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useRouter } from "next/navigation";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import Link from "next/link";
 
const ColabForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { data: session } = useSession();
  
    const labelStyles = "w-full text-sm";
  
    useEffect(() => {
      if (session?.user) {
        router.push("/");
      }
    }, [session, router]);
  
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const res = await signIn("credentials", {
        user: formData.get("user"),
        password: formData.get("password"),
        redirect: false,
      });
  
      if (res?.error) {
        setError(res.error as string)
      };
  
      if (!res?.error) {
        return router.push("/")
      };
    };
  
  return (
    <section>
      <form onSubmit={handleSubmit} className="space-y-6 flex-1">
        <section className="mb-8 space-y-4">
            <h1 className="header">Ic-Flow</h1>
            <p className="text-dark-700">Organizando a loucura.</p>
        </section>
        {error && <div className=""><p>{error}</p></div>}
        <div className="flex flex-col gap-4">
          <label className="text-white size-3">Usuário:</label>
          <input
            type="text"
            placeholder="@fulanodetal"
            className="shad-input border-0 w-full pl-[14px] rounded-md"
            name="user"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-white size-3">Senha:</label>
          <div className="flex">
            <input
            type={showPassword ? "text" : "password"}
            placeholder="senha"
            className="shad-input border-0 w-full pl-[14px] rounded-md"
            name="password"
          />
            <button
            className="w-2/12 bg-dark-400 flex items-center justify-center transition duration-150 ease hover:bg-[#1A1A1A]"
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(!showPassword)
            }}
          >
            {showPassword ? <BiSolidHide /> : <BiSolidShow />}
          </button>
        </div>
        </div>
        <button className="shad-primary-btn rounded-md h-[36px] w-full transition">
            Login
        </button>
        <Link href="/register">
          <p className="text-white text-14-regular mt-4">Primeiro acesso? <b>Registre-se</b></p>
        </Link>
      </form>
    </section>
  )
  
}

export default ColabForm
