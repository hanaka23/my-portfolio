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

      {/* 画像 */}
      {work.image && (
        <div className="space-y-6 mb-10">
          {work.image.map((img, index) =>
            img.src.endsWith(".mp4") ? (
              <video
                key={index}
                src={`/images/works/${img.src}`}
                controls
                className="w-full rounded"
              />
            ) : (
              <figure key={index}>
                <div className="w-[300px] h-[600px]">
                  <Image
                    src={`/images/works/${img.src}`}
                    alt={img.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <figcaption className="text-sm text-center text-gray-500 mt-2">
                  {img.caption}
                </figcaption>
              </figure>
            )
          )}
        </div>
      )}

      {/* 説明（sections） */}
      <section className="space-y-6 mb-10">
        {work.sections.map((section, index) => (
          <div key={index}>
            <h2 className="font-semibold text-lg mb-1">
              {section.heading}
            </h2>
            <p className="whitespace-pre-line text-gray-700">
              {section.body}
            </p>
          </div>
        ))}
      </section>

      {/* 技術スタック */}
      <section>
        <h2 className="font-semibold text-lg mb-3">使用技術</h2>
        <ul className="list-disc list-inside space-y-1">
          {work.tech.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
