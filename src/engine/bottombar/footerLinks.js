/**
 * @module Engine/Bottombar/FooterLinks
 * @description Footer links configuration.
 * @author prssbayu-oss
 */

const FOOTER_LINKS = [
	{ label: 'Terms', href: '#' },
	{ label: 'Privacy', href: '#' },
	{ label: 'Security', href: '#' },
	{ label: 'Status', href: '#' },
	{ label: 'Docs', href: '#' },
	{ label: 'Contact', href: '#' },
	{ label: 'Manage cookies', href: '#' },
	{ label: 'Do not share my personal information', href: '#' },
];

function getFooterLinks() {

	return [ ...FOOTER_LINKS ];

}

export { getFooterLinks };
