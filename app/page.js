import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2" className="hover:text-pink-300 hover:underline">Week 2 Assignment</Link>
    </main>
  );
}
