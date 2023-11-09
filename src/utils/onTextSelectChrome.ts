const onTextSelectChrome = (callback: (selection: string) => void) => {
    chrome.tabs.executeScript(
        { code: "window.getSelection().toString();" },
        selection => { if (selection[0]) callback(selection[0]) }
    )
}

export default onTextSelectChrome;