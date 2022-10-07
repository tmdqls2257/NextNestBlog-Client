import { CommentType } from "components/comment/Comment";
import NetworkService, { MethodType } from "../network/http";

export type Tag = {
  name: string;
};

export type postBlogDataType = {
  title: string;
  contents: string;
  description: string;
  imageUrl?: string;
};

class BlogNetworkService {
  constructor() {}
  async postBlog(postData: postBlogDataType) {
    const response = await NetworkService.request(
      "blogs",
      MethodType.post,
      postData
    );
    return response;
  }

  async postTags(tags: Tag[]) {
    const response = await NetworkService.request(
      "tags",
      MethodType.post,
      tags
    );
  }

  async postComment(blogId: string, comment: CommentType) {
    await NetworkService.request("commnet", MethodType.post, {
      blogId,
      comment,
    });
  }

  async joinBlogTags(tags: string[], blog: postBlogDataType) {
    const data = {
      blog,
      tags: tags,
    };
    console.log(data);

    const response = await NetworkService.request(
      "blogs/tags",
      MethodType.post,
      data
    );
  }

  async getAllBlogs() {
    const response = await NetworkService.request("blogs", MethodType.get);
    return response;
  }

  async getBlog(ID: string) {
    const response = await NetworkService.request(
      `blogs/${ID}`,
      MethodType.get
    );

    return response;
  }

  async imgUpload(formData: FormData): Promise<string> {
    const response = await NetworkService.request(
      "blogs/upload",
      MethodType.post,
      formData
    );

    return response;
  }

  async deleteBlog(ID: string) {
    const response = await NetworkService.request(
      `blogs/${ID}`,
      MethodType.delete
    );

    return response;
  }
}

const BlogService = new BlogNetworkService();

export default BlogService;
