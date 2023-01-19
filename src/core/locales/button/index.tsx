import React from "react";
import { useTranslation } from "react-i18next";

import { PublicContext } from "../../context";
import { Combo } from "../../components";
import cultures from "../../context/default/culture";
import { DefaultCulture } from "../../context/default";

export default function LanguageButton() {
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);
  const { i18n } = useTranslation();
  const [lang, setLang] = React.useState(publicCtx.culture.name);

  const handleChange = (event: any) => {
    let lang: string = event.target.value as string;

    i18n.changeLanguage(lang);

    setPublicCtx({
      ...publicCtx,
      culture: cultures[lang],
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
