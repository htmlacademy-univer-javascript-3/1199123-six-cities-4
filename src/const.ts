export const Settings = {
  PlacesToStay: 4
};

export const Cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum FilterType {
  Popular = 'Popular',
  HighToLow = 'Price: high to low',
  LowToHigh = 'Price: low to high',
  TopRated = 'Top rated first'
}

export enum AuthorizationStatus {
  Authorized = 'Authorized',
  NotAuthorized = 'NotAuthorized'
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
