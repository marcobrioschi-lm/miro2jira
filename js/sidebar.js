miro.onReady(() => {
    miro.addListener('SELECTION_UPDATED', (e) => {
        showSubstaskDefinitions(e.data)
    })
    miro.board.selection.get().then(showSubstaskDefinitions)
})

function showSubstaskDefinitions(selection) {
    generateSubstaskDefinitions(selection)
        .then(publishSubstaskDefinitions)
}

function isSticker(widget) {
    return widget.type === 'STICKER'
}

function getWidget(widget) {
    return miro.board.widgets.get({id: widget.id})
}

function extractText(widget) {
    return widget[0].plainText
}

function generateSubstaskDefinitions(selection) {
    let widgets = Promise.all(
            selection
                .filter(isSticker)
                .map(getWidget)
        )
    return widgets.then(w => w.map(extractText))
}

function publishSubstaskDefinitions(titles) {
    let subTaskDefinitions = ""
    titles.forEach(title => {
        subTaskDefinitions += '- ' + title + '\n'
    })
    document.getElementById('subtask-definitions').value = subTaskDefinitions
}