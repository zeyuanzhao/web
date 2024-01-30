import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-gray-800 border-t border-black-300 dark:border-gray-500 fixed bottom-0 left-0 w-full p-4 font-courier">
      <p className="inline-block ml-1">Copyright © 2024 Alex Zhao</p>
      <p className="inline-block float-right mr-1">Source code: <Link href="https://github.com/zeyuanzhao/web" className="underline hover:font-bold" target="_blank">GitHub</Link></p>
      <p className="inline-block float-right mr-6">Built with Next.js</p>
    </footer>
  );
}

export default Footer;