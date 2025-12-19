
const dummyApiCall = {
    showscrollBar: true,
    showAccordion: true,
    showTabs: true,
    showTheme: true,
    showTicTacToe: true,
    showMainMenu: true,
    showGitHub: false,
    showImageSlider: false,
    showQrCode: false,
    showRandomColor: true,
    showRiting: true,
};

const featureFlagsDataServiceCall = () => {
    return new Promise((resolve, reject) => {
        if(dummyApiCall) setTimeout(resolve(dummyApiCall), 500);
        else reject("Some error occured! Please try again")
    })
}

export default featureFlagsDataServiceCall;