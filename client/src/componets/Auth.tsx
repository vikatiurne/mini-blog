"use client";
import { User } from "@/types/types";
import { registrUser } from "@/utils/api";
import React from "react";
import { useForm } from "react-hook-form";

const Auth: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<User>();

  const onSubmit = async (data: User) => {
    try {
      const user = await registrUser(data);
      localStorage.setItem("_postUserId", user["_id"]);
      window.location.reload();
    } catch (error) {
      console.log(`Error regisrtation:${error}`);
    }
  };

  const style: string = "p-2 border rounded-2xl max-w-[400px] text-xl";

  return (
    <div className="p-8 h-screen bg-green-50">
      <h1 className="mb-40 text-center font-bold text-3xl">
        Create Posts Application
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-4 flex flex-col justify-center items-center gap-6"
      >
        <input
          className={style}
          {...register("username", { required: true })}
          placeholder="Your name..."
        />
        <input
          className={style}
          {...register("email", { required: true })}
          type="email"
          placeholder="Your email..."
        />
        <input
          className={style}
          type="password"
          {...register("password", { required: true })}
          placeholder="Your password..."
        />
        <button
          className="bg-emerald-950 text-emerald-50 py-2 px-8 rounded-3xl"
          type="submit"
        >
          Registration
        </button>
      </form>
    </div>
  );
};

export default Auth;
