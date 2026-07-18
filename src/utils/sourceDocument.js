export const SOURCE_DOCUMENT_PATH =
  "/documents/nha-nuoc-xa-hoi-chu-nghia-viet-nam.pdf";

export const SOURCE_DOCUMENT_TITLE = "Nhà nước xã hội chủ nghĩa Việt Nam";

export function getFirstSourcePage(pageReference) {
  const match = String(pageReference ?? "").match(/\d+/);
  if (!match) return null;

  const page = Number.parseInt(match[0], 10);
  return Number.isFinite(page) && page > 0 ? page : null;
}

export function getSourceDocumentHref(pageReference) {
  const page = getFirstSourcePage(pageReference);
  return page
    ? `${SOURCE_DOCUMENT_PATH}#page=${page}`
    : SOURCE_DOCUMENT_PATH;
}

export default SOURCE_DOCUMENT_PATH;
