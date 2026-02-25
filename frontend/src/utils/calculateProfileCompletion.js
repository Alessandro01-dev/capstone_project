export const calculateProfileCompletion = (user) => {
  if (!user) return 0;

  let score = 0;

  if (user.name && user.surname) score += 5;
  if (user.bio) score += 5;

  if (user.avatar && !user.avatar.includes("default-avatar")) score += 10;

  if (user.languages?.native?.length > 0) score += 10;
  if (user.languages?.spoken?.length > 0) score += 10;
  if (user.languages?.learning?.length > 0) score += 10;

  if (user.location?.city) score += 15;

  if (user.location?.geo?.coordinates?.length === 2) score += 15;

  if (user.nationality?.code) score += 10;

  if (user.interests?.length > 0) score += 10;

  return score;
};
