/**
 * @module Footer/Footer
 * @description Application footer component rendering GitHub navigation links and copyright.
 * @author prssbayu-oss
 */

import { octocat } from '../icons.js';

export const FOOTER_LINKS = [
	{ label: 'Terms', href: '#' },
	{ label: 'Privacy', href: '#' },
	{ label: 'Security', href: '#' },
	{ label: 'Status', href: '#' },
	{ label: 'Docs', href: '#' },
	{ label: 'Contact', href: '#' },
	{ label: 'Manage cookies', href: '#' },
	{ label: 'Do not share my personal information', href: '#' },
];

export function getFooterLinks() {
	return [ ...FOOTER_LINKS ];
}

export function Footer() {
	const links = getFooterLinks();

	return `
		<footer class="border-t border-[#21262d] bg-[#010409] py-8 px-4 md:px-8 mt-auto text-xs text-[#7d8590]">
			<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
				<div class="flex items-center gap-2">
					<span class="hover:text-[#f0f6fc] cursor-pointer">${ octocat( 24, 'text-[#7d8590]' ) }</span>
					<span>&copy; ${ new Date().getFullYear() } GitHub, Inc.</span>
				</div>
				<div class="flex items-center gap-4 flex-wrap justify-center">
					${ links.map( ( link ) => `<a href="${ link.href }" class="text-[#7d8590] hover:text-[#58a6ff] hover:underline">${ link.label }</a>` ).join( '' ) }
				</div>
			</div>
		</footer>
	`;
}

export { Footer as GitHubFooter };
export default Footer;
