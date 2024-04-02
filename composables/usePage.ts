import type { Stage } from "#gql/default";

type Props = {
  slug: string,
  type: 'pdp' | 'page'
}

export async function usePage(properties: Props) {
  const { $preview } = useNuxtApp();
  const stage = $preview ? "DRAFT" as Stage : "PUBLISHED" as Stage

  const { data } = await useAsyncGql(properties.type === 'page' ? 'Page' : 'Pdp', {
    slug: properties.slug, stage
  });

  // @ts-ignore
  const result = properties.type === 'page' ? data.value.page : data.value.pdp

  if (!result) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found",
    });
  }

  return result
}