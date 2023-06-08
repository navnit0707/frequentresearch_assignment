export function calculateAge(birthDate) {
  if (!birthDate) return null;

  const today = new Date();
  const birthDateObj = new Date(birthDate);

  if (
    birthDateObj > today ||
    birthDateObj.getFullYear() === today.getFullYear()
  ) {
    return "";
  }

  let calculatedAge = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    calculatedAge--;
  }

  return calculatedAge;
}

export function getYearDropdownItems() {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 14 - 100;
  const yearRange = Array.from(Array(101), (_, index) => startYear + index);
  return yearRange;
}
