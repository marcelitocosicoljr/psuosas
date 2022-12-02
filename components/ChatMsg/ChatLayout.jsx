import React from "react";
import { Paper } from "@material-ui/core";
import { TextInput } from "./TextInput.jsx";
import { MessageLeft, MessageRight } from "./ChatMsg";

const classes = {
    paper: {
      width: "90vw",
      height: "80vh",
      maxWidth: "400px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",

    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    container: {
      width: "auto",
      height: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )",
      padding:'10px',
      boxShadow:'none',
      '&:-webkit-scrollbar': {
        display: 'none'
    }
    }
  }


export default function ChatLayout() {

  return (
    <div style={classes.container}>
      <Paper style={classes.paper} zDepth={2}>
        <Paper id="style-1" style={classes.messagesBody}>
          <MessageLeft
            message="Hello I'm Pesyu! I am glad to hear your questions..."
            timestamp="Nov 3, 2022 / 2:11pm"
            photoURL="Link thisssss "
            displayName=""
            avatarDisp={true}
          />
          <MessageRight
            message="Nice"
            timestamp="Nov 3, 2022 / 2:11pm"
            photoURL="Link thisssss "
            displayName="you"
            avatarDisp={false}
          />
          <MessageLeft
            message="Hello"
            timestamp="Nov 3, 2022 / 2:11pm"
            photoURL="Link thisssss "
            displayName=""
            avatarDisp={true}
          />
          <MessageRight
            message="Hi"
            timestamp="Nov 3, 2022 / 2:11pm"
            photoURL="Link thisssss "
            displayName="you"
            avatarDisp={true}
          />
        </Paper>
        <TextInput />
      </Paper>
    </div>
  );
}
