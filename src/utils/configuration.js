import {fromJS} from 'immutable';

export const APP_CONTEXT_ROOT = 'APP_CONTEXT_ROOT';
export const APP_TIMEOUT = 'APP_TIMEOUT';
export const APP_DOMAIN = 'APP_DOMAIN';

let initConfig = {
  [APP_CONTEXT_ROOT]:'',
  [APP_TIMEOUT]:7000,
  [APP_DOMAIN]:'http://localhost:8079'
};

let configuration = fromJS(initConfig);

export function setConfiguration(name, value) {
  configuration = configuration.set(name, value);
}

export function setAll(properties) {
  configuration = configuration.merge(properties);
}

export function unsetConfiguration(name) {
  configuration = configuration.delete(name);
}

export function getConfiguration(key) {
  if (!configuration.has(key)) {
    return null;
  }

  return configuration.get(key);
}
