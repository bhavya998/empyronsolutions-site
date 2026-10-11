import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.empyronsolutions.com',
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://www.empyronsolutions.com/impressum/',
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: 'https://www.empyronsolutions.com/datenschutz/',
            changeFrequency: 'yearly',
            priority: 0.2,
        },
    ];
}
