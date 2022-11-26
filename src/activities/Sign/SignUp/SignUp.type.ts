export interface SignUpFormInterface {
  name: string;
  pwd: string;
  gender: string | number; //number로 변경 가능
  major: string;
  email: string;
  age: number;
  grade: number;
  profile_photo?: string;
  kakao_link: string;
}
