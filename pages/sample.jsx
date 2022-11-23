import { PostsDataService } from "lib/services/dataServices";
import React, { useState } from "react";
import useUploadImage from "hooks/useUploadImage";
//fetch data using incremental
export async function getStaticProps() {
  const PostsData = await PostsDataService.getAll();

  return {
    props: {
      data: PostsData,
    },
    revalidate: 60,
  };
}

const Sample = ({ data }) => {
  console.log(data);
  //Sample code ng login with google
  //Pass mo lang sa button yung googleauth na function
  const googleAuth = async () => {
    const res = await signInWithGoogle();
    if (res === undefined) {
      await router.push("/");
    }
  };

  //Sample code pag custom email at password naman ang gamit
  //pasa lang yung state
  const handleSubmit = async () => {
    try {
      const res = await logInWithEmailAndPassword(emailAddress, password);
      if (res === "auth/user-not-found") {
        setFormError({ emailAddress: "User doesn't exist!" });
      } else if (res === "auth/wrong-password") {
        setFormError({ password: "Incorrect password!" });
      }

      if (res === undefined) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
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

  //sample ng add
  const handleAddData = async (e) => {
    e.preventDefault();

    await PostsDataService.create("pass yung data dito");
  };

  //sample ng update
  const handleUpdateDate = async (e) => {
    e.preventDefault();
    await update.create("id", "pass yung data dito");
  };

  //sample ng remove
  const handleRemoveDate = async (e) => {
    e.preventDefault();
    await update.remove("id");
  };

  return <div>sample</div>;
};

export default Sample;
