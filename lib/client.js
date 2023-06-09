import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'qfp0njr3',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-03-10',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);