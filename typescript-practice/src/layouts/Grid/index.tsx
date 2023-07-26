import { ReactNode } from 'react';

import { GridGapSize } from '@/constants';

import './index.css';

interface GridStyle {
  columns: '1' | '2' | '3';
  columnGap: GridGapSize;
  rowGap: GridGapSize;
}

interface GridProps extends GridStyle {
  children: ReactNode;
}

const buildGridClassNames = ({
  columns,
  columnGap,
  rowGap,
}: GridStyle) => `grid-container 
  grid-columns-${columns} 
  grid-columns-gap-${columnGap} 
  grid-rows-gap-${rowGap}
`;

export const Grid = ({ columns, columnGap, rowGap, children }: GridProps) => {
  return (
    <div className={buildGridClassNames({ columns, columnGap, rowGap })}>
      {children}
    </div>
  );
};
