console.log('asdf')

let shoppingList = [{
        text: 'apples', 
        isChecked: false
     },
     {
        text: 'oranges',
        isChecked: false
     }, 
     {
         text: 'milk',
         isChecked: true   
     },
     {
        text: 'bread',
        isChecked: false
     }

]

function addItem(text) {
    shoppingList.push({text: text, isChecked: false})
}

function checkToggle(listItem){
  listItem.isChecked = !listItem.isChecked
}

function deleteItem(listItemIndex){
  shoppingList.splice(listItemIndex, 1)
}


function renderList(){
    $('.shopping-list').html('')

    shoppingList.forEach(function (listItem, index){
        let itemHTML = `<li>
        <span class="shopping-item ${listItem.isChecked ? 'shopping-item__checked': ''}">${listItem.text}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle", data-itemID="${index}">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete", data-itemid="${index}">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
      $('.shopping-list').append(itemHTML)
    })

    $('.shopping-item-toggle').on('click', function(e){
      let listItemIndex = $(e.currentTarget).data("itemid")
      checkToggle(shoppingList[listItemIndex])
      renderList()
    })

    $('.shopping-item-delete').on('click', function (e){
      let listItemIndex = $(e.currentTarget).data("itemid")
      deleteItem(listItemIndex) 
      renderList()
    })
}

$('#js-shopping-list-form').on('submit',function(e){
    e.preventDefault()
   let inputText = $('#shopping-list-entry').val()
    addItem(inputText)
    renderList()
})




renderList()