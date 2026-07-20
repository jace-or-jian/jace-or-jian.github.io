import * as pdfjsLib from "./assets/vendor/pdfjs/pdf.mjs";

pdfjsLib.GlobalWorkerOptions.workerSrc = "./assets/vendor/pdfjs/pdf.worker.mjs";

const PDF_URL = "./files/Jiajie_Jian_CV.pdf?v=2de12fab";
const MAX_PAGE_WIDTH = 850;
const viewer = document.getElementById("cv-viewer");
const status = document.getElementById("cv-status");
const errorPanel = document.getElementById("cv-error");

let pdfDocument;
let renderGeneration = 0;
let resizeTimer;

const getPageScale = (page) => {
  const baseViewport = page.getViewport({ scale: 1 });
  const availableWidth = Math.min(MAX_PAGE_WIDTH, Math.max(280, viewer.clientWidth));
  return availableWidth / baseViewport.width;
};

const renderLinks = async (page, viewport, pageElement) => {
  const annotations = await page.getAnnotations({ intent: "display" });
  const linkLayer = document.createElement("div");
  linkLayer.className = "cv-link-layer";

  let externalLinkCount = 0;
  annotations.forEach((annotation) => {
    const url = annotation.url || annotation.unsafeUrl;
    if (!url || !annotation.rect) return;

    const [x1, y1, x2, y2] = viewport.convertToViewportRectangle(annotation.rect);
    const link = document.createElement("a");
    link.className = "cv-pdf-link";
    link.href = url;
    link.style.left = `${Math.min(x1, x2)}px`;
    link.style.top = `${Math.min(y1, y2)}px`;
    link.style.width = `${Math.abs(x2 - x1)}px`;
    link.style.height = `${Math.abs(y2 - y1)}px`;
    link.setAttribute("aria-label", `Open ${url} in a new tab`);
    link.title = "Open in a new tab";

    if (/^https?:/i.test(url)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      externalLinkCount += 1;
    }

    linkLayer.append(link);
  });

  pageElement.append(linkLayer);
  return externalLinkCount;
};

const renderPage = async (pageNumber, generation) => {
  const page = await pdfDocument.getPage(pageNumber);
  if (generation !== renderGeneration) return 0;

  const scale = getPageScale(page);
  const viewport = page.getViewport({ scale });
  const outputScale = Math.min(window.devicePixelRatio || 1, 2);
  const pageElement = document.createElement("section");
  pageElement.className = "cv-page";
  pageElement.setAttribute("aria-label", `CV page ${pageNumber}`);
  pageElement.style.width = `${viewport.width}px`;
  pageElement.style.height = `${viewport.height}px`;

  const canvas = document.createElement("canvas");
  canvas.width = Math.floor(viewport.width * outputScale);
  canvas.height = Math.floor(viewport.height * outputScale);
  canvas.style.width = `${viewport.width}px`;
  canvas.style.height = `${viewport.height}px`;
  pageElement.append(canvas);
  viewer.append(pageElement);

  await page.render({
    canvasContext: canvas.getContext("2d", { alpha: false }),
    transform: outputScale === 1 ? null : [outputScale, 0, 0, outputScale, 0, 0],
    viewport,
  }).promise;

  if (generation !== renderGeneration) return 0;

  const textLayer = document.createElement("div");
  textLayer.className = "textLayer";
  pageElement.append(textLayer);
  const textContent = await page.getTextContent({ includeMarkedContent: true });
  const selectableText = new pdfjsLib.TextLayer({
    textContentSource: textContent,
    container: textLayer,
    viewport,
  });
  await selectableText.render();

  return renderLinks(page, viewport, pageElement);
};

const renderDocument = async () => {
  const generation = ++renderGeneration;
  viewer.replaceChildren();
  errorPanel.hidden = true;
  status.textContent = "Rendering CV…";

  try {
    let externalLinks = 0;
    for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber += 1) {
      externalLinks += await renderPage(pageNumber, generation);
    }
    if (generation !== renderGeneration) return;
    status.textContent = `${pdfDocument.numPages} pages · ${externalLinks} web links`;
  } catch (error) {
    console.error("CV viewer failed to render", error);
    if (generation !== renderGeneration) return;
    viewer.replaceChildren();
    status.textContent = "CV viewer unavailable";
    errorPanel.hidden = false;
  }
};

const initialize = async () => {
  try {
    const loadingTask = pdfjsLib.getDocument({ url: PDF_URL });
    pdfDocument = await loadingTask.promise;
    await renderDocument();
  } catch (error) {
    console.error("CV failed to load", error);
    status.textContent = "CV unavailable";
    errorPanel.hidden = false;
  }
};

window.addEventListener("resize", () => {
  if (!pdfDocument) return;
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(renderDocument, 180);
});

initialize();
