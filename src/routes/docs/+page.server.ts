import type { PageServerLoad } from './$types';

export const load = (async () => {
    const text  = await fetch('https://loripsum.net/api/plaintext').then(res => res.text());
    console.log(text);
    return {
        text
    };
}) satisfies PageServerLoad;