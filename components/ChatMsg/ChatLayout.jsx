import { useState } from "react";
import { Paper } from "@material-ui/core";
import { TextInput } from "./TextInput.jsx";
import { MessageLeft, MessageRight } from "./ChatMsg";
import useChatScroll from "hooks/useChatScroll.js";

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
    overflowY: "scroll",
  },
  container: {
    width: "auto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  messagesBody: {
    width: "calc( 100% - 20px )",
    margin: 10,
    overflowY: "scroll",
    height: "calc( 100% - 80px )",
    padding: "10px",
    boxShadow: "none",
    "&:-webkit-scrollbar": {
      display: "none",
    },
  },
};

export default function ChatLayout() {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessage = () => {
    setMessages([...messages, { name: "User", message: userMessage }]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: JSON.stringify({ message: userMessage }),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      let chatbotMsg = { name: "Faris", message: result.answer };
      setMessages([...messages, chatbotMsg]);
      setUserMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(messages);
  const ref = useChatScroll(messages?.map((item) => item.message));

  return (
    <div style={classes.container}>
      <Paper style={classes.paper} zDepth={2}>
        <Paper id="style-1" style={classes.messagesBody} ref={ref}>
          <MessageLeft
            message="Hello, how can I help you?"
            photoURL="Link thisssss "
            displayName=""
            avatarDisp={true}
          />
          {messages.length >= 1
            ? messages.map((val, idx) => {
                if (val.name === "Faris") {
                  return (
                    <MessageLeft
                      key={idx}
                      message={val.message}
                      photoURL="Link thisssss "
                      displayName=""
                      avatarDisp={true}
                    />
                  );
                } else {
                  return (
                    <MessageRight
                      key={idx}
                      message={val.message}
                      photoURL="Link thisssss "
                      displayName="you"
                      avatarDisp={false}
                    />
                  );
                }
              })
            : null}
        </Paper>
        <TextInput
          handleSubmit={handleFormSubmit}
          handleSend={handleMessage}
          userMessage={userMessage}
          setUserMessage={setUserMessage}
        />
      </Paper>
    </div>
  );
}
