$(document).ready(function(){
  addComment()
  filterComments()
})

function addComment() {
  $('#note-form').on('submit', (event) => {
  event.preventDefault();
  let newComment = $('#comment').val()
  $('#comments-list').append(`
    <li>${newComment}</li>`)
  $('#comment').val('')
})
}

function filterComments() {
  $('#search-form').on('submit', (event) => {
    event.preventDefault();
    let = searchTerm = $('#searchWord').val()
    let list = $('#comments-list li')
    let arrayList = Array.from(list)
    let match = arrayList.filter(li => li.innerHTML === searchTerm)
    if (match.length > 0) {
      $('#comments-list').empty().append(`<li>${match[0].innerText}</li>`)
    }
    $(`#searchWord`).val('')
  })
}
