export const TEXTBOOK_PDF_PATH =
  "/documents/giao-trinh-chu-nghia-xa-hoi-khoa-hoc.pdf";

// Bản PDF có ba trang bìa/lời giới thiệu trước hệ thống số trang in:
// trang in 11 tương ứng trang 8 trong trình đọc PDF.
const PRINTED_TO_PDF_PAGE_OFFSET = -3;

export function getFirstPrintedPage(sourcePages) {
  const match = String(sourcePages ?? "").match(/\d+/);
  return match ? Number(match[0]) : null;
}

export function getTextbookSourceHref(sourcePages) {
  const printedPage = getFirstPrintedPage(sourcePages);

  if (!printedPage) return `${TEXTBOOK_PDF_PATH}#page=1`;

  const pdfPage = Math.max(1, printedPage + PRINTED_TO_PDF_PAGE_OFFSET);
  return `${TEXTBOOK_PDF_PATH}#page=${pdfPage}`;
}
