import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color: {
        primary: "#9C27B0",
        secondary: "#FF5722",
        error: "#E91E63"
    },
    typography: {
        fontFamily: "Roboto"
    },
    shape: {
        borderRadius: 4,
        backgroundColor: "#3F51B5",
        textColor: "#FFF",
        border: "#ccc"
    }
});

export default theme;