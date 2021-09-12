import { useTranslation } from 'next-i18next';

import { Paths } from 'types/util-types';
import translations from '../../public/locales/de/common.json';

type TranslationKeys = Paths<typeof translations>;

interface DateTranslationType {
  time?: Date;
  date?: Date;
}

export const useTypeSafeTranslation = () => {
  const { t } = useTranslation();

  return {
    t: (s: TranslationKeys, f?: DateTranslationType) => t(s, f),
  };
};
