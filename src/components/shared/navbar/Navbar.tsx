"use client";

import { Button } from "antd";
import { Logo } from "@/src/assets/images/svgs/logo";
import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import NavbarLinks from "./NavbarLinks";
import NavbarMobile from "./NavbarMobile";
import { LogoAr } from "@/src/assets/images/svgs/logoAr";
import SelectionLang from "./SelectionLang";

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations("");

  return (
    <header className="z-[99999] navbarWrapper shadow-sm py-4 ">
      <div className="container flex justify-between items-center w-full py-3 md:py-0  ">
        {locale === "en" ? <Logo /> : <LogoAr />}
        <NavbarLinks className=" w-fit hidden lg:flex md:items-center md:justify-center gap-x-8  !font-medium " />
        <div className=" hidden lg:flex gap-2">
          <div className="flex items-center">
            <Globe size={20} className="text-primary " />
            <SelectionLang />
            <Button>{t("get_started")}</Button>
          </div>
        </div>
        {/* Mobile Navbar */}
        <NavbarMobile />
      </div>
    </header>
  );
};

export default Navbar;
