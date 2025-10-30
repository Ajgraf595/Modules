// Default-exported Post class (tiny “mistakes”: a stray TODO, unused getter, extra ;)
// Handles a blog post with title + content and a publish() method.

export default class Post {
  // NOTE: author is optional for later features (not used yet)
  constructor(title, content, author = "anonymous") {
    if (!title || !content) {
      throw new Error("Post needs both a title and content"); // simple guard
    }
    this.title = title;
    this.content = content;
    this.author = author;
    this.publishedAt = null;
  }

  // (slightly silly) extra method we don’t really need yet:
  get isPublished() {
    return !!this.publishedAt; // not used in blog.mjs but okay to keep
  }

  publish() {
    // TODO: add tags later (not in requirements, just a reminder for myself)
    this.publishedAt = new Date();
    console.log(`📝 "${this.title}" by ${this.author}`);
    console.log(this.content);
    console.log("Published at:", this.publishedAt.toISOString());;
  }
}
