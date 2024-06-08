/* eslint-disable react/prop-types */
export function LeftArrow({ fill, stroke }) {
  return (
<svg
       className={`fill-${fill}`}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" />
        <path
          d="M14.528 7.53269C14.8222 7.24111 14.8243 6.76624 14.5327 6.47204C14.2411 6.17784 13.7662 6.17573 13.472 6.46731L11.6773 8.2461C11.0013 8.91604 10.4489 9.46359 10.0571 9.95146C9.64963 10.4588 9.35469 10.9737 9.27591 11.5918C9.24136 11.8629 9.24136 12.1371 9.27591 12.4082C9.35469 13.0263 9.64963 13.5412 10.0571 14.0485C10.4489 14.5364 11.0013 15.084 11.6773 15.7539L13.472 17.5327C13.7662 17.8243 14.2411 17.8222 14.5327 17.528C14.8243 17.2338 14.8222 16.7589 14.528 16.4673L12.765 14.72C12.0495 14.0109 11.5587 13.5228 11.2266 13.1093C10.904 12.7076 10.7933 12.4496 10.7639 12.2185C10.7454 12.0734 10.7454 11.9266 10.7639 11.7815C10.7933 11.5504 10.904 11.2924 11.2266 10.8907C11.5587 10.4772 12.0495 9.98914 12.765 9.28L14.528 7.53269Z"
          className={`fill-${stroke}`}
        />
      </svg>
  );
}