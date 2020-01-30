import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import logo from '../../assets/logo.svg';

import firebase from 'firebase';

const SearchHistory = ({ match }) => {
  const styles = useStyles();
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      const uid = JSON.parse(localStorage.getItem('user')).uid;
      const res = firebase.database().ref('historic/' + uid);

      await res.on('value', snapshot => {
        const history = snapshot.val();

        if (history) {
          var result = Object.keys(history).map(key => {
            return [key, history[key]];
          });
          setHistories(result);
        }
      });
    };
    getHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDate = datetime => {
    const date = new Date(datetime);
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month =
      date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    return `${day}/${month}/${date.getFullYear()}`;
  };

  return (
    <Container className={styles.Container} maxWidth='sm'>
      <div className={styles.Header}>
        <img src={logo} alt='logo' className={styles.logo} />
      </div>
      <Paper elevation={3} className={styles.containerHistory}>
        <Typography
          className={styles.titleContent}
          variant='subtitle1'
          color='secondary'
          align='center'
        >
          Seu histórico de busca
        </Typography>
        {histories ? (
          histories.map(history => (
            <p key={history[0]} className={styles.history}>
              {`${getDate(history[1].datetime)} - ${history[1].artistSearch}`}
            </p>
          ))
        ) : (
          <></>
        )}
      </Paper>
    </Container>
  );
};

export default SearchHistory;
