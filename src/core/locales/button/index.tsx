import React from "react";
import { useTranslation } from "react-i18next";

import { PublicContext } from "@/core/context";
import { DefaultCulture } from "@/core/context/default";
import { Combo } from "@/core/components";

export default function LanguageButton() {
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);
  const { i18n } = useTranslation();
  const [lang, setLang] = React.useState(publicCtx.culture.name);

  const handleChange = (event: any) => {
    let lang: string = event.target.value as string;

    i18n.changeLanguage(lang);

    setPublicCtx({
      ...publicCtx,
      culture: DefaultCulture[lang],
    });

    setLang(lang);
  };

  return (
    <>
      <Combo
        selected={lang}
        onChange={handleChange}
        items={Object.keys(DefaultCulture)}
      />
    </>
  );
}
