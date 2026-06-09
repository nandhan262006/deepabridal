import { createContext, useContext } from "react";
import { useSanity } from "./useSanity";
import { siteSettingsQuery } from "./queries";

const SiteSettingsContext = createContext(null);

export function SiteSettingsProvider({ children }) {
  const { data } = useSanity(siteSettingsQuery);
  return (
    <SiteSettingsContext.Provider value={data}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
