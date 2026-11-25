const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** Formats an ISO `YYYY-MM-DD` date as "July 24, 2026" without depending on the runtime locale or timezone. */
export function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${months[month - 1]} ${day}, ${year}`;
}
