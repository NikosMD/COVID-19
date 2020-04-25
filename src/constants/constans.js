export const STYLE_LINK = document.createElement("link");
STYLE_LINK.rel = "stylesheet";
STYLE_LINK.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(STYLE_LINK);

export const TYPE_OPTIONS = [
  {
    key: "Confirmed",
    text: "Confirmed",
    value: "Confirmed",
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
  }
];

export const GET_DEFAULT_VALUE = (options) =>
  options.find((e, i) => i < 1).value;

export const GET_COUNTRY = (options) => options.find((e, i) => i < 1).text;
