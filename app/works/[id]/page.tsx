import { works } from "@/lib/works";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default function WorkDetailPage({ params }: Props) {
  const work = works.find((w) => w.id === params.id);

  if (!work) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {/* タイトル */}
      <h1 className="text-3xl font-bold mb-6">{work.title}</h1>

      <div className="flex flex-start  gap-[32px] max-w-[1080px] m-auto">
        {work.image && (
          <div className="flex flex-col flex-1 gap-[24px] p-[12px]">
            {work.image.map((img, index) => (
              <figure
                key={index}
                className="m-0 [margin-inline:0] [margin-block:0]"
              >
                {img.src.endsWith(".mp4") ? (
                  <video
                    src={`/images/works/${img.src}`}
                    controls
                    className="w-full h-auto"
                  />
                ) : (
                  <img
                    src={`/images/works/${img.src}`}
                    alt={img.alt}
                    className="w-full h-auto"
                  />
                )}

                {img.caption && (
                  <figcaption className="text-sm text-center text-gray-500 mt-2">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        {/* 説明（sections） */}
        <section className="flex-1 space-y-6 mb-10">
          {work.sections.map((section, index) => (
            <div key={index}>
              <h2 className="font-semibold text-lg mb-1">{section.heading}</h2>
              <p className="whitespace-pre-line text-gray-700">
                {section.body}
              </p>
            </div>
          ))}
          <div>
            <h2 className="font-semibold text-lg mb-1">【使用技術】</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {work.tech.map((t, index) => (
                <li key={index}>{t}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
