import { makeStyles } from "@material-ui/core"
import { colors } from "../colors"

export const useGlobalStyles = makeStyles((theme) => ({
  "@global": {
    html: {
      scrollBehavior: "smooth",
      height: "100%",
    },
    body: {
      height: "100%",
      fontFamily: "'Inter', sans-serif",
      lineHeight: 1.5,
      fontSize: 20,
      color: colors.paragraph,
    },
    "#root": {
      height: "100%",
    },
    p: {
      color: colors.paragraph,
    },
    "h1, h2, h3, h4": {
      color: colors.headings,
      margin: "0 0 10px",
    },
    h1: {
      fontSize: 60,
    },
    h2: {
      fontSize: 40,
    },
    h3: {
      fontSize: 30,
    },
    "@media screen and (min-width: 1024px)": {
      body: {
        fontSize: 18,
      },
      h1: {
        fontSize: 80,
      },
      h2: {
        fontSize: 40,
      },
      h3: {
        fontSize: 30,
      },
    },
  },
}))
