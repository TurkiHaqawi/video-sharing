import "./addV.css";

const AddVideo = () => {
  return (
    <div className="plus">
      <svg
        width="110"
        height="90"
        viewBox="0 0 126 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_30_542)">
          <ellipse cx="62" cy="47.3036" rx="54" ry="44.3036" fill="#E86BA7" />
        </g>
        <path
          d="M76.789 50.7503H65.461V61.9503H58.613V50.7503H47.285V44.3503H58.613V33.1503H65.461V44.3503H76.789V50.7503Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_d_30_542"
            x="0"
            y="0"
            width="126"
            height="106.607"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="6" />
            <feGaussianBlur stdDeviation="4.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_30_542"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_30_542"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default AddVideo;
