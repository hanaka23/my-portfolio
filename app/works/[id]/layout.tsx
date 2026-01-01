import Header from "@/components/Header";

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="work"/>
      <main className="pt-[var(--header-height)]">
        {children}
      </main>
    </>
  );
}
