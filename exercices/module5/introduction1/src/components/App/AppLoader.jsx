import { ProviderWrapper as LanguageProviderWrapper } from "../../context/LanguageContext";
import { App } from "components/App/App"

export const AppLoader= () => {
  return (
    <LanguageProviderWrapper >
        <App />
    </LanguageProviderWrapper >
  )
}
