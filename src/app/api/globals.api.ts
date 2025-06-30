import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: '',
		prepareHeaders: headers => {
			headers.set('Authorization', '');
			headers.set('Content-Type', 'application/json');
			headers.set('Accept', 'application/json');
			headers.set('Accept-Language', '');

			return headers;
		},
	}),
	endpoints: () => ({}),
});

export default api;
