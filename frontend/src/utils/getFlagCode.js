  export const getFlagCode = (value) => {
    if (!value) return "un";
    if (value.includes('-')) {
      return value.split('-').pop().toLowerCase();
    }
    return value.toLowerCase();
  };