export interface FormValues {
  name: string;
  dateOfBirth: string;
  email: string;
  knowsAtlas: 'Yes' | 'No' | '';
  atlasDescription: string;
  motivation: string;
  skills: string;
  interviewDate: string;
  interviewTime: string;
  format: 'Online' | 'In person';
  anythingElse: string;
}
