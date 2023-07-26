import { Grid } from '@/layouts';

import { Button, ProductCard } from '@/components';

import { GridGapSize } from '@/constants';

import { Product } from '@/interfaces';

import './index.css';

interface ListProductsProps {
  products: Product[];
  isDisabledBtnLoadMore: boolean;
  increasePageNumber: () => void;
}

export const ListProducts = ({
  products,
  isDisabledBtnLoadMore,
  increasePageNumber,
}: ListProductsProps) => {
  return (
    <div className="list-products">
      <Grid
        columns="3"
        rowGap={GridGapSize.Large}
        columnGap={GridGapSize.Large}
      >
        {products.map(
          ({ id, quantity, discountPercent, image, name, price }) => (
            <ProductCard
              id={id}
              quantity={quantity}
              discountPercent={discountPercent}
              image={image}
              name={name}
              price={price}
              key={id}
            />
          )
        )}
      </Grid>
      {products.length > 0 && (
        <Button
          type="button"
          onClick={increasePageNumber}
          className="btn-primary btn-large"
          isDisabled={isDisabledBtnLoadMore}
        >
          load more
        </Button>
      )}
    </div>
  );
};
