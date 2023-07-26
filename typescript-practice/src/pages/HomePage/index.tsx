import { useEffect, useState } from 'react';

import { ProtectedLayout } from '@/layouts';

import { ListProducts, Sidebar, LoadingSpinner, Toast } from '@/components';

import { useToast } from '@/contexts';

import { MAX_LIMIT_LIST_PRODUCTS } from '@/constants';

import { Product, FieldOrder, DirectionOrder } from '@/interfaces';

import { getListProducts } from '@/services';

import './index.css';

interface Order {
  direction: DirectionOrder;
  field: FieldOrder;
}

export const HomePage = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [order, setOrder] = useState<Order>();
  const [valueSelected, setValueSelected] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { toast, showToast } = useToast();
  const { hasPopup, message, status } = toast;

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        setLoading(true);
        const data = await getListProducts(
          pageNumber,
          MAX_LIMIT_LIST_PRODUCTS,
          keyword,
          order?.field,
          order?.direction
        );

        pageNumber > 1
          ? setProducts([...products, data].flat())
          : setProducts(data);
        setIsDisabled(data.length < MAX_LIMIT_LIST_PRODUCTS);
      } catch {
        showToast({
          hasPopup: true,
          status: 'error',
          message: 'Error loading data, please reload the page',
        });
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [keyword, order?.field, order?.direction, pageNumber]);

  const handleSearch = (value: string): void => {
    setProducts([]);
    setPageNumber(1);
    setKeyword(value);
  };

  const handleSort = (field: FieldOrder, direction: DirectionOrder): void => {
    setProducts([]);
    setPageNumber(1);
    setOrder({ field: field, direction: direction });
    setValueSelected(`${field}-${direction}`);
  };

  const handleLoadMore = (): void => {
    setPageNumber(pageNumber + 1);
  };

  const handleClose = () => {
    showToast({ ...toast, hasPopup: false });
  };

  return (
    <ProtectedLayout>
      <Sidebar
        onSearch={handleSearch}
        onSort={handleSort}
        valueSelected={valueSelected}
      />
      {loading && <LoadingSpinner />}
      <ListProducts
        products={products}
        isDisabledBtnLoadMore={isDisabled}
        increasePageNumber={handleLoadMore}
      />
      {hasPopup && (
        <Toast status={status} message={message} onClose={handleClose} />
      )}
    </ProtectedLayout>
  );
};
