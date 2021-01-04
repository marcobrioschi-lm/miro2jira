miro.onReady(() => {
  const icon24 =
        '<g><title>Layer 1</title><line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_5" y2="3.56742" x2="21.36954" y1="3.56742" x1="7.95236" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/><line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_8" y2="15.26435" x2="20.61998" y1="3.49246" x1="20.61998" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/><line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_9" y2="9.49346" x2="8.70192" y1="3.86724" x1="8.70192" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="none"/><line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_11" y2="14.58599" x2="13.81058" y1="14.58599" x1="21.3845" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="none"/><line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_13" y2="12.95752" x2="2.70398" y1="22.41001" x1="2.70398" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="none"/><line stroke="#000" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_14" y2="13.7286" x2="8.236" y1="13.7286" x1="2.78081" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/><rect id="svg_18" height="4.99373" width="4.14864" y="11.4238" x="7.77454" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="none"/></g>'

  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Miro To Jira',
        svgIcon: icon24,
        onClick: () => {
          miro.board.ui.openLeftSidebar('sidebar.html')
        },
      },
    },
  })
})
