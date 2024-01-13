import Post from "../model/post.js";
import { v2 as cloudinary } from "cloudinary";

export const createPost = async (request, response) => {
  try {
    const image = await cloudinary.uploader.upload(request?.body?.picture, {
      folder: "posts",
    });
    console.log(image);
    const newPostData = { ...request.body, picture: image.secure_url };
    console.log("new post data", newPostData);
    const post = await new Post(newPostData);
    post.save();

    return response.status(200).json("Post saved successfully");
  } catch (error) {
    return response.status(500).json(error);
  }
};

export const getAllPosts = async (request, response) => {
  // let username = request.query.username;
  let category = request.query.category;
  let posts;
  try {
    if (category) {
      posts = await Post.find({ categories: category });
    }
    // else if ( category) posts = await Post.find({ categories: category });
    else {
      posts = await Post.find({});
    }
    return response.status(200).json(posts);
  } catch (error) {
    return response.status(500).json({ msg: error.message });
  }
};

export const getPost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);

    return response.status(200).json(post);
  } catch (error) {
    return response.status(500).json({ mgs: error.message });
  }
};

export const updatePost = async (request, response) => {
  try {
    console.log(request?.params);
    const post = await Post.findById(request.params.id);

    if (!post) {
      return response.status(404).json({ msg: "Post not found" });
    }

    const image = request.body?.picture
      ? await cloudinary.uploader.upload(request.body?.picture, {
          folder: "posts",
        })
      : null;
    console.log(image);
    const newPostData = {
      ...request.body,
      picture: image?.secure_url || post?.picture,
    };
    console.log("new post data", newPostData);
    //$set(array ke ander object ka replace ), $addToSet(array ke ander obj ko append)
    await Post.findByIdAndUpdate(request.params.id, { $set: newPostData });

    return response.status(200).json({ msg: "post updated successfully" });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};

export const deletePost = async (request, response) => {
  try {
    const post = await Post.findByIdAndDelete(request.params.id);
    if (!post) {
      return response.status(404).json({ msg: "Post not found" });
    }

    // await post.delete();

    return response.status(200).json({ msg: "post deleted successfully" });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
