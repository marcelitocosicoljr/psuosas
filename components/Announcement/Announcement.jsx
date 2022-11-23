import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { primaryColor } from "../../styles/Utility/colorTheme";
import Hero from "../Hero/Hero";
import { styles } from "./stlyles";

const Announcement = () => {
  const [age, setAge] = useState("");

  const [caption, setCaption] =
    useState(`Let's take a look back at the spectacular event and how it showcased the talents and skills of PSUans!

    The morning program was held at the PSU Amphitheater, presided by our Masters of Ceremony, Ms. Glyza Glynn Almeniana and Mr. Jethro Sandrino. We are then welcomed by Dr. Elucila M. Sespeñe, the Vice President for Academic Affairs. This is followed by an inspirational message from the University President, Dr. Ramon M. Docto. We have been also graced with a message by our esteemed guest, Atty. Joselito C. Alisuag, PhD, CSEE, the CHED-MIMAROPA Regional Director.

    PSU Sining Palawan Dance Troupe then performed an intermission number before the seminar proper. The first topic is by Mr. Gregorio S. Naldo, RPm, RPsy, entitled Understanding the Self, followed by Leadership and Camaraderie, by Ms. Vina Karina Baaco.

    On the afternoon program at the PSU Gymnasium, we have Ms. Ysabelle Nicole Grande and Mr. Henry Lorenz Parreñas as our Masters of Ceremony. Ms. Regine Dianolo, a 4th year BS Social Work student, blessed us with an invocation, followed by PSU Singers for the National Anthem. As the contest proper kicked off, we witnessed the performance of three Contemporary Dance groups, with the CCJE Dance Club (Mary Angel T. Cayabyab & Jhon Glen De Castro) bagging the Grand Winner prize. 1st place was awarded to CBA 2 (Marlon A. Demolar & Eunice Gane C. San Juan), and 2nd place to CBA 1 (Macreo L. Gallego & Florel B. Borja). Ms. Ailene Z. Bautista, a 4th year BS Criminology student, then showcased her talent for an intermission number before the second half of the program.

    We then jammed with the Battle of the Bands contestants for the second part of the program, where Royale won as the Grand Winner, followed by CCJE Band for the 1st place. WAKABS won the 2nd place, and WAKOBS for the 3rd place. We have also been joined by The Crudes and the CHTM Band. Dr. Grace N. Abrina delivered the closing remarks as the event comes to an end.


    This event would not be successful if not for the team behind that made it possible.
    Team OSAS, spearheaded by Ms. Kristy Talatagod, with Mr. Jethro Sandrino, and Mr. Ric Henry Pagmanoja. Committee leads; Ms. Glyza Almeniana, Ms. Vina Karina Baaco, Ms. Katrina Martinez, Ms. Veyrainchiel Nacasi, and Ms. Evangeline Dela Cruz. Along with Dr. Grace Abrina, Prof. Lucia Fresnillo, Mr. Mark Mendoza, Ms. Ana Marquez, and Ms. Elma Eleazar.

    Special thanks to TATSULOK, Psu Pio, Pioneer Publication, Mr. Elijah Daniel Geanga of PSU Medua Hub and John Paul Roman of SEPO for covering the entire event, as well as the teasers of the contestants. Also to Mr. Daryll Homecillo as the lead graphic designer for the visuals, together with Mr. Mattheo Yves Tamayor.

    Thank you to the students that showcased their talents during the intermission segments of the program: PSU Sining Palawan Dance Troupe, Ms. Ailene Z. Bautista of BS Criminology, Mr. Gerrict E. Lapida and Mr. June Ocampo of BS Architecture, SIGNUS Band, and Ms. Regine Dianolo of BS Social Work.

    Huge thanks to the CSG Governors for their utmost support and cooperation: Mary Hope Hayagan of CBA, Dorothy Grace Matillano of CNHS, Ailene Bautista of CCJE, Kimberly Romero of CEAT, Jessica Evardo of CHMT, Jobelle Cervantes of CS, Claude Betita of CAH, and John Ellie Moncatar of CTE.

    And you, for being among the audience of the event! Thank you for your participation!

    This concludes the TES Localized Congress 2022. See you on the Regional Congress! ✨`);

  const [limit, setLimit] = useState(true);
  return (
    <div>
      <Hero />

      <Box sx={styles.postCon}>
        <TextField
          id="outlined-start-adornment"
          sx={{ m: 1, width: "28ch" }}
          size="small"
          placeholder=" Search post/announcement.."
          InputProps={{
            startAdornment: (
              <Icon
                icon="uil:search"
                width={20}
                style={{ color: "grey", marginRight: "1px" }}
              />
            ),
          }}
        />

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Sort by</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Sort by"
            onChange={(e) => setAge(e.target.value)}
          >
            <MenuItem value="">
              <em>Sort by</em>
            </MenuItem>
            <MenuItem value={"asc"}>Date asc</MenuItem>
            <MenuItem value={"desc"}>Date desc</MenuItem>
          </Select>
        </FormControl>

        <Box sx={styles.postBox}>
          <Box sx={styles.profileCon}>
            <img
              className="headerLogo"
              src={"../assets/images/osas.png"}
              alt="osas logo"
              style={styles.logo}
            />
            <Box sx={styles.nameCon}>
              <Typography sx={styles.name}>PSU OSAS</Typography>
              <Typography sx={styles.subName}>Dec 7, 2h ago</Typography>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6">
              The TES Localized Congress 2022 ended with a bang! 💥
            </Typography>

            <Typography variant="body2" sx={styles.caption}>
              {limit ? caption.substring(0, 520) : caption}
              {limit ? (
                <Button
                  onClick={() => setLimit(false)}
                  sx={{ textTransform: "capitalize" }}
                >
                  see more..
                </Button>
              ) : (
                <Button
                  onClick={() => setLimit(true)}
                  sx={{ textTransform: "capitalize" }}
                >
                  see less..
                </Button>
              )}
            </Typography>
          </Box>

          <Box sx={styles.postImageCon}>
            <img
              src={"../assets/images/pic1.jpg"}
              alt="post image"
              style={styles.postImage}
            />
          </Box>

          <Box sx={styles.feedBackCon}>
            <Box sx={styles.iconText}>
              <Icon icon="mdi:cards-heart" color="#FF725E" width={22} />
              <Typography sx={{ fontSize: "14px" }}>230 Likes</Typography>
            </Box>

            <Box sx={styles.iconText}>
              <Icon icon="tabler:message-circle-2" color="#FF725E" width={22} />
              <Typography sx={{ fontSize: "14px" }}>12 Comments</Typography>
            </Box>
          </Box>

          <Box sx={styles.commentCon}>
            <Box sx={styles.profileCon}>
              <img
                className="headerLogo"
                src={"../assets/images/van.png"}
                alt="user"
                style={styles.logo}
              />
              <Box sx={styles.commentNameCap}>
                <Typography sx={styles.name}>Ivan Hamid</Typography>
                <Typography sx={styles.commentText}>
                  Go Sheena Mae!!! You&apos;re so galing galing! keep it up!
                  Love love!! &#x1F9E1; &#x1F9E1;
                </Typography>
              </Box>
            </Box>
            <Box sx={styles.profileCon}>
              <img
                className="headerLogo"
                src={"../assets/images/mars.jpg"}
                alt="user"
                style={styles.logo}
              />
              <Box sx={styles.commentNameCap}>
                <Typography sx={styles.name}>Marcelito Cosicol</Typography>
                <Typography sx={styles.commentText}>
                  Grabe galing!! Cute girls! &#x1F9E1;{" "}
                </Typography>
              </Box>
            </Box>
            <Box sx={styles.profileCon}>
              <img
                className="headerLogo"
                src={"../assets/images/nel.png"}
                alt="user"
                style={styles.logo}
              />
              <Box sx={styles.commentNameCap}>
                <Typography sx={styles.name}>Jhonnel Garcia</Typography>
                <Typography sx={styles.commentText}>
                  Pretty ni Sheena!! Aking lang sya @Ivan Hamid &#128527;
                  &#x1F9E1;
                </Typography>
              </Box>
            </Box>

            <Box sx={styles.commentField}>
              <Box sx={styles.profileComCon}>
                <img
                  className="headerLogo"
                  src={"../assets/images/jerick.png"}
                  alt="user"
                  style={styles.logo}
                />
                <Box sx={[styles.commentAcc, { width: "100%" }]}>
                  <input
                    placeholder="Write a comment..."
                    style={styles.commentInput}
                  />
                  <Button
                    onClick={() => setLimit(false)}
                    sx={{ textTransform: "capitalize", color: primaryColor }}
                  >
                    Send
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Announcement;
