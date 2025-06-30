import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esESbackup from "./translations/esES.translations.json";
import caESbackup from "./translations/caES.translations.json";
import { LANGUAGES } from "../app/constants/global.constants";

const resources = {
	esES: {
		translation: esESbackup,
	},
	caES: {
		translation: caESbackup,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: LANGUAGES.esES,
	fallbackLng: LANGUAGES.esES,
});

export default i18n;
