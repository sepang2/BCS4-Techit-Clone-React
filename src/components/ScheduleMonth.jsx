import { useState } from "react";
import NextIcon from "../icons/NextIcon";
import PrevIcon from "../icons/PrevIcon";

const monthData = [
  {
    date: "2023년 11월",
    comp: (
      <div className="w-full h-36 rounded-lg border hover:shadow-lg flex">
        <div className="w-52 h-full">
          <img
            className="rounded-l-lg h-full w-full object-cover"
            src="./images/kdt_android.webp"
            alt="kdt_android"
          />
        </div>
        <div className="p-4 flex flex-col justify-center items-start">
          <span className="kdt-ing">모집중</span>
          <h3 className="text-xl mt-2 mb-1 font-bold">앱 스쿨 : Android</h3>
          <h5 className="text-lg mb-1">
            앱 기초부터 앱 배포까지 실무에 능한 주니어 앱 개발자로 성장
          </h5>
          <div className="text-techit-gray-200">23.11.01 ~ 23.11.30 까지</div>
        </div>
      </div>
    ),
  },
  {
    date: "2023년 12월",
    comp: (
      <div className="w-full h-36 rounded-lg border hover:shadow-lg flex">
        <div className="w-52 h-full">
          <img
            className="rounded-l-lg h-full w-full object-cover"
            src="./images/kdt_design.webp"
            alt="kdt_design"
          />
        </div>
        <div className="p-4 flex flex-col justify-center items-start">
          <span className="kdt-alarm">사전알림신청</span>
          <h3 className="text-xl mt-2 mb-1 font-bold">디자인 스쿨 2기</h3>
          <h5 className="text-lg mb-1">
            경쟁력 있는 커리어의 시작, 프로젝트 중심 UX/UI 교육
          </h5>
          <div className="text-techit-gray-200">23.12.01 ~ 23.12.30 까지</div>
        </div>
      </div>
    ),
  },
  {
    date: "2024년 01월",
    comp: (
      <div className="w-full h-36 rounded-lg border hover:shadow-lg flex">
        <div className="w-52 h-full">
          <img
            className="rounded-l-lg h-full w-full object-cover"
            src="./images/kdt_backend_python.webp"
            alt="kdt_python"
          />
        </div>
        <div className="p-4 flex flex-col justify-center items-start">
          <span className="kdt-alarm">사전알림신청</span>
          <h3 className="text-xl mt-2 mb-1 font-bold">
            백엔드 스쿨 9기 : Python
          </h3>
          <h5 className="text-lg mb-1">
            파이썬으로 배우는 백엔드 / 데브옵스 선택형 과정
          </h5>
          <div className="text-techit-gray-200">24.01.01 ~ 24.01.31 까지</div>
        </div>
      </div>
    ),
  },
];

const ScheduleMonth = () => {
  const [currentMonth, setCurrentMonth] = useState(0);

  const onClickPrev = () => {
    if (currentMonth > 0) setCurrentMonth(currentMonth - 1);
  };

  const onClickNext = () => {
    if (currentMonth < monthData.length - 1) setCurrentMonth(currentMonth + 1);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <button onClick={onClickPrev}>
          <PrevIcon size="w-6 h-6" />
        </button>
        <span className="mx-2 text-2xl font-semibold">
          {monthData[currentMonth].date}
        </span>
        <button onClick={onClickNext}>
          <NextIcon size="w-6 h-6" />
        </button>
      </div>
      <div className="mt-4 px-6 w-full">{monthData[currentMonth].comp}</div>
    </div>
  );
};

export default ScheduleMonth;
