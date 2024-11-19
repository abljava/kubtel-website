import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("", className)}>
      <svg
        width="56"
        height="28"
        viewBox="0 0 56 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_325_1416)">
          <path
            d="M25.6768 25.3289V24.7712H26.7807C27.393 24.7712 27.9959 24.7341 28.1351 24.6783C28.3484 24.5946 28.6453 24.1206 28.6453 23.8603C28.6453 23.8046 28.1165 23.7581 27.4672 23.7302C26.1128 23.693 25.5841 23.5071 25.1573 22.9494C24.7399 22.4103 24.6657 22.0385 24.6564 20.6164V19.2872H25.3985H26.1406V20.4956C26.1406 21.7969 26.252 22.2523 26.5859 22.4382C26.6972 22.494 27.1982 22.5405 27.7084 22.5405H28.6453L28.6638 20.9417L28.6917 19.3337L29.4152 19.3058L30.1295 19.278V21.676C30.1295 22.9959 30.0924 24.2135 30.0368 24.3901C29.8883 24.9292 29.4894 25.4033 28.9885 25.6542C28.5432 25.868 28.4319 25.8866 27.0961 25.8866H25.6768V25.3289Z"
            fill="white"
          />
          <path
            d="M18.4504 23.628C18.3762 23.5257 18.3484 22.903 18.3669 21.4158L18.3948 19.3337L19.109 19.3058L19.8233 19.278L19.8512 20.0959L19.879 20.9139L20.482 20.886C21.1777 20.8395 21.289 20.7744 21.8827 19.8914L22.2909 19.2872H23.1072C23.5989 19.2872 23.9143 19.3244 23.9143 19.3802C23.9143 19.5382 22.6156 21.4251 22.5135 21.4251C22.4579 21.4251 22.5321 21.5645 22.6712 21.7318C23.1258 22.243 23.9328 23.5443 23.8679 23.6466C23.84 23.7023 23.4875 23.7488 23.0794 23.7488H22.3373L21.8363 23.0238C21.558 22.6241 21.2148 22.243 21.0849 22.1873C20.9551 22.1222 20.6211 22.0757 20.3428 22.0757H19.8419L19.8141 22.8937L19.7862 23.7023L19.174 23.7302C18.738 23.7488 18.5339 23.7209 18.4504 23.628Z"
            fill="white"
          />
          <path
            d="M32.5229 23.6186C31.9941 23.4792 31.688 23.284 31.4004 22.8936C31.0108 22.3731 30.9459 21.9734 30.983 20.1702C31.0108 18.3298 31.0479 18.1997 31.6323 17.6327C32.1054 17.1587 32.6527 17.0471 34.2669 17.075L35.649 17.1029L35.6769 17.5491C35.7233 18.2462 35.6769 18.2648 34.2205 18.2648C33.0053 18.2648 32.931 18.2741 32.7455 18.4786C32.6342 18.5994 32.5136 18.8225 32.4858 18.9898L32.4301 19.2872H33.6546C34.3318 19.2872 35.0461 19.3337 35.2409 19.3895C35.714 19.5382 36.2149 19.9657 36.4561 20.4305C36.7437 20.9789 36.7437 21.9734 36.4654 22.5032C36.1685 23.0609 35.5841 23.535 35.0275 23.6465C34.4246 23.7859 33.0609 23.7673 32.5229 23.6186ZM34.7214 22.4847C35.1203 22.3266 35.2965 21.267 34.9997 20.8116C34.7863 20.477 34.4988 20.4026 33.4134 20.4026H32.4487V21.0532C32.4487 21.7597 32.6064 22.2802 32.8847 22.4382C33.0609 22.5404 34.4709 22.5776 34.7214 22.4847Z"
            fill="white"
          />
          <path
            d="M39.1554 23.6928C39.0626 23.6556 39.0348 23.228 39.0348 22.0197V20.4024H38.1072H37.1795V19.8447V19.287L39.8047 19.3056L42.4207 19.3335V19.8447V20.3559L41.4745 20.3838L40.519 20.4117L40.5005 22.0569L40.4727 23.7021L39.8697 23.7206C39.5357 23.7299 39.2111 23.7114 39.1554 23.6928Z"
            fill="white"
          />
          <path
            d="M44.5546 23.6649C43.7846 23.4604 43.2095 22.912 42.9775 22.1498C42.8013 21.5456 42.8013 21.3969 42.9868 20.7649C43.1631 20.1607 43.7289 19.5658 44.2948 19.3985C44.7679 19.2591 47.1056 19.2498 47.5787 19.3892C48.3208 19.6123 48.8774 20.3094 49.0073 21.1645C49.1371 22.0104 49.2021 21.9825 47.0963 21.9825H45.241L45.2688 21.4992L45.2967 21.0065L46.3449 20.9786C46.9108 20.9694 47.3839 20.9229 47.3839 20.8764C47.3839 20.8392 47.3004 20.7277 47.1891 20.6254C47.0221 20.4767 46.8458 20.4488 45.9367 20.4488C44.6937 20.4488 44.5174 20.5418 44.4432 21.2668C44.3783 21.8059 44.4525 22.1126 44.7123 22.3543C44.8978 22.5309 45.0369 22.5402 46.7067 22.5402C48.2466 22.5402 48.5063 22.5588 48.562 22.6889C48.6269 22.8655 48.2837 23.2466 47.8013 23.4976C47.4859 23.6649 47.2447 23.6928 46.1316 23.7206C45.4173 23.7299 44.7123 23.702 44.5546 23.6649Z"
            fill="white"
          />
          <path
            d="M49.2762 23.6091C49.2484 23.5348 49.5638 22.6424 49.9719 21.6386C50.5192 20.3187 50.8068 19.7238 51.0109 19.5472C51.2799 19.2963 51.3077 19.287 52.4209 19.287C53.7011 19.287 53.8495 19.3428 54.1463 19.919C54.5638 20.737 55.6491 23.4976 55.6027 23.6184C55.5656 23.7114 55.3801 23.7485 54.9163 23.7485C54.1463 23.7485 54.1185 23.7206 53.6918 22.6331C53.0981 21.1181 52.792 20.5139 52.5879 20.4488C52.1983 20.328 51.9942 20.5976 51.3912 22.094C51.0665 22.8841 50.7604 23.5812 50.6955 23.6463C50.5378 23.8043 49.3411 23.7857 49.2762 23.6091Z"
            fill="white"
          />
          <path
            d="M16.5863 15.8113C16.5863 15.6904 16.6883 15.3744 16.8275 15.1142C17.3562 14.0545 17.4304 12.7997 17.0408 11.6286C16.9388 11.3311 16.8646 10.9965 16.8831 10.885C16.9109 10.7084 16.9666 10.6898 17.6067 10.7084C18.423 10.727 19.3692 10.9315 19.9815 11.2103C21.1225 11.7494 20.9926 12.9392 19.6568 14.2776C18.9703 14.9561 18.4137 15.3558 17.6067 15.7648C16.9109 16.1087 16.5863 16.1273 16.5863 15.8113Z"
            fill="white"
          />
          <path
            d="M4.85142 13.9052C2.44881 13.0407 0.91819 11.3955 0.287389 8.98816C0.0833065 8.20739 0.0462006 7.82629 0.00909465 6.1811C-0.0743937 2.64904 0.407983 1.0875 1.82728 0.250962C2.2169 0.0185898 2.33749 0 3.18165 0C4.25772 0 4.53602 0.102244 6.08519 1.01314C8.02397 2.14712 10.5564 4.23847 13.2095 6.87822C14.8515 8.51412 16.1687 9.97341 16.3357 10.3545C16.4841 10.6705 16.2615 10.7914 15.3709 10.8657C14.9628 10.9029 14.0444 11.0516 13.3301 11.2003C11.0017 11.6837 9.17426 12.3064 7.05922 13.3475C6.23361 13.7471 5.51005 14.0818 5.43583 14.0725C5.3709 14.0725 5.11116 13.9981 4.85142 13.9052Z"
            fill="white"
          />
          <path
            d="M4.75833 26.1004C4.13681 25.775 3.72864 25.1709 3.51528 24.26C3.32048 23.4234 3.12567 21.5923 3.07929 20.1237C3.01435 18.4135 3.13495 17.6513 3.64515 16.6196C3.98838 15.9225 4.98096 14.8071 5.3613 14.6862C5.47262 14.6491 5.81585 14.7513 6.26112 14.9558C8.70083 16.0526 11.7992 16.5638 14.5914 16.3314C16.558 16.1641 16.558 16.1827 14.6378 18.6273C11.1684 23.0423 8.75649 25.301 6.72494 26.0539C6.07559 26.2956 5.16649 26.3234 4.75833 26.1004Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_325_1416"
            x="0"
            y="0"
            width="55.6042"
            height="27.2526"
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
            <feOffset dy="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_325_1416"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_325_1416"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Link>
  );
}