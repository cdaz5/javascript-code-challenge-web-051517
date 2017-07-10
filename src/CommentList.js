class CommentList {
  constructor(array) {
    this.commentsArray = []
    this.initiliazeList(array)
  }

  initiliazeList(array) {
    array.forEach((text) => {
      this.commentsArray.push(new Comment(text))
    })
  }

  render() {
    let lis = this.commentsArray.map((comment) => {
      return comment.render()
    })
    return `<ul>${lis.join(' ')}</ul>`
  }

  addComment(string) {
    let newComment = new Comment(string)
    this.commentsArray.push(newComment)
  }


}
