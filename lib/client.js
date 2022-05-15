import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "mwdsh1sy",
  dataset: "production",
  apiVersion: "2022-05-14",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builde = imageUrlBuilder(client);

export const urlfor = (source) => builde.image(source);
