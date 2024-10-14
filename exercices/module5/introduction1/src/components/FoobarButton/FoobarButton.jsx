import { useContext } from "react";
import { Context as LanguageContext } from "contexts/LanguageContext";

export const FoobarButton = () => {
   const { language, pickLanguage } = useContext(LanguageContext )
}
