import LogoUMK from "@/shared/LogoUMK";
import Navigate from "./Navigate/Navigate";
import Link from "next/link";
export default function Header() {
  return (
    <header className="container absolute z-50 flex w-full justify-between left-1/2 translate-x-[-50%] pt-[30px]">
      <Link href="/" className="flex justify-between w-[260px]">
        <LogoUMK />
        <span className="max-w-[190px] font-light">
          Южная маркетинговая компания
        </span>
      </Link>

      <Navigate />
    </header>
  );
}
