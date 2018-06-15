import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startMain = () => {

    Promise.all([
        Icon.getImageSource("ios-map", 30),
        Icon.getImageSource("ios-share-alt", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Share Place Screen",
                    title: "Share Place Screen",
                    icon: sources[0]
                },
                {
                    screen: "awesome-places.FindPlaceScreen",
                    label: "Find Place Screen",
                    title: "Find Place Screen",
                    icon: sources[1]
                }
            ]
        })
    })
}

export default startMain;