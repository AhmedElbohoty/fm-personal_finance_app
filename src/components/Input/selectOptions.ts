export type Option = {
  label: string;
  value: string;
};

export const sortOptions: Option[] = [
  { label: "Latest (most recent)", value: "latest" },
  { label: "Oldest", value: "oldest" },
  { label: "A to Z", value: "a-z" },
  { label: "Z to A", value: "z-a" },
  { label: "Highest (transaction amount)", value: "highest" },
  { label: "Lowest", value: "lowest" },
];

export const themesOptions: Option[] = [
  // Grey
  {
    label: "Grey 100",
    value: "#f2f2f2",
  },
  {
    label: "Grey 300",
    value: "#b3b3b3",
  },
  {
    label: "Grey 500",
    value: "#696868",
  },
  {
    label: "Grey 900",
    value: "#201f24",
  },
  {
    label: "Navy grey",
    value: "#97a0ac",
  },

  //   Beige
  {
    label: "Beige 100",
    value: "#f8f4f0",
  },
  {
    label: "Beige 500",
    value: "#98908b",
  },

  //   Others
  {
    label: "Red",
    value: "#c94736",
  },
  {
    label: "Navy",
    value: "#626070",
  },
  {
    label: "Cyan",
    value: "#82c9d7",
  },
  {
    label: "Yellow",
    value: "#f2cdac",
  },
  {
    label: "Green",
    value: "#277c78",
  },
  {
    label: "Purple 1",
    value: "#826cb0",
  },
  {
    label: "Purple 2",
    value: "#af81ba",
  },
  {
    label: "Magenta",
    value: "#934f6f",
  },
  {
    label: "Brown",
    value: "#93674f",
  },
  {
    label: "Turquoise",
    value: "#597c7c",
  },
  {
    label: "Blue",
    value: "#3f82b2",
  },
  {
    label: "Army green",
    value: "#7f9161",
  },
  {
    label: "Gold",
    value: "#cab361",
  },
  {
    label: "Orange",
    value: "#be6c49",
  },
];
