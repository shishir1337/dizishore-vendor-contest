"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';


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
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link href="https://dizishore.com/sell-with-dizishore/" passHref>
              <Button className="hidden lg:flex bg-[#0274be] text-white hover:bg-[#053d80] transition-colors">
                Sell on DiziShore
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden bg-white">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <nav className="flex flex-col gap-4">
                  <Link href="/" className="flex items-center space-x-2">
                    <Image
                      src="/DiziShore-Logo.png"
                      alt="DiziShore Logo"
                      width={130}
                      height={32}
                    />
                  </Link>
                  <Link
                    href="https://dizishore.com/sell-with-dizishore/"
                    className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                  >
                    Sell on DiziShore
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}

