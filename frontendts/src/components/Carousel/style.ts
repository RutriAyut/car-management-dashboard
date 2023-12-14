import { css } from "@emotion/css";

export const carouselWrapper = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "40px",
  marginBottom: "24px",
  gap: "32px",
});

export const carouselItem = css({
  flexBasis: "100%",
  flexShrink: "0",
  maxWidth: "619px",
  minHeight: "270px",
  borderRadius: "8px",
  background: "#f1f3ff",

  /* Shadow/Low */
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
  padding: "69px 32px 69px 46px",
  display: "flex",
  gap: "46px",

  alignSelf: "center",
  justifySelf: "center",
});

export const carouselLeft = css({
  alignSelf: "center",
});

export const carouselRight = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "8px",
});
