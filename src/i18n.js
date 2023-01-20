import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import common_ar from './translations/ar.json'
import common_en from './translations/en.json'

const resources = {
    en:{
        translation:common_en
    },
    ar:{
        translation:common_ar
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng:'en',
    keySeperator:false,
    interpolation:{
        escapeValue:false
    }
})

export default i18n;