import { User } from '@/Types/interfaces';


export function isUserType (obj: unknown): obj is User {
  return !obj ? false : (
    typeof obj === 'object' &&
    'initialWeek' in obj &&
    'currTrainingDay' in obj &&
    'currTrainingWeek' in obj &&
    'exercises' in obj
  );
}