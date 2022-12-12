import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";

const classes = {
  messageRow: {
    display: "flex",
  },
  messageRowRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  messageBlue: {
    position: "relative",
    marginLeft: "20px",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#F4D4C2",
    width: "80%",
    //height: "50px",
    textAlign: "left",
    font: "400 .9em 'Open Sans', sans-serif",
    borderRadius: "10px",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "15px solid #A8DDFD",
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      top: "0",
      left: "-15px",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "17px solid #97C6E3",
      borderLeft: "16px solid transparent",
      borderRight: "16px solid transparent",
      top: "-1px",
      left: "-17px",
    },
  },
  messageOrange: {
    position: "relative",
    marginRight: "20px",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#E7E7E7",
    width: "60%",
    //height: "50px",
    textAlign: "left",
    font: "400 .9em 'Open Sans', sans-serif",
    borderRadius: "10px",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "15px solid #f8e896",
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      top: "0",
      right: "-15px",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "17px solid #dfd087",
      borderLeft: "16px solid transparent",
      borderRight: "16px solid transparent",
      top: "-1px",
      right: "-17px",
    },
  },

  messageContent: {
    paddingBottom: "10px",
    margin: 0,
    minHeight: "30px",
    minWidth: "190px",
  },
  messageTimeStampRight: {
    position: "absolute",
    fontSize: ".85em",
    fontWeight: "300",
    marginTop: "10px",
    bottom: "1px",
    right: "5px",
  },

  orange: {
    color: "grey",
    backgroundColor: deepOrange[500],
    width: "auto",
    height: "auto",
  },
  avatarNothing: {
    color: "transparent",
    backgroundColor: "transparent",
    width: "auto",
    height: "auto",
  },
  displayName: {
    marginLeft: "20px",
  },
};

//avatarが左にあるメッセージ（他人）
export const MessageLeft = (props) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL
    ? props.photoURL
    : "../assets/images/icon.png";
  const displayName = props.displayName ? props.displayName : "Quinn";

  return (
    <>
      <div style={classes.messageRow}>
        <Avatar
          alt={displayName}
          sx={classes.orange}
          src={"../assets/images/icon.png"}
        ></Avatar>
        <div>
          <div style={classes.displayName}>{displayName}</div>
          <div style={classes.messageBlue}>
            <div>
              <p style={classes.messageContent}>{message}</p>
            </div>
            <div style={classes.messageTimeStampRight}>{timestamp}</div>
          </div>
        </div>
      </div>
    </>
  );
};
//avatarが右にあるメッセージ（自分）
export const MessageRight = (props) => {
  const { message, timestamp } = props;
  return (
    <div style={classes.messageRowRight}>
      <div style={classes.messageOrange}>
        <p style={classes.messageContent}>{message}</p>
        <div style={classes.messageTimeStampRight}>{timestamp}</div>
      </div>
    </div>
  );
};
