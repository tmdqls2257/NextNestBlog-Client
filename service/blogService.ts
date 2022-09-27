import NetworkService, { MethodType } from "../network/http";

type postDataType = {
  title: string;
  contents: string;
  description: string;
  imageUrl: string;
  tags: string[];
};

class BlogNetworkService {
  constructor() {}
  async post(postData: postDataType) {
    const response = await NetworkService.request(
      "blogs",
      MethodType.post,
      postData
    );
    return response;
  }

  async getAllBlogs() {
    const response = await NetworkService.request("blogs", MethodType.get);
    return response;
  }

  async getBlog(ID: string) {
    const response = await NetworkService.request(
      `blogs/${ID}`,
      MethodType.get,
      {}
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
