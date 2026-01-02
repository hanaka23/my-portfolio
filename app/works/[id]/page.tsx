import { works } from "@/lib/works";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default function WorkDetailPage({ params }: Props) {
  const work = works.find((w) => w.id === params.id);
  if (!work) notFound();

  return (
    <>
      <div className="py-[64px] max-w-[1080px] m-auto">
        {/* タイトル */}
        <h1 className="pl-[24px] text-3xl font-bold mb-6 w-full mx-auto px-4">
          Works
        </h1>
        {/* ===== 背景付きエリア ===== */}
        <div
          className="
            w-full
            py-6
            bg-[linear-gradient(to_right,#4d4d4d_50%,transparent_50%)]
          "
        >
          {/* 中身（幅制限） */}
          <div className="w-full mx-auto px-4">
            <div className="flex gap-[32px]">
              {/* ===== 画像 ===== */}
              <div className="flex-1 pt-[64px]">
                {work.image?.slice(1).map((img, index) => (
                  <figure key={index} className="mb-[84px]">
                    {img.src.endsWith(".mp4") ? (
                      <video
                        src={`/images/works/${img.src}`}
                        controls
                        className="w-full"
                      />
                    ) : (
                      <img
                        src={`/images/works/${img.src}`}
                        alt={img.alt}
                        className="w-full"
                      />
                    )}
                    {img.caption && (
                      <figcaption className="text-[12px] text-center text-[#fff] mt-2">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
              {/* ===== 説明 ===== */}
              <section className="flex-1">
                <h2 className="text-[18px] font-bold mb-[24px]">{work.title}</h2>
                {work.sections.map((section, i) => (
                  <div key={i} className="mb-[48px]">
                    <h3 className="font-semibold text-[16px] my-[8px]">
                      {section.heading}
                    </h3>
                    <p className="text-[12px] whitespace-pre-line">
                      {section.body}
                    </p>
                  </div>
                ))}
                <div>
                  <h3 className="font-semibold text-[16px] my-[8px]">
                    【使用技術】
                  </h3>
                  <ul className="list-disc list-inside text-[12px] my-0">
                    {work.tech.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
