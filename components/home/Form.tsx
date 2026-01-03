"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
  company: string; // ← ハニーポット
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("送信が完了しました");
      reset();
    } else {
      alert("送信に失敗しました");
    }
  };

  return (
    <div className="py-[32px] md:py-[64px]">
      <div className="mx-auto text-center">
        <h3>Contact</h3>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-xl"
        noValidate
      >
        <div className="grid grid-cols-1 gap-y-6">

          {/* ハニーポット（人間には見せない） */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            {...register("company")}
          />

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold">お名前</label>
            <input
              {...register("name", { required: "お名前は必須です" })}
              className="mt-2 block w-full rounded-md px-3.5 py-2 outline outline-1 outline-gray-300"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold">
              メールアドレス
            </label>
            <input
              type="email"
              {...register("email", {
                required: "メールアドレスは必須です",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "正しいメールアドレスを入力してください",
                },
              })}
              className="mt-2 block w-full rounded-md px-3.5 py-2 outline outline-1 outline-gray-300"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold">お問い合わせ</label>
            <textarea
              rows={4}
              {...register("message", {
                required: "お問い合わせ内容を入力してください",
                minLength: {
                  value: 10,
                  message: "10文字以上で入力してください",
                },
              })}
              className="mt-2 block w-full rounded-md px-3.5 py-2 outline outline-1 outline-gray-300"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            disabled={isSubmitting}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-white disabled:opacity-50"
          >
            {isSubmitting ? "送信中..." : "送信"}
          </button>
        </div>
      </form>
    </div>
  );
}
