export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return date.toLocaleDateString("en-GB", options);
}

export function abs(num: number): number {
  return Math.abs(num);
}

export function formatNumber(num: number, fraction = 2): string {
  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: fraction,
  }).format(num);
}

export function isDateBeforeNow(dateString: string): boolean {
  const date = new Date(dateString);
  const now = new Date();

  return date < now;
}

export function isBillPaid(dateString: string): boolean {
  const date = new Date(dateString);
  const now = new Date();

  return date.getDate() < now.getDate();
}

export function isBillDue(dateString: string): boolean {
  const date = new Date(dateString);
  const now = new Date();

  return !isBillPaid(dateString) && date.getDate() - now.getDate() < 6;
}

export function formatMonthlyDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();

  let suffix;
  if (day >= 11 && day <= 13) {
    suffix = "th";
  } else {
    switch (day % 10) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        suffix = "th";
        break;
    }
  }

  return `Monthly - ${day}${suffix}`;
}
