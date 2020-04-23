export const STYLE_LINK = document.createElement("link");
STYLE_LINK.rel = "stylesheet";
STYLE_LINK.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(STYLE_LINK);

export const TYPE_OPTIONS = [
  {
    key: "Cases",
    text: "Случаи",
    value: "Случаи",
  },
  {
    key: "Deaths",
    text: "Deaths",
    value: "Deaths",
  },
  {
    key: "Recovered",
    text: "Recovered",
    value: "Recovered",
  },
  {
    key: "Infected",
    text: "Infected",
    value: "Infected",
  },
];
