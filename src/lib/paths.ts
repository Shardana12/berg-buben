import type { Locale } from "../i18n";

export function withLocale(lang: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : "/" + path;
  if (lang === "en") {
    return clean === "/" ? "/en" : "/en" + clean;
  }
  return clean;
}

export function swapLocalePath(pathname: string, target: Locale): string {
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const bare = isEn ? (pathname === "/en" ? "/" : pathname.slice(3)) : pathname;
  return withLocale(target, bare);
}

export function currentLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}
