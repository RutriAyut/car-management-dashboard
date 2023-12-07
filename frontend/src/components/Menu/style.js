import { css } from "@emotion/css";

export const navLink = css({
  color: "#000000",
  fontWeight: 400,
  textDecoration: "none",
  padding: "8px",
});

export const adminBg = (color) =>
  css({
    background: color,
  });

export const iconMargin = css({
  margin: "18px 0px",
});

export const rightMenu = css({
  width: "220px",
  height: "830px",
  flexShrink: "0",
  flexDirection: "column !important",
});
