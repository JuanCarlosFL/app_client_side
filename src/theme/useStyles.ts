import { createMuiTheme, makeStyles } from "@material-ui/core";

const theme = createMuiTheme();

export const useStyles = makeStyles({
    containermt: {
        marginTop: 30
    },
    card: {
        padding: 30
    },
    avatar: {
        backgroundColor: '#0f80aa',
        width: 80,
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    icon: {
        fontSize: 60
    },
    form: {
        marginTop: 40,
        marginBottom: 10
    },
    gridmb: {
        marginBottom: 10
    },
    link: {
        marginTop: 8,
        fontSize: '1.1rem',
        fontFamily: 'Roboto',
        lineHeight: 1.5,
        color: theme.palette.primary.main,
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center'
    },
    appBar: {
        paddingTop: 8,
        paddingBotton: 8
    },
    grow: {
        flexGrow: 0,
        [theme.breakpoints.up('md')] : {
            flexGrow: 1
        }
    },
    linkAppBarLogo: {
        display: 'inline-flex',
        alignItems: 'center',
        color: 'inherit',
        textDecoration: 'none'
    },
    mr: {
        marginRight: 3
    },
    buttonIcon: {
        fontSize: 14,
        padding: 0
    },
    linkAppBarDesktop: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '6px 16px',
        color: 'inherit',
        textDecoration: 'none'
    },
    list: {
        width: 250
    },
    listItem: {
        padding: 0
    },
    linkAppBarMobile: {
        display: 'inline-flex',
        alignItems: 'center',
        width: '100%',
        padding: '8px 16px',
        color: 'inherit',
        textDecoration: 'none'
    },
    ListItemIcon: {
        minWidth: 35
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')] : {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        flexGrow: 1,
        [theme.breakpoints.up('md')] : {
            display: 'none'
        }
    },
    
});