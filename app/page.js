import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2" className="hover:text-pink-300 hover:underline">Week 2 Assignment</Link> <br></br>
      <Link href="/week-3" className="hover:text-pink-300 hover:underline">Week 3 Assignment</Link> <br></br>
      <Link href="/week-4" className="hover:text-pink-300 hover:underline">Week 4 Assignment</Link> <br></br>
      <Link href="/week-5" className="hover:text-pink-300 hover:underline">Week 5 Assignment</Link> <br></br>
      <Link href="/week-6" className="hover:text-pink-300 hover:underline">Week 6 Assignment</Link> <br></br>
      <Link href="/week-7" className="hover:text-pink-300 hover:underline">Week 7 Assignment</Link> <br></br>
      <Link href="/week-8" className="hover:text-pink-300 hover:underline">Week 8 Assignment</Link> <br></br>
    </main>
  );
}