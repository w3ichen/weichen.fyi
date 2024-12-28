/**
 * Returns the duration between two dates in years and months
 * If no end date is provided, the current date is used
 * @param startYear Start year, eg. 2020
 * @param startMonth Start month from 1-12, eg. 1
 * @param endYear End year, eg. 2021
 * @param endMonth End month from 1-12, eg. 6
 * @returns String in the format "x years, y months"
 */
export function calcDuration(
  startYear: number,
  startMonth: number,
  endYear?: number,
  endMonth?: number
) {
  // If no end date is provided, use the current date
  if (!endYear || !endMonth) {
    const currentDate = new Date();
    endYear = currentDate.getFullYear();
    endMonth = currentDate.getMonth() + 1; // Month is 0-indexed
  }

  // Create Date objects for the start and end
  const startDate = new Date(startYear, startMonth - 1); // Month is 0-indexed
  const endDate = new Date(endYear, endMonth - 1); // Month is 0-indexed

  // Calculate the total months for each date
  const startTotalMonths = startDate.getFullYear() * 12 + startDate.getMonth();
  const endTotalMonths = endDate.getFullYear() * 12 + endDate.getMonth();

  // Difference in total months
  const diffMonths = endTotalMonths - startTotalMonths;

  // Convert months to years and remaining months
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  // Convert to string
  let duration = "";
  if (years > 0) {
    // Add x yr(s)
    duration += years + " yr" + (years > 1 ? "s" : "");
  }
  if (months > 0) {
    // Add y mo(s)
    duration +=
      (duration.length > 0 ? " " : "") +
      months +
      " mo" +
      (months > 1 ? "s" : "");
  }

  return duration;
}
