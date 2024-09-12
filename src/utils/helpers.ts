export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return date.toLocaleDateString("en-GB", options);
}

export function formatNumber(num: number, fraction = 2): string {
  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: fraction,
  }).format(num);
}
