import type { Middleware } from '@reduxjs/toolkit';

export const errorMiddleware: Middleware = () => next => (action: any) => {
	if (action.type.endsWith('/rejected')) {
		const errorMessage = `Action error: ${action?.payload?.data?.path} - ${action.error?.message || 'Unknown error!!'}`;
		console.error(errorMessage);
	}

	return next(action);
};
