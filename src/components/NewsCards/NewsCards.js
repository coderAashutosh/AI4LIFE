import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core'

import useStyles from './style.js'
import NewsCard from '../NewsCard/NewsCard';

const infoCards = [
    { color: '#1c2da6', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#3611a6', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'CryptoCurrency, PlayStation 5, Smartphones, PM Modi...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'Translate', info: '', text: 'Translate Hello in French OR Anyword you want.' },
    { color: '#283593', title: 'Simple Calculations', info: '', text: 'Whats 2 plus 3 OR whats 20 multiply 2' },
    { color: '#283593', title: 'Ask Weather', info: '', text: 'Whats weather in Delhi' },
    { color: '#283593', title: 'Can do some chit-chat(Small talk)', info: '', text: 'How are you Or who made you?' },
    { color: '#283593', title: 'Calender', info: '', text: 'Whats the date today or tomorrow OR when did first man landed on moon' },
];


const NewsCards = ({ articles, activeArticle }) => {
    const classes = useStyles();

    if (!articles.length) {
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                    {infoCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                                <Typography variant='h5'>{infoCard.title}</Typography>
                                {infoCard.info ?
                                    (<Typography variant='h6'>
                                        <strong>
                                            {infoCard.title.split(' ')[2]};
                                        </strong>
                                        <br />
                                        {infoCard.info}
                                    </Typography>) : null}
                                <Typography variant='h6'>Try Saying: <br /> <i>{infoCard.text}</i></Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewsCard article={article} activeArticle={activeArticle} i={i} />
                    </Grid>
                ))}
            </Grid>
        </Grow>
    );
};



export default NewsCards;
