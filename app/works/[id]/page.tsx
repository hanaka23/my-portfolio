import { works } from "@/lib/works";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function WorkDetailPage({ params }: PageProps) {
  const { id } = await params;

  const work = works.find((w) => w.id === id);
  if (!work) notFound();

  return (
    <>
      <div className="max-w-[1080px] m-auto">
        {/* タイトル */}
        <h3 className="text-left px-[12px] my-[24px]">Works</h3>
        {/* ===== 背景付きエリア ===== */}
        <div className="w-full bg-[linear-gradient(to_right,#4d4d4d_50%,transparent_50%)]">
          {/* 中身（幅制限） */}
          <div className="w-full mx-auto px-4">
            <div className="flex gap-[32px]">
              {/* ===== 画像 ===== */}
              <div className="flex-1 md:pt-[64px] pt-[24px]">
                {work.image?.slice(1).map((img, index) => (
                  <figure key={index} className="md:mb-[84px] mb-[32px] ">
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
                      <figcaption className="text-[12px] text-center text-[var(--color-base)] mt-2">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
              {/* ===== 説明 ===== */}
              <section className="flex-1 pb-[64px]">
                <h4>{work.title}</h4>
                {work.sections.map((section, i) => (
                  <div key={i} className="mb-[24px] md:mb-[48px]">
                    <h5 className="">{section.heading}</h5>
                    <p className="whitespace-pre-line">{section.body}</p>
                  </div>
                ))}
                <div>
                  <h5>【使用技術】</h5>
                  <ul className="list-disc list-inside font-thin text-[12px] md:text-[14px] my-0">
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
