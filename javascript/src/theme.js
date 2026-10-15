
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#2563EB",
      dark: "#1D4ED8",
      light: "#DBEAFE",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#64748B",
      dark: "#334155",
      light: "#E2E8F0",
      contrastText: "#FFFFFF",
    },

    background: {
      default: "#F4F7FB",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#0F172A",
      secondary: "#64748B",
    },

    divider: "#E2E8F0",

    success: {
      main: "#059669",
      light: "#D1FAE5",
    },

    warning: {
      main: "#D97706",
      light: "#FEF3C7",
    },

    error: {
      main: "#DC2626",
      light: "#FEE2E2",
    },

    info: {
      main: "#0284C7",
      light: "#E0F2FE",
    },
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',

    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      letterSpacing: "-0.04em",
    },

    h2: {
      fontSize: "1.5rem",
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },

    h3: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },

    h4: {
      fontSize: "1.125rem",
      fontWeight: 600,
    },

    h5: {
      fontSize: "1rem",
      fontWeight: 600,
    },

    h6: {
      fontSize: "0.875rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "0.9375rem",
      lineHeight: 1.6,
    },

    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },

    button: {
      fontSize: "0.875rem",
      fontWeight: 600,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minHeight: "100%",
        },

        body: {
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "#F4F7FB",
        },

        "*": {
          boxSizing: "border-box",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          minHeight: 40,
          borderRadius: 8,
          padding: "8px 16px",
        },

        containedPrimary: {
          boxShadow: "none",

          "&:hover": {
            boxShadow: "none",
          },
        },

        outlined: {
          borderColor: "#E2E8F0",

          "&:hover": {
            borderColor: "#CBD5E1",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },

        rounded: {
          borderRadius: 12,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #E8EDF4",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(15, 23, 42, 0.03)",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        size: "small",
        fullWidth: true,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: "#FFFFFF",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#DCE3ED",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#94A3B8",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2563EB",
            borderWidth: 1,
          },
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #E8EDF4",
          padding: "14px 16px",
        },

        head: {
          backgroundColor: "#F8FAFC",
          color: "#64748B",
          fontSize: "0.75rem",
          fontWeight: 700,
          textTransform: "uppercase",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
