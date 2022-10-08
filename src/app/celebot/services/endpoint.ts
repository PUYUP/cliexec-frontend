import { environment } from 'src/environments/environment';

const prefix = 'celebot/v1/';

export const Endpoints = {
  pain: environment.endpoint + prefix + 'pains/',
  reaction: environment.endpoint + prefix + 'reactions/',
};
