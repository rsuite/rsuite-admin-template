import en from './en-US';
import zh from './zh-CN';

export function getDict(locale) {
  if (locale === 'en') {
    return en;
  }
  return zh;
}

export default {
  en: en,
  zh: zh
};
