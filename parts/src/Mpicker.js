import * as React from 'react';
import 'moment/locale/fr';
import 'moment/locale/ru';
import "moment/locale/zh-cn";
import moment, { Moment } from 'moment';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MomentAdapter from '@material-ui/pickers/adapter/moment';
import { DatePicker, LocalizationProvider } from '@material-ui/pickers';

moment.locale('fr'); // it is required to select default locale manually

const localeMap = {
  en: 'en',
  fr: 'fr',
  ru: 'ru',
  "zh-cn":"zh-cn"
};

const maskMap = {
  fr: '__/__/____',
  en: '__/__/____',
  ru: '__.__.____',
  "zh-cn": '____/__/__',
};

export default function MomentLocalizationExample() {
  const [locale, setLocale] = React.useState('zh-cn');
  const [selectedDate, handleDateChange] = React.useState(moment());

  const selectLocale = (newLocale: any) => {
    console.log(newLocale);
    moment.locale(newLocale);

    setLocale(newLocale);
  };

  return (
    <LocalizationProvider dateLibInstance={moment} dateAdapter={MomentAdapter} locale={locale}>
      <DatePicker
        renderInput={(props) => <TextField {...props} />}
        mask={maskMap[locale]}
        value={selectedDate}
        onChange={(date) => handleDateChange(date)}
      />
      <ButtonGroup>
        {Object.keys(localeMap).map((localeItem) => (
          <Button
            key={localeItem}
            onClick={() => {
              selectLocale(localeItem);
            }}
          >
            {localeItem}
          </Button>
        ))}
      </ButtonGroup>
    </LocalizationProvider>
  );
}