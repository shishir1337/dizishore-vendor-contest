"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/DiziShore-Logo.png"
            alt="DiziShore Logo"
            width={130}
            height={32}
            priority
          />
        </Link>
      </div>
    </header>
  );
}

