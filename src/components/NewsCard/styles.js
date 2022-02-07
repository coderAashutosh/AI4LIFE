import { makeStyles } from "@material-ui/core";

export default makeStyles({
    media: {
        height: 250,
        // if we have t,o make height in px, we can leave without giving any measure.
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid lightgray',
        boxShadow: '0px 5px 19px -4px rgba(255,255,255,0.9)'
    },
    activeCard: {
        borderBottom: '10px solid #22289a',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '0 16px',
        fontWeight: 'bold'
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    }
});