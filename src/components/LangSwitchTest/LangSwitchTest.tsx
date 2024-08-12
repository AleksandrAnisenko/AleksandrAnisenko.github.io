import React from 'react';
import { useTranslation } from 'react-i18next';

export const LangSwitchTest: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t`test.testingWord`}</div>;
};
