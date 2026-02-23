import { hobbiesMock } from "../components/settings/interestsSettings/hobbiesMock";

export const getInterestLabel = (hobbyValue) => {
  const hobby = hobbiesMock.find(hobby => hobby.value === hobbyValue);
  return hobby ? hobby.label : hobbyValue;
};