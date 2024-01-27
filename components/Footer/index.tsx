import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100 fixed bottom-0 left-0 w-full p-4 border-t border-black-300">
      <p className="inline-block">Copyright © 2024 Alex Zhao</p>
      <p className="inline-block float-right">Source code: <Link href="https://github.com/zeyuanzhao/web" className="underline">GitHub</Link></p>
    </footer>
  );
}
