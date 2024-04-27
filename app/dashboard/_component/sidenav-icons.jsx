export const DashboardIcon = ({isActive}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 10.5658C3 9.99143 3 9.70425 3.07403 9.43978C3.1396 9.20552 3.24737 8.98518 3.39203 8.78959C3.55534 8.56879 3.78202 8.39248 4.23539 8.03986L11.0177 2.76473C11.369 2.49148 11.5447 2.35485 11.7387 2.30233C11.9098 2.25599 12.0902 2.25599 12.2613 2.30233C12.4553 2.35485 12.631 2.49148 12.9823 2.76473L19.7646 8.03986C20.218 8.39248 20.4447 8.56879 20.608 8.78959C20.7526 8.98518 20.8604 9.20552 20.926 9.43978C21 9.70425 21 9.99143 21 10.5658V17.8007C21 18.9208 21 19.4809 20.782 19.9087C20.5903 20.285 20.2843 20.591 19.908 20.7827C19.4802 21.0007 18.9201 21.0007 17.8 21.0007H6.2C5.07989 21.0007 4.51984 21.0007 4.09202 20.7827C3.71569 20.591 3.40973 20.285 3.21799 19.9087C3 19.4809 3 18.9208 3 17.8007V10.5658Z"
      stroke={`${isActive?"#AF060D":"#777575"}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PolicyIcon = ({isActive}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#777575"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.7316 13.1947C13.661 12.9831 13.6257 12.8772 13.6276 12.7907C13.6295 12.6996 13.6417 12.6519 13.6836 12.5711C13.7235 12.4942 13.83 12.395 14.0432 12.1967C14.6318 11.649 15 10.8675 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 10.8675 9.36818 11.649 9.95681 12.1967C10.17 12.395 10.2765 12.4942 10.3164 12.5711C10.3583 12.6519 10.3705 12.6996 10.3724 12.7907C10.3743 12.8772 10.339 12.9831 10.2684 13.1947L9.35099 15.947C9.23249 16.3025 9.17324 16.4803 9.20877 16.6218C9.23987 16.7456 9.31718 16.8529 9.42484 16.9216C9.54783 17 9.7352 17 10.1099 17H13.8901C14.2648 17 14.4522 17 14.5752 16.9216C14.6828 16.8529 14.7601 16.7456 14.7912 16.6218C14.8268 16.4803 14.7675 16.3025 14.649 15.947L13.7316 13.1947Z"
      stroke={`${isActive?"#AF060D":"#777575"}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const QuotesIcon = ({isActive}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.7991 2.10049L7.86912 4.59049C6.41912 4.95049 4.94912 6.42049 4.58912 7.87049L2.09912 17.8005C1.34912 20.8005 3.18912 22.6505 6.19912 21.9005L16.1291 19.4205C17.5691 19.0605 19.0491 17.5805 19.4091 16.1405L21.8991 6.20049C22.6491 3.20049 20.7991 1.35049 17.7991 2.10049Z"
      stroke="#777575"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
      stroke={`${isActive?"#AF060D":"#777575"}`}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TransactionsIcon = ({isActive}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 10H2M11 14H6M2 8.2L2 15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.07989 19 5.2 19L18.8 19C19.9201 19 20.4802 19 20.908 18.782C21.2843 18.5903 21.5903 18.2843 21.782 17.908C22 17.4802 22 16.9201 22 15.8V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5L5.2 5C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.07989 2 8.2Z"
      stroke={`${isActive?"#AF060D":"#777575"}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ClaimsIcon = ({isActive}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5295 8.35186C12.9571 8.75995 12.2566 9 11.5 9C9.567 9 8 7.433 8 5.5C8 3.567 9.567 2 11.5 2C12.753 2 13.8522 2.65842 14.4705 3.64814M6 20.0872H8.61029C8.95063 20.0872 9.28888 20.1277 9.61881 20.2086L12.3769 20.8789C12.9753 21.0247 13.5988 21.0388 14.2035 20.9214L17.253 20.3281C18.0585 20.1712 18.7996 19.7854 19.3803 19.2205L21.5379 17.1217C22.154 16.5234 22.154 15.5524 21.5379 14.9531C20.9832 14.4134 20.1047 14.3527 19.4771 14.8103L16.9626 16.6449C16.6025 16.9081 16.1643 17.0498 15.7137 17.0498H13.2855L14.8311 17.0498C15.7022 17.0498 16.4079 16.3633 16.4079 15.5159V15.2091C16.4079 14.5055 15.9156 13.892 15.2141 13.7219L12.8286 13.1417C12.4404 13.0476 12.0428 13 11.6431 13C10.6783 13 8.93189 13.7988 8.93189 13.7988L6 15.0249M20 6.5C20 8.433 18.433 10 16.5 10C14.567 10 13 8.433 13 6.5C13 4.567 14.567 3 16.5 3C18.433 3 20 4.567 20 6.5ZM2 14.6L2 20.4C2 20.9601 2 21.2401 2.10899 21.454C2.20487 21.6422 2.35785 21.7951 2.54601 21.891C2.75992 22 3.03995 22 3.6 22H4.4C4.96005 22 5.24008 22 5.45399 21.891C5.64215 21.7951 5.79513 21.6422 5.89101 21.454C6 21.2401 6 20.9601 6 20.4V14.6C6 14.0399 6 13.7599 5.89101 13.546C5.79513 13.3578 5.64215 13.2049 5.45399 13.109C5.24008 13 4.96005 13 4.4 13L3.6 13C3.03995 13 2.75992 13 2.54601 13.109C2.35785 13.2049 2.20487 13.3578 2.10899 13.546C2 13.7599 2 14.0399 2 14.6Z"
      stroke={`${isActive?"#AF060D":"#777575"}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SettingsIcon = ({isActive}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.39504 19.3711L9.97949 20.6856C10.1532 21.0768 10.4368 21.4093 10.7957 21.6426C11.1547 21.8759 11.5736 22.0001 12.0017 22C12.4298 22.0001 12.8488 21.8759 13.2077 21.6426C13.5667 21.4093 13.8502 21.0768 14.0239 20.6856L14.6084 19.3711C14.8164 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5677 17.8941 17.0784 17.9478L18.5084 18.1C18.934 18.145 19.3636 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8714 16.635 20.9735 16.2103 20.951 15.7829C20.9285 15.3555 20.7825 14.9438 20.5306 14.5978L19.6839 13.4344C19.3825 13.0171 19.2214 12.5148 19.2239 12C19.2238 11.4866 19.3864 10.9864 19.6884 10.5711L20.535 9.40778C20.7869 9.06175 20.933 8.65007 20.9554 8.22267C20.9779 7.79528 20.8759 7.37054 20.6617 7C20.4478 6.62923 20.1309 6.32849 19.7495 6.13423C19.3681 5.93997 18.9385 5.86053 18.5128 5.90556L17.0828 6.05778C16.5722 6.11141 16.0576 6.00212 15.6128 5.74556C15.1699 5.48825 14.8199 5.09736 14.6128 4.62889L14.0239 3.31444C13.8502 2.92317 13.5667 2.59072 13.2077 2.3574C12.8488 2.12408 12.4298 1.99993 12.0017 2C11.5736 1.99993 11.1547 2.12408 10.7957 2.3574C10.4368 2.59072 10.1532 2.92317 9.97949 3.31444L9.39504 4.62889C9.18797 5.09736 8.83792 5.48825 8.39504 5.74556C7.95026 6.00212 7.43571 6.11141 6.92504 6.05778L5.4906 5.90556C5.06493 5.86053 4.63534 5.93997 4.25391 6.13423C3.87249 6.32849 3.55561 6.62923 3.34171 7C3.12753 7.37054 3.02549 7.79528 3.04798 8.22267C3.07046 8.65007 3.2165 9.06175 3.46838 9.40778L4.31504 10.5711C4.61698 10.9864 4.77958 11.4866 4.77949 12C4.77958 12.5134 4.61698 13.0137 4.31504 13.4289L3.46838 14.5922C3.2165 14.9382 3.07046 15.3499 3.04798 15.7773C3.02549 16.2047 3.12753 16.6295 3.34171 17C3.55582 17.3706 3.87274 17.6712 4.25411 17.8654C4.63548 18.0596 5.06496 18.1392 5.4906 18.0944L6.9206 17.9422C7.43127 17.8886 7.94581 17.9979 8.3906 18.2544C8.83513 18.511 9.18681 18.902 9.39504 19.3711Z"
      stroke={`${isActive?"#AF060D":"#777575"}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9999 15C13.6568 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6568 9 11.9999 9C10.3431 9 8.99992 10.3431 8.99992 12C8.99992 13.6569 10.3431 15 11.9999 15Z"
      stroke="#777575"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);