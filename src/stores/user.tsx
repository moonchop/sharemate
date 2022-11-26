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
  gender: boolean;
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
  sleep_time: string;
  smoking: string;
  wakeup_time: string;
  drinking: string;
  sutdy_time: string;
  cleanness: string;
  snoring: string;
  setFavor: (favor: favorProps) => void;
}

interface favorProps {
  mbti: string;
  sleep_time: string;
  smoking: string;
  wakeup_time: string;
  drinking: string;
  sutdy_time: string;
  cleanness: string;
  snoring: string;
}

export const useFavor = create<Favor>((set) => ({
  mbti: "",
  sleep_time: "",
  smoking: "",
  wakeup_time: "",
  drinking: "",
  sutdy_time: "",
  cleanness: "",
  snoring: "",
  setFavor: (favor: favorProps) => {
    set((state) => ({
      mbti: favor.mbti,
      sleep_time: favor.sleep_time,
      smoking: favor.smoking,
      wakeup_time: favor.wakeup_time,
      drinking: favor.drinking,
      sutdy_time: favor.sutdy_time,
      cleanness: favor.cleanness,
      snoring: favor.snoring,
    }));
  },
}));
