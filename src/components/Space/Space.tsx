import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export default function Space(props: Props): React.ReactElement {
  const { children } = props;

  return <main className="space bg-gray-800 w-screen h-screen">{children}</main>;
}
