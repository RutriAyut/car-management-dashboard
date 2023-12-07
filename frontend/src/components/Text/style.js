import { css } from "@emotion/css";

const weightMapping = {
  light: "300",
  reguler: "400",
  bold: "700",
};

export const styParagraf = (weight, height, size, margin, color) =>
  css({
    lineHeight: height,
    fontSize: size,
    fontWeight: weightMapping[weight],
    margin: margin,
    color: color,
  });
