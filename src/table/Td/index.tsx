import React from 'react';
import { Highlight } from '../styled';

const highlightString = (str: string = '', search: string): string[] => {
  const result: string[] = [];
  const foundIndex = str.toLowerCase().indexOf(search.toLowerCase());

  if (foundIndex === -1) return [...result, str];

  const searchLen = search.length;

  return [
    ...result,
    `${str}`.slice(0, foundIndex),
    `${str}`.slice(foundIndex, foundIndex + searchLen),
    ...highlightString(`${str}`.slice(foundIndex + searchLen), search),
  ];
};

const renderSearchedChild = (
  child: React.ReactNode,
  search: string
): React.ReactNode => {
  const childString = child!.toString();
  const res = highlightString(childString, search);

  return (
    <>
      {res.map((str, index) =>
        index % 2 === 0 ? (
          <span key={`${str}${index}`}>{str}</span>
        ) : (
          <Highlight key={index}>{str}</Highlight>
        )
      )}
    </>
  );
};

const Td: React.FC<{ search: string }> = ({ children, search }) => {
  return (
    <td>
      {!search
        ? children
        : React.Children.map(children, child => {
            if (child === null) return null;
            return renderSearchedChild(child, search);
          })}
    </td>
  );
};

export default Td;
