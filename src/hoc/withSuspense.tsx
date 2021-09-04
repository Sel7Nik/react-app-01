import React from 'react';

export const withSuspense = (Component: React.ComponentType) => {
  return (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => {
    return (
      <React.Suspense fallback={<div> Loading...</div>}>
        < Component {...props} />
      </React.Suspense>
    );
  };
};

// export function withSuspense<WrapComponent>(Component: React.ComponentType<WrapComponent>) {
//   return (props: WrapComponent) => {
//     return (
//       <React.Suspense fallback={<div> Loading...</div>}>
//         < Component {...props} />
//       </React.Suspense>
//     );
//   };
// };

// Two variant
