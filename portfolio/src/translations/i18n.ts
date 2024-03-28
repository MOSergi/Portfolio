import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import esJSON from "./es.json";
import enJSON from "./en.json";

const resources = {
    es : {...esJSON},
    en : {...enJSON}
}

i18n.use(initReactI18next).init({
    resources,
    lng: "es",
    interpolation : {
        escapeValue: false
    }
})

export default i18n;