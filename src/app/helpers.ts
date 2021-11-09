const BURMESE_NUMBERS: Array<string> = [
  "၀",
  "၁",
  "၂",
  "၃",
  "၄",
  "၅",
  "၆",
  "၇",
  "၈",
  "၉",
];

export function toBurmeseNumber(input: string | number) {
  return input
    .toString()
    .split("")
    .map((n: string) => BURMESE_NUMBERS[parseInt(n)] || n)
    .join("");
}
