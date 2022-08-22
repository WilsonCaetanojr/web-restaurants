export const cleanText = (text: string) => {
  return text
    .normalize("NFD")
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "");
};
