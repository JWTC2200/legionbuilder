export const returnToTop = () => {
  if (typeof window !== undefined) {
    window.scroll({ top: 0, behavior: "smooth" });
  }
};
