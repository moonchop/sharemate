import create from "zustand";

interface User {
  userID: number;
  email: string;
  gender: boolean;
  name: string;
  major: string;
  grade: number;
  age: number;
  kakao_link: string;
  profile_photo: string;
  hashtag_list: string[];
  setUser: (user: userProps) => void;
  setEditUser: (user: userEditProps) => void;
}

interface userProps {
  userID: number;
  email: string;
  gender: boolean; // 여자 0, 남자 1
  name: string;
  major: string;
  grade: number;
  age: number;
  kakao_link: string;
  profile_photo: string;
  hashtag_list: string[];
}

interface userEditProps {
  name: string;
  major: string;
  grade: number;
  age: number;
  kakao_link: string;
  profile_photo: string;
}

export const useUser = create<User>((set) => ({
  userID: 0,
  email: "",
  gender: false,
  name: "",
  major: "",
  grade: 0,
  age: 0,
  kakao_link: "",
  profile_photo: "",
  hashtag_list: [],
  setUser: (user: userProps) => {
    set((state) => ({
      userID: user.userID,
      email: user.email,
      gender: user.gender,
      name: user.name,
      major: user.major,
      grade: user.grade,
      age: user.age,
      kakao_link: user.kakao_link,
      profile_photo: user.profile_photo,
      hashtag_list: user.hashtag_list,
    }));
  },
  setEditUser: (user: userEditProps) => {
    set((state) => ({
      name: user.name,
      major: user.major,
      grade: user.grade,
      age: user.age,
      kakao_link: user.kakao_link,
      profile_photo: user.profile_photo,
    }));
  },
}));

interface Favor {
  mbti: string;
  sleepTime: string;
  smoking: string;
  wakeupTime: string;
  drinking: string;
  studyTime: string;
  cleanness: string;
  snoring: string;
  setFavor: (favor: favorProps) => void;
}

interface favorProps {
  mbti: string;
  sleepTime: string;
  smoking: string;
  wakeupTime: string;
  drinking: string;
  studyTime: string;
  cleanness: string;
  snoring: string;
}

export const useFavor = create<Favor>((set) => ({
  mbti: "",
  sleepTime: "",
  smoking: "",
  wakeupTime: "",
  drinking: "",
  studyTime: "",
  cleanness: "",
  snoring: "",
  setFavor: (favor: favorProps) => {
    set((state) => ({
      mbti: favor.mbti,
      sleepTime: favor.sleepTime,
      smoking: favor.smoking,
      wakeupTime: favor.wakeupTime,
      drinking: favor.drinking,
      studyTime: favor.studyTime,
      cleanness: favor.cleanness,
      snoring: favor.snoring,
    }));
  },
}));
