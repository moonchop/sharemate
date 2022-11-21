import create from "zustand";

interface User {
  email: string;
  gender: string;
  nickname: string;
  major: string;
  grade: string;
  age: string;
  kakao_link: string;
  profile_photo: string;
  setUser: (user: userProps) => void;
  setEditUser: (user: userEditProps) => void;
}

interface userProps {
  email: string;
  gender: string;
  nickname: string;
  major: string;
  grade: string;
  age: string;
  kakao_link: string;
  profile_photo: string;
}

interface userEditProps {
  nickname: string;
  major: string;
  grade: string;
  age: string;
  kakao_link: string;
  profile_photo: string;
}

export const useUser = create<User>((set) => ({
  email: "",
  gender: "",
  nickname: "",
  major: "",
  grade: "",
  age: "",
  kakao_link: "",
  profile_photo: "",
  setUser: (user: userProps) => {
    set((state) => ({
      email: user.email,
      gender: user.gender,
      nickname: user.nickname,
      major: user.major,
      grade: user.grade,
      age: user.age,
      kakao_link: user.kakao_link,
      profile_photo: user.profile_photo,
    }));
  },
  setEditUser: (user: userEditProps) => {
    set((state) => ({
      nickname: user.nickname,
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
