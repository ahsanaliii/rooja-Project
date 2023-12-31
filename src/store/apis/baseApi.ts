import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
export const BASE_URL = 'BACKEND';
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
      headers.set(
        'appkey',
        `U5w7cuJDyyTNAhdhBJ3PnJYp7ajaAUdbuHiSBJcTM4uoR26WwcuLe2249QaHpkKPUNbj`
      );
      return headers;
    },
  }),

  endpoints: () => ({}),
  tagTypes: ['settings', 'projects', 'user-update'],
});
