"use client";

import { FormEvent, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useRouter } from "next/navigation";

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
    PASSWORD = 'password',
}
 
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
            <p className="text-dark-700">Organizando a bagunça.</p>
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
        <button className="shad-primary-btn rounded-md h-[36px] w-full transition">
            Login
        </button>
      </form>
    </section>
  )
  
}

export default ColabForm
