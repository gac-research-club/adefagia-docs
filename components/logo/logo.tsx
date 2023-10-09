import type { FC } from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: FC<LogoProps> = (props) => {
  const { width, height } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 816 817"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#000"
        d="M219 0L0 616l534.5 137 30.5 63.5 45.5-11.5L816 225.5l-40-11L492.5 345l-136-290L219 0z"
      ></path>
      <path
        fill="#DBDBDB"
        fillRule="evenodd"
        d="M581.831 779.607l191.413-525.905-121.762 56.779-126.43 347.363 56.779 121.763zM239.353 45l-.144.395L509.818 625.72l31.44-86.38-214.77-460.577L239.353 45z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M619.033 325.655l-145.69 67.936 19.018 40.784 104.906-48.919 21.766-59.801zM277.373 339.271l-26.895-57.677-90.686 249.158 12.268 3.287 31.365 8.404 36.257 9.715 89.666-41.812-19.018-40.783-96.81 45.143 63.853-175.435z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M196.609 166.072l31.362-86.165.078-.216 299.694 642.697-81.96-21.961-210.325-451.044-108.617 298.422 189.293 50.72 35.86 76.902L41.5 592.23l.044-.119 22.272-61.194L196.61 166.072z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Logo;
