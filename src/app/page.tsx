import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <main className="container mx-auto flex-grow flex flex-col">
        <h1 className="text-xl font-semibold">Personal Budget</h1>
      </main>
      <Footer></Footer>
    </div>
  );
}
