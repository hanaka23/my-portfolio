"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  return (
    <div className="py-[32px] md:py-[64px]">
      <div className="mx-auto text-center">
        <h3>Contact</h3>
      </div>

      <form
        action="/api/contact"
        method="POST"
        onSubmit={handleSubmit(() => {})}
        className="mx-auto max-w-xl"
      >
        <div className="grid grid-cols-1 gap-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm/6 font-semibold">お名前</label>
            <input
              {...register("name", {
                required: "お名前は必須です",
              })}
              name="name"
              className="block w-full rounded-md px-3.5 py-2 outline outline-1 outline-gray-300"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm/6 font-semibold">
              メールアドレス
            </label>
            <input
              {...register("email", {
                required: "メールアドレスは必須です",
                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "正しいメールアドレスを入力してください",
                },
              })}
              name="email"
              type="email"
              className="block w-full rounded-md px-3.5 py-2 outline outline-1 outline-gray-300"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm/6 font-semibold">
              お問い合わせ
            </label>
            <textarea
              {...register("message", {
                required: "お問い合わせ内容は必須です",
                minLength: {
                  value: 10,
                  message: "10文字以上入力してください",
                },
              })}
              name="message"
              rows={4}
              className="block w-full rounded-md px-3.5 py-2 outline outline-1 outline-gray-300"
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
