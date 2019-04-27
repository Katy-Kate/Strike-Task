import React from "react";

export const EmptyFolderIcon = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <svg
        height="144"
        viewBox="0 0 144 144"
        width="144"
        xmlns="http://www.w3.org/2000/svg"
        zero-icon=""
      >
        <path
          d="M104.81 39.11h1.83v1.5h-1.83v1.83h-1.5v-1.83h-1.83v-1.5h1.83v-1.83h1.5v1.83zm38.88-9.56v1.5h-1.84v1.83h-1.5v-1.83h-1.83v-1.5h1.83v-1.84h1.5v1.84h1.84zm-97.14 2.08v1.5h-1.83v1.83h-1.5v-1.83h-1.83v-1.5h1.83V29.8h1.5v1.83h1.83zm55.96 42.97v1.5h-1.83v1.84h-1.5V76.1h-1.83v-1.5h1.83v-1.83h1.5v1.83h1.83zM16.9 46.34v1.5h-1.83v1.83h-1.5v-1.83h-1.84v-1.5h1.84v-1.83h1.5v1.83h1.83zM31.7 4.55v1.5h-1.84v1.83h-1.5V6.05h-1.83v-1.5h1.83V2.72h1.5v1.83h1.84zm5.84 104.16h8.41v1.5h-8.41v-1.5zm95.31-50.43l-.8.8v6.61a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75v-7c0-.966.784-1.75 1.75-1.75h7c.468 0 .917.19 1.24.53l.25-.25 1.06 1.06zm-2.3 7.43V60.6l-3.86 3.86-2.89-2.88 1.06-1.06 1.83 1.82 3.79-3.79a.26.26 0 0 0-.18-.09h-7a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25h7a.25.25 0 0 0 .25-.25zM11.64 21.11l-.83.8v6.64a1.76 1.76 0 0 1-1.75 1.75h-7a1.76 1.76 0 0 1-1.75-1.78v-7a1.76 1.76 0 0 1 1.78-1.75h7c.468 0 .916.192 1.24.53l.24-.25 1.07 1.06zm-2.3 7.44v-5.14l-3.87 3.87-2.88-2.89 1.06-1.06 1.82 1.85 3.8-3.79a.26.26 0 0 0-.18-.09h-7a.26.26 0 0 0-.25.25v7a.26.26 0 0 0 .25.25h7a.26.26 0 0 0 .25-.25zM67 11.35l-.84.8v6.6a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75v-7c0-.966.784-1.75 1.75-1.75h7c.47.002.918.197 1.24.54l.25-.25 1.1 1.06zm-2.3 7.43l-.01-5.13-3.86 3.86-2.89-2.88L59 13.57l1.8 1.82 3.83-3.77a.26.26 0 0 0-.18-.09h-7a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25h7a.25.25 0 0 0 .25-.25zm-8.3 108.83l1.74 1.5h-9.96l1.75-1.5h6.47zm3.98 0h48.73v1.5H60.38v-1.5zm-51.52 7.5v4.1h-1.5v-16.5h1.5v4.9h37.09v1.5H8.86v4.5h100.25v1.5H8.86zM79.33 25.5l1.05-1.05-.54-.54 6.77 6.51-56.9 56.73a.23.23 0 0 0-.06.27.25.25 0 0 0 .23.16l78.86-.36v9h-1.5v-7.46l-77.35.35a1.75 1.75 0 0 1-1.23-3l55.8-55.67-5.13-4.94zm57.02 78.2h1.5v11.52h-1.5v-5.01h-76v-1.5h76v-5.01zM67.7 63.21h11.1v16.38l-5.55-4.54-5.55 4.54V63.21zm9.6 13.21l.1-11.71h-8.1v11.71l4-3.31 4 3.31zm28.45-74.21h11.11v16.38l-5.56-4.54-5.55 4.54V2.21zm9.61 13.21l.05-11.71h-8.11v11.71l4-3.31 4.06 3.31z"
          fill="blue"
        />
        <path
          d="M37.58 103.7h100.28v-3h3.25v-1.5h-32.36v-3H29.12c-1.63 0-1.74-.22-2.32-1.46-.17-.34-4.27-8.82-4.36-9-.72-1.78-1-2.44 1.08-4.42l56.86-56.87-2.12-2.12 2.3-2.3L79.5 19 20.25 78.22c-4.47 4.51-4.11 5.3-1.28 11.44l2.61 5.68c2.26 5.16 2.58 5.37 8.41 5.37h2.69c-2.2 1.66-3.4 4.65-3.4 8.75l.06.75c.14 3.71 1.32 6.44 3.37 8H4.11v1.5h3.25v3H46V131l7.21-6.2 7.22 6.2v-8.32H109c4 0 4.3 2.65 4.32 7.72v.66c0 2.47 0 4.6-.58 6-.41 1-1.17 2.07-3.74 2.07H7.36v3H4.11v1.5h105c7.4 0 8.65-5.94 8.74-12v-.75c0-4.46-.49-9-3.55-11.25h26.78v-1.5h-3.25v-3H60.38v-6.51H46v6.51h-8.42c-2.67 0-3.76-1.67-3.76-5.76v-.59c.08-3.57 1.18-5.08 3.76-5.08zm22.8 13h76v1.49h-76v-1.49zm0 3h48.73c5.1 0 7.18 3 7.31 10.5v.75c0 6.75-1.28 11.25-7.29 11.25H8.86v-1.5H109c2.65 0 4.33-1 5.14-3a17 17 0 0 0 .68-6l.06-.75c0-5 0-9.75-5.88-9.75H60.38v-1.5zm-12.93-9.5h11.43v17.55l-5.72-4.91-5.71 4.91V110.2zM30 99.21c-5.1 0-5.09 0-7-4.47-.63-1.33-2.67-5.74-2.67-5.74-2.75-6-2.75-6 1-9.76L77.2 23.39l1.06 1.06-55.78 55.78c-2.68 2.56-2.31 3.9-1.43 6.07l4.39 9.1c.72 1.52 1.22 2.31 3.69 2.31h78.12v1.5H30zm16 22H8.86v-1.5H46v1.5zm-13.72-11.75v.75c.1 3 .91 6.51 5.25 6.51H46v1.49h-8.41c-5.87 0-6.75-5.48-6.75-8.75v-.61c.11-3.3 1.22-8.14 6.79-8.14h98.77v1.49H37.58c-5.3 0-5.3 5.46-5.3 7.26z"
          fill="grey"
        />
      </svg>
      <p style={{ color: "grey" }}>Пока нет ни одной записи</p>
    </div>
  );
};
export const ZeroSearchIcon = () => {
  return (
    <svg
      fillRule="evenodd"
      height="140"
      viewBox="0 0 140 140"
      width="140"
      xmlns="http://www.w3.org/2000/svg"
      zero-icon=""
      className="_ngcontent-uqw-239"
    >
      <path
        d="M113.957 108.234L108.23 114l5.726 5.766h19.08L138.76 114l-5.724-5.766zM29.013 11.942l5.726-5.766L29.012.41h-22.9L.39 6.176l5.726 5.766zm105.83 36.686h-26.497l-4.913-4.12V40.39l4.913-4.117h19.65l4.913-4.12v-4.118l-4.915-4.118H84.1l2.742 2.72v6.353h5.908v4.613h-5.803V56.05h5.803v4.613h-5.844l1.62 19.732L90.29 98.05h22.97l4.91-4.12v-4.12l-4.91-4.116h-4.914l-4.913-4.12v-4.117l4.913-4.12h11.76l4.91-4.117V65.1l-4.91-4.118h14.737l4.912-4.118v-4.118zM48.265 36.272h-12.83l-4.912 4.12v4.117l4.913 4.117h4.913l4.91 4.12v4.117l-4.91 4.12H20.483l-4.913 4.118v4.118l-4.91 4.12H5.745L.833 77.456v4.12l4.913 4.117h31.41l4.91 4.12v4.117l-4.91 4.12H27.33l-4.913 4.117v4.12l4.913 4.117h21.833l1.597-15.362 2.71-34.38-5.206-.34V56.05h5.31V37.603h-5.31z"
        fill="#ffffff94"
      />
      <path
        d="M94.718 134.47L92.63 115.2l-15.32 6.312v12.958l-13.543-.677-.888-6.367-16.47 5.912.042 1.01-8.178.122v4.613h64.468v-4.613zM51.3 88.218l-2.672 21.403 41.787-15.806-2.4-19.646-12.98 4.844v6.94H65.98v-7.13l-.534 3.908zm6.857-32.167h24.21V37.604h-24.21V56.05zM92.75 37.604V32.99H48.265v4.613h5.31V56.05h-5.31v4.614H92.75V56.05h-5.804V37.604h5.804z"
        fill="#ffffff94"
      />
      <path
        d="M102.94 39.776l-1.053-1.06 9.56-9.628 1.052 1.06zm8.506 27.398l-9.56-9.627 1.055-1.06 9.56 9.626zm-5.802-18.443h13.03v-1.5h-13.03zm-67.357-8.954l-9.56-9.627 1.053-1.06 9.56 9.626zM29.78 67.174l-1.053-1.06 9.56-9.628 1.052 1.06zM22.55 48.73h13.032v-1.5H22.55zm79.447 89.603H39.02v-3.113h62.977v3.113zm-15.76-76.918L87.5 73.373l-12.147 4.71-2.523-2.54h-4.65l-2.944 2.967v3.498L51.63 87.286l2.515-25.87h32.09zm-37.227-1.5V56.8h42.995v3.114H49.01zm5.31-4.614h3.092V38.354H54.32V55.3zm-5.31-18.447V33.74h42.995v3.113H49.01zm5.908-9.907l10.454-10.528h10.272l10.454 10.528v5.294h-31.18v-5.294zM58.9 55.3h22.72V38.353H58.9V55.3zm24.21 0h3.09V38.353h-3.09V55.3zM66.728 85.2v-6.07l2.072-2.087h3.416l2.073 2.087v6.07h-7.563zM51.47 88.956l13.768-5.34V86.7h10.54v-7.173l11.887-4.61 1.95 18.403-40.08 15.546 1.934-19.91zm40.443 26.087l-13.86 5.375v-1.59l-4.207-4.237H67.17l-4.207 4.24v7.442l-15.712 6.094 2.123-21.83 40.405-15.672 2.136 20.18zm-13.86 6.983l14.024-5.44 1.813 17.133H78.054v-11.694zm-1.49 11.693h-12.11v-14.27l3.333-3.36h5.445l3.336 3.36v14.27zm-13.6 0H47.905l15.056-5.84v5.84zm32.425 0l-4.172-39.414.12-.047-.174-.46-3.428-32.386h5.76V55.3H87.69V38.353h5.805V32.24h-5.908v-5.915L76.26 14.918h-5.007v-6.48h-1.49v6.48h-5.008L53.43 26.325v5.915h-5.91v6.114h5.31V55.3h-5.31v6.114h5.13L45.62 133.72H37.53v6.112h65.956v-6.113h-8.098z"
        fill="#59697a"
      />
    </svg>
  );
};
