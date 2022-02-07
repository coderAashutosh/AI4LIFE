import { makeStyles } from "@material-ui/core";

export default makeStyles({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: '0',
        // height: '100vh',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '45vh',
        padding: '10%',
        borderRadius: 10,
        color: 'white',
        boxShadow: '0px 5px 19px -4px rgba(255,255,255,.9)'
        // Lightgray try
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
});

