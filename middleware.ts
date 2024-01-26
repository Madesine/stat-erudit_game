import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest } from "next/server";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './app/lib/constants';

function getLocale(request: NextRequest) {
	const headers = { 'accept-language': request.headers.get('accept-language') || undefined };
	const languages = new Negotiator({ headers }).languages();

	return SUPPORTED_LOCALES.get(match(languages, Array.from(SUPPORTED_LOCALES.keys()), DEFAULT_LOCALE));
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = Array.from(SUPPORTED_LOCALES.values()).some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	)

	if (pathnameHasLocale) return;

	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;

	return Response.redirect(request.nextUrl)
}

export const config = {
	matcher: ['/((?!_next).*)',],
}