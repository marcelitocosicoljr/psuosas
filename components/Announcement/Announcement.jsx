import { Icon } from "@iconify/react";
import { PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import ButtonUI from "components/UIComponents/Button/Button";
import React, { useState } from "react";
import { primaryColor } from "../../styles/Utility/colorTheme";
import Hero from "../Hero/Hero";
import { styles } from "./stlyles";
import { PostsDataService } from "lib/services/dataServices";
import useUploadImage from "hooks/useUploadImage";

const Announcement = ({ data }) => {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const [limit, setLimit] = useState(true);

  const [uploadImg, setUploadImg] = useState(null);
  const Upload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = URL.createObjectURL(e.target.files[0]);
      setUploadImg(img);
    }
  };

  //sample for uploading photo
  const [file, setFile] = useState(null);
  const [upload, uploading] = useUploadImage({ file });

  //Pass lang sa onChange ng input
  const handleSelectImage = (e) => {
    const file = e.target.files ? e.target.files[0] : undefined;
    setFile(file);
  };

  console.log(file);
  const handleFormSubmit = async () => {
    const photo = await upload();
    console.log({ photo });

    if (!uploading) {
      const res = await PostsDataService.create({
        message,
        photo: photo !== null ? photo : "",
      });

      console.log(res);
    }
  };

  return (
    <div>
      <Hero title="Announcements" />

      <Box sx={styles.postFormCon}>
        <Box sx={styles.postFormBox}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Post announcement here.."
            style={styles.postTextField}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Box>

        {file && (
          <Box sx={styles.postImageUpload}>
            <img
              src={URL.createObjectURL(file)}
              alt="post image"
              style={styles.postImage}
            />
          </Box>
        )}

        <Box sx={styles.postBtns}>
          {file ? (
            <IconButton
              color="primary"
              sx={{ bgcolor: "#F5F5F6" }}
              onClick={() => setFile(null)}
            >
              <Icon icon="flat-color-icons:remove-image" />
            </IconButton>
          ) : (
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{ bgcolor: "#F5F5F6" }}
            >
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleSelectImage}
              />
              <Icon icon="flat-color-icons:add-image" />
            </IconButton>
          )}

          <ButtonUI
            text={uploading ? "Uploading post" : "Post"}
            variant="primary"
            disabled={uploading}
            onClick={handleFormSubmit}
          />
        </Box>
      </Box>

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
        {data?.map((val) => {
          return (
            <Box sx={styles.postBox} key={val.id}>
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
                {/* <Typography variant="h6">
                  The TES Localized Congress 2022 ended with a bang! 💥
                </Typography> */}

                <Typography variant="body2" sx={styles.caption}>
                  {val.message}
                  {/* {limit ? message.substring(0, 520) : message}
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
                  )} */}
                </Typography>
              </Box>

              {val.photo !== "" && (
                <Box sx={styles.postImageCon}>
                  <img
                    src={val.photo}
                    alt="post image"
                    style={styles.postImage}
                  />
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default Announcement;
