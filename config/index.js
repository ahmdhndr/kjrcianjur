export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const PER_PAGE = 5;

export const PROTECTED_ROUTES = [
  '/account/dashboard',
  '/articles/add',
  '/articles/edit/[id]',
];
