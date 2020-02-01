import React from 'react';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';

const Pagination = ({ changePageNext, changePagePrev, page, totalPage }) => {
  const styles = useStyles();

  return (
    <nav className={styles.container}>
      <div className={styles.containerPrev}>
        {page > 1 ? (
          <Button
            className={styles.prev}
            color='primary'
            variant='contained'
            onClick={() => {
              changePagePrev();
            }}
          >
            Página Anterior
          </Button>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.containerNext}>
        {page !== totalPage ? (
          <Button
            className={styles.next}
            color='primary'
            variant='contained'
            onClick={() => {
              changePageNext();
            }}
          >
            Próxima Página
          </Button>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Pagination;
