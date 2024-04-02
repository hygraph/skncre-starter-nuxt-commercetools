export async function useOgtags(page: any) {
  const { $preview } = useNuxtApp();

  return useSeoMeta({
    title: `${$preview ? "⚡️ " : ""}skncre - ${page?.title}`,
    ogTitle: page?.title,
    description: page?.description,
    ogDescription: page?.description,
    ogImage: page?.ogImage.url,
    ogSiteName: "skncre, a hygraph cosmetics brand demo",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterDescription: page?.description,
  });
}