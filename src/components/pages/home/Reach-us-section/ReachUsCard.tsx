import { useTranslations } from "next-intl";
import React from "react";

export default function ReachUsCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const t = useTranslations("home.Reach_to_us_section");

  return (
    <div className="flex gap-2">
      <div className="p-2 bg-secondary rounded-[10px] w-fit">{children}</div>
      <div className="flex flex-col justify-between text-darkGray text-sm">
        <h4>{t(title)}</h4>
        <h4>{description}</h4>
      </div>
    </div>
  );
}
