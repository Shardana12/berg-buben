import { useLocation, useNavigate } from "react-router-dom";
import type { Locale } from "../i18n";
import { currentLocaleFromPath, swapLocalePath } from "../lib/paths";

export default function LanguageSwitcher() {
  const location = useLocation();
  const navigate = useNavigate();
  const active = currentLocaleFromPath(location.pathname);

  const go = (target: Locale) => {
    if (target !== active) {
      navigate(swapLocalePath(location.pathname, target));
    }
  };

  return (
    <div className="lang-switch" aria-label="Sprache / Language">
      <button
        type="button"
        className={active === "de" ? "is-active" : ""}
        onClick={() => go("de")}
        aria-pressed={active === "de"}
      >
        DE
      </button>
      <span className="lang-switch__sep">/</span>
      <button
        type="button"
        className={active === "en" ? "is-active" : ""}
        onClick={() => go("en")}
        aria-pressed={active === "en"}
      >
        EN
      </button>
    </div>
  );
}
